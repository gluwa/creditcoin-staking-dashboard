// Copyright 2023 @paritytech/polkadot-staking-dashboard authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { LedgerAccount } from 'contexts/Connect/types';
import type { AnyJson } from 'types';

export type LedgerHardwareContextInterface = {
  pairDevice: () => Promise<boolean>;
  setIsPaired: (v: PairingStatus) => void;
  isPaired: PairingStatus;
  transportResponse: AnyJson;
  executeLedgerLoop: (
    transport: AnyJson,
    tasks: Array<LedgerTask>,
    options?: AnyJson
  ) => Promise<void>;
  handleNewStatusCode: (ack: string, statusCode: string) => void;
  setIsImporting: (v: boolean) => void;
  cancelImport: () => void;
  resetStatusCodes: () => void;
  getIsImporting: () => boolean;
  getStatusCodes: () => Array<LedgerResponse>;
  handleErrors: (e: AnyJson) => void;
  getTransport: () => AnyJson;
  ledgerAccountExists: (a: string) => boolean;
  addLedgerAccount: (a: string) => LedgerAccount | null;
  removeLedgerAccount: (a: string) => void;
  getLedgerAccount: (a: string) => LedgerAccount | null;
};

export interface LedgerResponse {
  ack: string;
  statusCode: string;
  body?: AnyJson;
  options?: AnyJson;
}

export type LedgerTask = 'get_address';

export type PairingStatus = 'paired' | 'unpaired' | 'unknown';
