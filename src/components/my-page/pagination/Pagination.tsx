'use client';

import * as S from '@/components/my-page/pagination/style';
import {
  mailBoxSelectAtom,
  receiverDataAtom,
  senderDataAtom,
  viewReceiverPageAtom,
  viewSendPageAtom,
} from '@/states/mailboxAtoms';
import { IMAGE } from '@/utils/image';
import { useAtom, useAtomValue } from 'jotai';
import { useEffect } from 'react';

export default function Pagination(props: any) {
  const [senderPage, setSenderPage] = useAtom(viewSendPageAtom);
  const [receiverPage, setReceiverPage] = useAtom(viewReceiverPageAtom);
  const type = useAtomValue(mailBoxSelectAtom);
  const senderData = useAtomValue(senderDataAtom);
  const receiverData = useAtomValue(receiverDataAtom);

  const nextPage = () => {
    if (props.title.includes('보낸')) {
      setSenderPage((senderPage) =>
        senderPage < senderData.length - 1 ? senderPage + 1 : senderPage,
      );
    } else {
      setReceiverPage((receiverPage) =>
        receiverPage < receiverData.length - 1
          ? receiverPage + 1
          : receiverPage,
      );
    }
  };

  const previousPage = () => {
    if (props.title.includes('보낸')) {
      setSenderPage((senderPage) =>
        senderPage === 0 ? senderPage : senderPage - 1,
      );
    } else {
      setReceiverPage((receiverPage) =>
        receiverPage === 0 ? receiverPage : receiverPage - 1,
      );
    }
  };

  useEffect(() => {
    setSenderPage(0);
    setReceiverPage(0);
  }, [type]);

  if (props.title.includes('보낸')) {
    if (!senderData.length) return <></>;
  } else if (!receiverData.length) {
    return <></>;
  }

  return (
    <>
      <S.PageSection width={`${props.width}`}>
        <div onClick={previousPage} style={{ cursor: 'pointer' }}>
          <img src={IMAGE.leftArrow} alt="<" width="30vw" />
        </div>
        {props.title.includes('보낸') ? senderPage + 1 : receiverPage + 1} /{' '}
        {props.title.includes('보낸') || props.title === '보낸 편지'
          ? senderData.length
          : receiverData.length}
        <div onClick={nextPage} style={{ cursor: 'pointer' }}>
          <img src={IMAGE.rightArrow} alt=">" width="30vw" />
        </div>
      </S.PageSection>
    </>
  );
}
