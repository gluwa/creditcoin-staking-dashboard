// Copyright 2023 @paritytech/polkadot-staking-dashboard authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ModalPadding } from '@polkadotcloud/core-ui';
import { useModal } from 'contexts/Modal';
import { Title } from 'library/Modal/Title';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

export const StartStaking = () => {
  const { t } = useTranslation('modals');
  const navigate = useNavigate();
  const { setStatus } = useModal();

  return (
    <>
      <Title title={t('startStaking')} />
      <ModalPadding>
        <button
          type="button"
          className="action-button"
          disabled={false}
          onClick={() => {
            navigate('/nominate');
            setStatus(2);
          }}
        >
          <div>
            <h3>{t('becomeNominator')}</h3>
            <p>{t('becomeNominatorSubtitle')}</p>
          </div>
          <div>
            <FontAwesomeIcon transform="shrink-2" icon={faChevronRight} />
          </div>
        </button>
        {/* TODO */}
        {/* <button */}
        {/*  type="button" */}
        {/*  className="action-button" */}
        {/*  disabled={true} */}
        {/*  onClick={() => { */}
        {/*    navigate('/pools?t=2'); */}
        {/*    setStatus(2); */}
        {/*  }} */}
        {/* > */}
        {/*  <div> */}
        {/*    <h3>{t('joinNominationPool')}</h3> */}
        {/*    <p>{t('joinNominationPoolSubtitle')}</p> */}
        {/*  </div> */}
        {/*  <div> */}
        {/*    <FontAwesomeIcon transform="shrink-2" icon={faChevronRight} /> */}
        {/*  </div> */}
        {/* </button> */}
      </ModalPadding>
    </>
  );
};
