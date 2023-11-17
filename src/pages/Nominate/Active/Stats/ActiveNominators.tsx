// Copyright 2023 @paritytech/polkadot-staking-dashboard authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import BigNumber from 'bignumber.js';
import { useTranslation } from 'react-i18next';
import { useApi } from 'contexts/Api';
import { useStaking } from 'contexts/Staking';
import { Pie } from 'library/StatBoxList/Pie';

export const ActiveNominatorsStat = () => {
  const { t } = useTranslation('pages');
  const { consts } = useApi();
  const { maxElectingVoters } = consts;
  let { totalActiveNominators } = useStaking().eraStakers;
  totalActiveNominators = totalActiveNominators ?? 0;

  // active nominators as percent
  let totalNominatorsAsPercent = 0;
  if (maxElectingVoters.isGreaterThan(0)) {
    totalNominatorsAsPercent =
      totalActiveNominators ?? 0 / maxElectingVoters.dividedBy(100).toNumber();
  }

  const params = {
    label: t('overview.activeNominators'),
    stat: {
      value: totalActiveNominators,
      total: maxElectingVoters.toNumber(),
      unit: '',
    },
    graph: {
      value1: totalActiveNominators,
      value2: maxElectingVoters.minus(totalActiveNominators).toNumber(),
    },
    tooltip: `${new BigNumber(totalNominatorsAsPercent)
      .decimalPlaces(2)
      .toFormat()}%`,
    helpKey: 'Active Nominators',
  };

  return <Pie {...params} />;
};
