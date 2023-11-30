// Copyright 2023 @paritytech/polkadot-staking-dashboard authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { faProjectDiagram } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useApi } from 'contexts/Api';
import { useConnect } from 'contexts/Connect';
import { usePlugins } from 'contexts/Plugins';
import styled from 'styled-components';

const Wrapper = styled.div<{ active: boolean }>`
  position: absolute;
  right: 10px;
  top: 10px;
  font-size: 0.9rem;
  border-radius: 0.3rem;
  padding: 0.25rem 0.4rem;
  color: ${(props) =>
    props.active
      ? 'var(--network-color-primary)'
      : 'var(--text-color-secondary)'};
  opacity: ${(props) => (props.active ? 1 : 0.5)};
  z-index: 2;
  > a {
    color: var(--network-color-primary);
  }
`;

export const SubscanButton = ({ validatorAddress = '' }) => {
  const { plugins } = usePlugins();
  const { activeAccount } = useConnect();
  const { subscanUrl } = useApi().network;
  const isSubscanActive = activeAccount !== null && plugins.includes('subscan');
  const subscanTypeName = validatorAddress ? 'validator' : 'account';
  const address = validatorAddress || activeAccount;

  return (
    <Wrapper active={isSubscanActive}>
      <FontAwesomeIcon
        icon={faProjectDiagram}
        transform="shrink-2"
        style={{ marginRight: '0.3rem' }}
      />
      {isSubscanActive ? (
        <a
          href={`${subscanUrl}/${subscanTypeName}/${address}`}
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          Subscan
        </a>
      ) : (
        <span>Subscan</span>
      )}
    </Wrapper>
  );
};
