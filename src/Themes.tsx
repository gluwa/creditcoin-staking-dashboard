// Copyright 2023 @paritytech/polkadot-staking-dashboard authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import { ThemeProvider } from 'styled-components';
import { Entry } from '@polkadot-cloud/react';
import { Router } from 'Router';
import { useTheme } from 'contexts/Themes';

// light / dark `mode` added to styled-components provider
// `@polkadot-cloud/react` themes are added to `Entry`.
export const ThemedRouter = () => {
  const { mode } = useTheme();

  return (
    <ThemeProvider theme={{ mode }}>
      {
        // FIXME: the @polkadotcloud/core-ui package only includes polkadot, westend, and kusama
        // we'll have to figure out a way to theme it for other networks
      }
      <Entry mode={mode} theme="polkadot-relay">
        <Router />
      </Entry>
    </ThemeProvider>
  );
};
