import * as S from '@/components/my-page/pagination/style';
import {
  viewSenderPresentNoAtom,
  viewReceiverPresentNoAtom,
  senderPresentAtom,
  receiverPresentAtom,
} from '@/states/mailboxAtoms';
import { useSetAtom, useAtomValue } from 'jotai';
import { useEffect, useState } from 'react';

export default function Pagination(props: any) {
  const [sendPage, setSendPage] = useState(0);
  const [receivePage, setReceivePage] = useState(0);
  const setViewSenderPresentNo = useSetAtom(viewSenderPresentNoAtom);
  const setViewReceiverPresentNo = useSetAtom(viewReceiverPresentNoAtom);
  const senderPresents = useAtomValue(senderPresentAtom);
  const receiverPresents = useAtomValue(receiverPresentAtom);

  const nextPage = () => {
    if (props.title === '보낸 선물') {
      setSendPage((prevPage) =>
        prevPage < senderPresents.length - 1 ? prevPage + 1 : prevPage,
      );
    } else {
      setReceivePage((prevPage) =>
        prevPage < receiverPresents.length - 1 ? prevPage + 1 : prevPage,
      );
    }
  };

  const previousPage = () => {
    if (props.title === '보낸 선물') {
      setSendPage((prevPage) => (prevPage === 0 ? prevPage : prevPage - 1));
    } else {
      setReceivePage((prevPage) => (prevPage === 0 ? prevPage : prevPage - 1));
    }
  };

  useEffect(() => {
    if (receiverPresents.length > 0) {
      setViewReceiverPresentNo(receiverPresents[receivePage]?.no);
    }
    if (senderPresents.length > 0) {
      setViewSenderPresentNo(senderPresents[sendPage]?.no);
    }
  }, [
    receivePage,
    sendPage,
    receiverPresents,
    senderPresents,
    setViewReceiverPresentNo,
    setViewSenderPresentNo,
  ]);

  return (
    <>
      <S.PageSection width={`${props.width}`}>
        <div onClick={previousPage}>
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
        <div onClick={nextPage}>
          <img
            src="https://wang0514.s3.ap-northeast-2.amazonaws.com/items/ArrowRight.png"
            alt=">"
            width="30vw"
          />
        </div>
      </S.PageSection>
    </>
  );
}
