// Copyright 2023 @paritytech/polkadot-staking-dashboard authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { ButtonHelp, Odometer } from '@polkadot-cloud/react';
import { useHelp } from 'contexts/Help';
import { StatBox } from './Item';
import type { NumberProps } from './types';

export const Number = ({
  label,
  value,
  unit,
  helpKey,
  decimals,
}: NumberProps) => {
  const help = helpKey !== undefined;
  const { openHelp } = useHelp();

  return (
    <StatBox>
      <div className="content chart">
        <div className="labels">
          <h3>
            <Odometer value={value} decimals={decimals} />
            {unit || null}
          </h3>
          <h4>
            {label}
            {help ? (
              <ButtonHelp marginLeft onClick={() => openHelp(helpKey)} />
            ) : null}
          </h4>
        </div>
      </div>
    </StatBox>
  );
};
