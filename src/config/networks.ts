// Copyright 2023 @paritytech/polkadot-staking-dashboard authors & contributors
// SPDX-License-Identifier: Apache-2.0

import * as Sc from '@substrate/connect';
import { DefaultParams } from 'consts';
import { ReactComponent as PolkadotIconSVG } from 'img/polkadot_icon.svg';
import { ReactComponent as PolkadotInlineSVG } from 'img/polkadot_inline.svg';
import { ReactComponent as PolkadotLogoSVG } from 'img/polkadot_logo.svg';
import type { Networks } from 'types';

export const NetworkList: Networks = {
  creditcoinDevnet: {
    name: 'Creditcoin devnet',
    endpoints: {
      rpc: 'ws://127.0.0.1:9944',
      lightClient: Sc.WellKnownChain.polkadot,
    },
    namespace: '91b171bb158e2d3848fa23a9f1c25182',
    colors: {
      primary: {
        light: 'rgb(211, 48, 121)',
        dark: 'rgb(211, 48, 121)',
      },
      secondary: {
        light: '#552bbf',
        dark: '#6d39ee',
      },
      stroke: {
        light: 'rgb(211, 48, 121)',
        dark: 'rgb(211, 48, 121)',
      },
      transparent: {
        light: 'rgb(211, 48, 121, 0.05)',
        dark: 'rgb(211, 48, 121, 0.05)',
      },
      pending: {
        light: 'rgb(211, 48, 121, 0.33)',
        dark: 'rgb(211, 48, 121, 0.33)',
      },
    },
    subscanEndpoint: 'http://127.0.0.1:4399',
    unit: 'CTC',
    units: 10,
    ss58: 0,
    brand: {
      icon: PolkadotIconSVG,
      logo: {
        svg: PolkadotLogoSVG,
        width: '7.2em',
      },
      inline: {
        svg: PolkadotInlineSVG,
        size: '1.05em',
      },
    },
    api: {
      unit: 'CTC',
      priceTicker: 'DOTUSDT',
    },
    params: {
      ...DefaultParams,
      stakeTarget: 0.75,
    },
  },
};
