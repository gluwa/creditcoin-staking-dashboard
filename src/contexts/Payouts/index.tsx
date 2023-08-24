// Copyright 2023 @paritytech/polkadot-staking-dashboard authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import React, { useState, useEffect, useRef } from 'react';
import { useStaking } from 'contexts/Staking';
import { useApi } from 'contexts/Api';
import type { AnyApi, AnyJson, Sync } from 'types';
import { useConnect } from 'contexts/Connect';
import { useEffectIgnoreInitial } from 'library/Hooks/useEffectIgnoreInitial';
import { useNetworkMetrics } from 'contexts/Network';
import Worker from 'workers/stakers?worker';
import { rmCommas, setStateWithRef } from '@polkadot-cloud/utils';
import BigNumber from 'bignumber.js';
import { MaxSupportedPayoutEras, defaultPayoutsContext } from './defaults';
import type { EraPayout, PayoutsContextInterface } from './types';
import {
  getLocalEraExposure,
  hasLocalEraExposure,
  setLocalEraExposure,
} from './Utils';

const worker = new Worker();

export const PayoutsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { api, network } = useApi();
  const { activeAccount } = useConnect();
  const { activeEra } = useNetworkMetrics();
  const { isNominating, fetchEraStakers } = useStaking();

  // Store active accont's payout state.
  const [pendingPayouts, setPendingPayouts] = useState<EraPayout[] | null>(
    null
  );

  // Track whether payouts have been fetched.
  const [payoutsSynced, setPayoutsSynced] = useState<Sync>('unsynced');
  const payoutsSyncedRef = useRef(payoutsSynced);

  // Calculate eras to check for pending payouts.
  const getErasToCheck = () => {
    const startEra = activeEra?.index.minus(1) || new BigNumber(1);
    const endEra = BigNumber.max(
      startEra.minus(MaxSupportedPayoutEras).plus(1),
      1
    );
    return {
      startEra,
      endEra,
    };
  };

  // Determine whether to keep processing a next era, or move onto checking for pending payouts.
  const shouldContinueProcessing = (era: BigNumber, endEra: BigNumber) => {
    // If there are more exposures to process, check next era.
    if (new BigNumber(era).isGreaterThan(endEra))
      checkEra(new BigNumber(era).minus(1));
    // If all exposures have been processed, check for pending payouts.
    else if (new BigNumber(era).isEqualTo(endEra)) {
      checkPendingPayouts();
    }
  };

  // Fetch exposure data for an era, and pass the data to the worker to determine the validator the
  // active account was backing in that era.
  const checkEra = async (era: BigNumber) => {
    if (!activeAccount) return;

    // Bypass worker if local exposure data is available.
    if (hasLocalEraExposure(network.name, era.toString(), activeAccount)) {
      // Continue processing eras, or move onto reward processing.
      shouldContinueProcessing(era, getErasToCheck().endEra);
    } else {
      const exposures = await fetchEraStakers(era.toString());
      worker.postMessage({
        task: 'processEraForExposure',
        era: String(era),
        who: activeAccount,
        networkName: network.name,
        exposures,
      });
    }
  };

  // Handle worker message on completed exposure check.
  worker.onmessage = (message: MessageEvent) => {
    if (message) {
      // ensure correct task received.
      const { data } = message;
      const { task } = data;
      if (task !== 'processEraForExposure') return;

      // Exit early if network or account conditions have changed.
      const { networkName, who } = data;
      if (networkName !== network.name || who !== activeAccount) return;

      // eslint-disable-next-line
      const { era, exposedValidators } = data;
      const { endEra } = getErasToCheck();

      // Store received era exposure data results in local storage.
      setLocalEraExposure(
        networkName,
        era,
        who,
        exposedValidators,
        endEra.toString()
      );

      // Continue processing eras, or move onto reward processing.
      shouldContinueProcessing(era, endEra);
    }
  };

  // Start pending payout process once exposure data is fetched.
  // eslint-disable-next-line
  const checkPendingPayouts = async () => {
    if (!api || !activeAccount) return;

    // Fetch reward data and determine whether there are pending payouts.
    const { startEra, endEra } = getErasToCheck();
    let currentEra = startEra;

    const calls = [];
    while (currentEra.isGreaterThanOrEqualTo(endEra)) {
      const thisEra = currentEra;

      const validatorPrefsCalls =
        Object.keys(
          getLocalEraExposure(
            network.name,
            currentEra.toString(),
            activeAccount
          )
        ).map((validator: AnyJson) =>
          api.query.staking.erasValidatorPrefs<AnyApi>(
            thisEra.toString(),
            validator
          )
        ) || [];

      calls.push(
        Promise.all([
          api.query.staking.erasValidatorReward<AnyApi>(thisEra.toString()),
          api.query.staking.erasRewardPoints<AnyApi>(thisEra.toString()),
          ...validatorPrefsCalls,
        ])
      );
      currentEra = currentEra.minus(1);
    }

    currentEra = startEra;
    const eraPayouts: EraPayout[] = [];
    for (const [reward, points, ...prefs] of await Promise.all(calls)) {
      const eraTotalPayout = new BigNumber(rmCommas(reward.toHuman()));
      const eraRewardPoints = points.toHuman();

      const exposedValidators = getLocalEraExposure(
        network.name,
        currentEra.toString(),
        activeAccount
      );

      const i = 0;
      for (const pref of prefs) {
        const eraValidatorPrefs = pref.toHuman();
        const commission = new BigNumber(
          eraValidatorPrefs.commission.replace(/%/g, '')
        ).multipliedBy(0.01);

        // Get validator from era exposure data. Falls back no null if it cannot be found.
        const validator = Object.keys(exposedValidators)?.[i] || '';
        const share = (Object.values(exposedValidators)?.[i] as string) || '0';

        // Calculate the validator's share of total era payout.
        const totalRewardPoints = new BigNumber(
          rmCommas(eraRewardPoints.total)
        );
        const validatorRewardPoints = new BigNumber(
          rmCommas(eraRewardPoints.individual?.[validator] || '0')
        );
        const validatorShare = validatorRewardPoints.isZero()
          ? new BigNumber(0)
          : validatorRewardPoints.dividedBy(totalRewardPoints);

        // Deduct validator commission from it's share.
        const validatorReward = validatorShare.multipliedBy(eraTotalPayout);
        const validatorCommission = validatorReward.multipliedBy(commission);
        const leftoverReward = validatorReward.minus(validatorCommission);

        // Determine `who`'s share of the leftover reward.
        const whoPayout = leftoverReward.multipliedBy(share);

        // TODO: Store payout data in local storage.
        // TODO: Could store these payouts better, e.g. put all payouts for an era under one key.

        eraPayouts.push({ era: currentEra, payout: whoPayout });
      }
      currentEra = currentEra.minus(1);
    }

    setPendingPayouts(eraPayouts);
    setStateWithRef('synced', setPayoutsSynced, payoutsSyncedRef);
  };

  // Fetch payouts if active account is nominating.
  useEffect(() => {
    if (
      isNominating() &&
      !activeEra.index.isZero() &&
      payoutsSyncedRef.current === 'unsynced'
    ) {
      payoutsSyncedRef.current = 'syncing';
      // Start checking eras for exposures, starting with the previous one.
      checkEra(activeEra.index.minus(1));
    }
  }, [isNominating(), activeEra]);

  // Clear payout state on network / active account change.
  useEffectIgnoreInitial(() => {
    if (pendingPayouts !== null) {
      setPendingPayouts(null);
      setStateWithRef('unsynced', setPayoutsSynced, payoutsSyncedRef);
    }
  }, [network, activeAccount]);

  return (
    <PayoutsContext.Provider
      value={{ pendingPayouts, payoutsSynced: payoutsSyncedRef.current }}
    >
      {children}
    </PayoutsContext.Provider>
  );
};

export const PayoutsContext = React.createContext<PayoutsContextInterface>(
  defaultPayoutsContext
);

export const useBonded = () => React.useContext(PayoutsContext);
