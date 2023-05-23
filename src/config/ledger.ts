// Copyright 2023 @paritytech/polkadot-staking-dashboard authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import type { LedgerApp } from 'contexts/Hardware/Ledger/types';
import PolkadotSVG from 'img/appIcons/polkadot.svg?react';

export const LedgerApps: LedgerApp[] = [
  {
    network: 'creditcoin',
    appName: 'Creditcoin',
    Icon: PolkadotSVG,
  },
];
