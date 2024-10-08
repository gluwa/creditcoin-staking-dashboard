// Copyright 2023 @paritytech/polkadot-staking-dashboard authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Wrapper = styled(motion.div)`
  border: none;
  border-radius: 0.7rem;
  height: 3.2rem;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  margin: 0.4rem 0.2rem 0.3rem 0;
  padding: 0rem 0.5rem;
  position: relative;

  &.minimised {
    border: 1px solid rgba(255, 255, 255, 0);
    border-radius: 0.5rem;
    font-size: 1.1rem;
    justify-content: center;
    margin: 0.7rem 0.2rem 0.5rem 0;
    padding: 0.65rem 0rem;

    &.success {
      border: 1px solid var(--network-color-primary);
    }
    &.warning {
      border: 1px solid var(--status-warning-color);
    }
  }

  .dotlottie {
    color: var(--text-color-primary);
    margin-left: 0.25rem;
    margin-right: 0.65rem;
    width: 18px;
    height: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .name {
    font-family: 'SF-Pro-M';
    margin: 0;
    padding: 0;
    line-height: 1.35rem;
    color: #fff;
  }
  .action {
    color: var(--status-success-color);
    display: flex;
    flex: 1;
    font-size: 0.88rem;
    flex-flow: row wrap;
    justify-content: flex-end;
    margin-right: 0.4rem;
    opacity: 0.7;

    > span {
      &.success {
        color: var(--network-color-primary);
        border: 1px solid var(--network-color-primary);
      }
      &.warning {
        color: var(--status-warning-color);
        border: 1px solid var(--status-warning-color-transparent);
      }
      border-radius: 0.5rem;
      padding: 0.15rem 0.5rem;
    }

    &.success {
      svg {
        color: var(--status-success-color);
      }
    }
    &.warning {
      svg {
        color: var(--status-warning-color);
      }
    }
    &.minimised {
      > svg {
        flex: 0;
        position: absolute;
        right: -3px;
        top: -4px;
      }
    }
  }

  &.active {
    background: var(--gradient-highlight-primary);
  }
  &.inactive:hover {
    background: var(--gradient-highlight-secondary);
  }
  &.inactive:hover {
    background: var(--gradient-highlight-secondary);
  }
`;
