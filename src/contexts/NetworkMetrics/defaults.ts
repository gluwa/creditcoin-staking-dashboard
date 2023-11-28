// Copyright 2023 @paritytech/polkadot-staking-dashboard authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import BigNumber from 'bignumber.js';
import type {
  ActiveEra,
  NetworkMetrics,
  NetworkMetricsContextInterface,
} from './types';

export const activeEra: ActiveEra = {
  index: new BigNumber(0),
  start: new BigNumber(0),
  isPlaceholder: true,
};
export const metrics: NetworkMetrics = {
  totalIssuance: new BigNumber(0),
  fastUnstakeErasToCheckPerBlock: 0,
  minimumActiveStake: new BigNumber(0),
};

export const defaultNetworkContext: NetworkMetricsContextInterface = {
  activeEra,
  metrics,
};
