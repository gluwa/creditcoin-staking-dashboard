// Copyright 2023 @paritytech/polkadot-staking-dashboard authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { faCompressAlt, faExpandAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { capitalizeFirstLetter } from '@polkadotcloud/utils';
import { SideMenuStickyThreshold } from 'consts';
import { useApi } from 'contexts/Api';
import { useHelp } from 'contexts/Help';
import { useModal } from 'contexts/Modal';
import { useUi } from 'contexts/UI';
import type { UIContextInterface } from 'contexts/UI/types';
import { ReactComponent as CogOutlineSVG } from 'img/cog-outline.svg';
import { ReactComponent as LogoGithubSVG } from 'img/logo-github.svg';
import { useOutsideAlerter } from 'library/Hooks';
import throttle from 'lodash.throttle';
import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { ReactComponent as CreditcoinSVG } from '../../img/ic_creditcoin.svg';
import { ReactComponent as FeedbackSVG } from '../../img/ic_feedback.svg';
import { ReactComponent as ResourcesSVG } from '../../img/ic_resources.svg';
import { Heading } from './Heading/Heading';
import { Main } from './Main';
import { Secondary } from './Secondary';
import { ConnectionSymbol, Separator, Wrapper } from './Wrapper';

export const SideMenu = () => {
  const { t } = useTranslation('base');
  const { network, apiStatus } = useApi();
  const { openModalWith } = useModal();
  const {
    setSideMenu,
    sideMenuMinimised,
    userSideMenuMinimised,
    setUserSideMenuMinimised,
  }: UIContextInterface = useUi();
  const { openHelp } = useHelp();

  // listen to window resize to hide SideMenu
  useEffect(() => {
    window.addEventListener('resize', windowThrottle);
    return () => {
      window.removeEventListener('resize', windowThrottle);
    };
  }, []);

  const throttleCallback = () => {
    if (window.innerWidth >= SideMenuStickyThreshold) {
      setSideMenu(false);
    }
  };
  const windowThrottle = throttle(throttleCallback, 200, {
    trailing: true,
    leading: false,
  });

  const ref = useRef(null);
  useOutsideAlerter(ref, () => {
    setSideMenu(false);
  });

  const apiStatusClass =
    apiStatus === 'connecting'
      ? 'warning'
      : apiStatus === 'connected'
      ? 'success'
      : 'danger';

  return (
    <Wrapper ref={ref} minimised={sideMenuMinimised}>
      <section>
        <Main />
        <Heading title={t('support')} minimised={sideMenuMinimised} />
        <Secondary
          onClick={() => {
            openHelp(null);
          }}
          name={t('resources')}
          minimised={sideMenuMinimised}
          icon={{
            Svg: ResourcesSVG,
            size: sideMenuMinimised ? '11.55' : '11.55',
          }}
        />
        <Secondary
          onClick={() => openModalWith('GoToFeedback')}
          name={t('feedback')}
          minimised={sideMenuMinimised}
          icon={{
            Svg: FeedbackSVG,
            size: sideMenuMinimised ? '12.6' : '12.6',
          }}
        />
        <Separator />
        <Heading title={t('network')} minimised={sideMenuMinimised} />
        <Secondary
          classes={[apiStatusClass]}
          name={capitalizeFirstLetter(network.name)}
          onClick={() => openModalWith('Networks')}
          icon={{
            Svg: CreditcoinSVG,
            size: '12.6',
          }}
          minimised={sideMenuMinimised}
          action={
            <ConnectionSymbol
              className={apiStatusClass}
              style={{ opacity: 0.7 }}
            />
          }
        />
      </section>

      <section>
        <button
          type="button"
          onClick={() => setUserSideMenuMinimised(!userSideMenuMinimised)}
        >
          <FontAwesomeIcon
            icon={userSideMenuMinimised ? faExpandAlt : faCompressAlt}
          />
        </button>
        <button
          type="button"
          onClick={() =>
            window.open(
              'https://github.com/gluwa/creditcoin-staking-dashboard',
              '_blank'
            )
          }
        >
          <LogoGithubSVG width="1.2em" height="1.2em" />
        </button>
        <button
          type="button"
          onClick={() => openModalWith('Settings', {}, 'large')}
        >
          <CogOutlineSVG width="1.3em" height="1.3em" />
        </button>
      </section>
    </Wrapper>
  );
};
