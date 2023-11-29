// Copyright 2023 @paritytech/polkadot-staking-dashboard authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import { DefaultParams } from 'consts';
import CreditcoinIconSVG from 'img/ic_creditcoin.svg?react';
import CreditcoinLogoSVG from 'img/logo_creditcoin.svg?react';

import type { Network, NetworkName, Networks } from 'types';

const CreditcoinTokenSVG = CreditcoinIconSVG;

type NetworkConfig = {
  name: NetworkName;
  endpoints: Network['endpoints'];
  namespace?: string;
  subscanEndpoint: string;
};

const makeCreditcoinNetwork = ({
  name,
  endpoints,
  namespace,
  subscanEndpoint,
}: NetworkConfig): Network => {
  return {
    name,
    endpoints,
    namespace: namespace ?? '09573a3526818a8ecd6eb92f60f1175d',
    subscanEndpoint,

    api: {
      unit: 'CTC',
      priceTicker: 'CTCUSDT',
    },
    params: {
      ...DefaultParams,
    },
    ss58: 42,
    unit: 'CTC',
    units: 18,
    brand: {
      icon: CreditcoinIconSVG,
      token: CreditcoinTokenSVG,
      logo: {
        svg: CreditcoinLogoSVG,
        width: '7.2em',
      },
      inline: {
        svg: CreditcoinIconSVG,
        size: '1.05em',
      },
    },
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
    defaultFeeReserve: 0.1,
  };
};

const makeNetworkList = () => {
  const networks: Networks = {
    creditcoin: makeCreditcoinNetwork({
      name: 'creditcoin',
      endpoints: {
        lightClient: null,
        defaultRpcEndpoint: 'Gluwa',
        rpcEndpoints: {
          Gluwa: 'wss://rpc.mainnet.creditcoin.network/ws',
        },
      },
      namespace: 'creditcoin-mainnet',
      subscanEndpoint: 'http://127.0.0.1:4399',
    }),
    creditcoinTest: makeCreditcoinNetwork({
      name: 'creditcoinTest',
      endpoints: {
        lightClient: null,
        defaultRpcEndpoint: 'Gluwa',
        rpcEndpoints: {
          Gluwa: 'wss://rpc.testnet.creditcoin.network/ws',
        },
      },
      namespace: '09573a3526818a8ecd6eb92f60f1175d',
      subscanEndpoint: 'https://subscan-testnet.creditcoin.network/',
    }),
    creditcoinDev: makeCreditcoinNetwork({
      name: 'creditcoinDev',
      endpoints: {
        lightClient: null,
        defaultRpcEndpoint: 'Gluwa',
        rpcEndpoints: {
          Gluwa: 'wss://rpc.devnet.creditcoin.network/ws',
        },
      },
      namespace: '09573a3526818a8ecd6eb92f60f1175d',
      subscanEndpoint: 'http://127.0.0.1:4399',
    }),
  };
  if (import.meta.env.DEV) {
    networks.creditcoinLocal = makeCreditcoinNetwork({
      name: 'creditcoinLocal',
      endpoints: {
        lightClient: null,
        defaultRpcEndpoint: 'Local',
        rpcEndpoints: {
          Local: 'ws://127.0.0.1:9944',
        },
      },
      subscanEndpoint: 'http://127.0.0.1:4399',
    });
  }
  return networks;
};

export const NetworkList: Networks = makeNetworkList();
