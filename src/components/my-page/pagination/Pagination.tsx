import * as S from '@/components/my-page/pagination/style';
import {
  viewSenderPresentNoAtom,
  viewReceiverPresentNoAtom,
  senderPresentAtom,
  receiverPresentAtom,
} from '@/states/mailboxAtoms';
import { useAtom, useAtomValue } from 'jotai';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Pagination(props: any) {
  const [sendPage, setSendPage] = useState(0);
  const [receivePage, setReceivePage] = useState(0);
  const [viewSenderPresentNo, setViewSenderPresentNo] = useAtom(
    viewSenderPresentNoAtom,
  );
  const [viewReceiverPresentNo, setViewReceiverPresentNo] = useAtom(
    viewReceiverPresentNoAtom,
  );
  const senderPresents = useAtomValue(senderPresentAtom);
  const receiverPresents = useAtomValue(receiverPresentAtom);
  const nextPage = () => {
    if (props.title === '보낸 선물') {
      sendPage < senderPresents.length - 1 ? setSendPage(sendPage + 1) : null;
    } else {
      receivePage < receiverPresents.length - 1
        ? setReceivePage(receivePage + 1)
        : null;
    }
  };

  const previousPage = () => {
    if (props.title === '보낸 선물') {
      sendPage === 0 ? null : setSendPage(sendPage - 1);
    } else {
      receivePage === 0 ? null : setReceivePage(receivePage - 1);
    }
  };

  useEffect(() => {
    setViewReceiverPresentNo(receiverPresents[receivePage]?.no);
    setViewSenderPresentNo(senderPresents[sendPage]?.no);
  }, [receivePage, sendPage, receiverPresents, senderPresents]);

  return (
    <>
      <S.PageSection width={`${props.width}`}>
        <div
          onClick={() => {
            previousPage();
          }}>
          <img
            src="https://wang0514.s3.ap-northeast-2.amazonaws.com/items/ArrowLeft.png"
            alt="<"
            width="30vw"
          />
        </div>
        {props.title === '보낸 선물' ? sendPage + 1 : receivePage + 1} /{' '}
        {props.title === '보낸 선물'
          ? senderPresents.length
          : receiverPresents.length}
        <div
          onClick={() => {
            nextPage();
          }}>
          <img
            src="https://wang0514.s3.ap-northeast-2.amazonaws.com/items/ArrowRight.png"
            alt="<"
            width="30vw"
          />
        </div>
      </S.PageSection>
    </>
  );
}
