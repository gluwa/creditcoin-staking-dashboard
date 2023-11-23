// Copyright 2023 @paritytech/polkadot-staking-dashboard authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import { Community } from 'pages/Community';
import { Nominate } from 'pages/Nominate';
import { Overview } from 'pages/Overview';
import { Payouts } from 'pages/Payouts';
import { Pools } from 'pages/Pools';
import { Validators } from 'pages/Validators';
import type { PageCategoryItems, PagesConfigItems } from 'types';
import CommunityIcon from '../img/ic_community.svg?react';
import NominateIcon from '../img/ic_nominate.svg?react';
import OverviewIcon from '../img/ic_overview.svg?react';
import PayoutsIcon from '../img/ic_payouts.svg?react';
import PoolsIcon from '../img/ic_pools.svg?react';
import ValidatorsIcon from '../img/ic_validators.svg?react';

const BASE_URL = import.meta.env.BASE_URL;
export const PageCategories: PageCategoryItems = [
  {
    id: 1,
    key: 'default',
  },
  {
    id: 2,
    key: 'stake',
  },
  {
    id: 3,
    key: 'validators',
  },
];

export const PagesConfig: PagesConfigItems = [
  {
    category: 1,
    key: 'overview',
    uri: `${BASE_URL}`,
    hash: '/overview',
    Entry: Overview,
    icon: () => <OverviewIcon width="13.5" height="11.7" />,
  },
  {
    category: 2,
    key: 'pools',
    uri: `${BASE_URL}pools`,
    hash: '/pools',
    Entry: Pools,
    icon: () => (<PoolsIcon height={'12.6'} width={'12.6'}/>)
  },
  {
    category: 2,
    key: 'nominate',
    uri: `${BASE_URL}nominate`,
    hash: '/nominate',
    Entry: Nominate,
    icon: () => <NominateIcon width="12.6" height="7.2" />,
  },
  {
    category: 2,
    key: 'payouts',
    uri: `${BASE_URL}payouts`,
    hash: '/payouts',
    Entry: Payouts,
    icon: () => <PayoutsIcon width="12.6" height="10.8" />,
  },
  {
    category: 3,
    key: 'validators',
    uri: `${BASE_URL}validators`,
    hash: '/validators',
    Entry: Validators,
    icon: () => <ValidatorsIcon width="12.6" height="12.6" />,
  },
  {
    category: 3,
    key: 'community',
    uri: `${BASE_URL}community`,
    hash: '/community',
    Entry: Community,
    icon: () => <CommunityIcon width="12.6" height="11.7" />,
  },
];
