// Copyright 2023 @paritytech/polkadot-staking-dashboard authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import { Community } from 'pages/Community';
import { Nominate } from 'pages/Nominate';
import { Overview } from 'pages/Overview';
import { Payouts } from 'pages/Payouts';
import { Validators } from 'pages/Validators';
import type { PageCategoryItems, PagesConfigItems } from 'types';
import { ReactComponent as CommunityIcon } from '../img/ic_community.svg';
import { ReactComponent as NominateIcon } from '../img/ic_nominate.svg';
import { ReactComponent as OverviewIcon } from '../img/ic_overview.svg';
import { ReactComponent as PayoutsIcon } from '../img/ic_payouts.svg';
import { ReactComponent as ValidatorsIcon } from '../img/ic_validators.svg';

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
    icon: () => <OverviewIcon height="20" width="auto" />,
  },
  // Removed temporarily until there is a demand pools
  // {
  // category: 2,
  // key: 'pools',
  // uri: `${BASE_URL}pools`,
  // hash: '/pools',
  // Entry: Pools,
  // icon: () => (<PoolsIcon height={'20'} width={'auto'}/>)
  // },
  {
    category: 2,
    key: 'nominate',
    uri: `${BASE_URL}nominate`,
    hash: '/nominate',
    Entry: Nominate,
    icon: () => <NominateIcon height="20" width="auto" />,
  },
  {
    category: 2,
    key: 'payouts',
    uri: `${BASE_URL}payouts`,
    hash: '/payouts',
    Entry: Payouts,
    icon: () => <PayoutsIcon height="20" width="auto" />,
  },
  {
    category: 3,
    key: 'validators',
    uri: `${BASE_URL}validators`,
    hash: '/validators',
    Entry: Validators,
    icon: () => <ValidatorsIcon height="20" width="auto" />,
  },
  {
    category: 3,
    key: 'community',
    uri: `${BASE_URL}community`,
    hash: '/community',
    Entry: Community,
    icon: () => <CommunityIcon height="20" width="auto" />,
  },
];
