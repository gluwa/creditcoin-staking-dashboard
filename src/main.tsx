// Copyright 2023 @paritytech/polkadot-staking-dashboard authors & contributors
// SPDX-License-Identifier: Apache-2.0

// Network themes.
import '@polkadot-cloud/core/accent/kusama-relay.css';
import '@polkadot-cloud/core/accent/polkadot-relay.css';
import '@polkadot-cloud/core/accent/westend-relay.css';

// Default template fonts.
import '@polkadot-cloud/core/theme/default/fonts/index.css';
// Default template theme.
import '@polkadot-cloud/core/theme/default/index.css';

// Polkadot Cloud core styles.
import '@polkadot-cloud/core/css/styles/index.css';

import { App } from 'App';
import { createRoot } from 'react-dom/client';
import 'styles/index.scss';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');
const root = createRoot(rootElement);

root.render(<App />);
