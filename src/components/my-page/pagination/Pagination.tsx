'use client';

import * as S from '@/components/my-page/pagination/style';
import {
  mailBoxSelectAtom,
  receiverDataAtom,
  senderDataAtom,
  viewReceiverPageAtom,
  viewSendPageAtom,
} from '@/states/mailboxAtoms';
import { useAtom, useAtomValue } from 'jotai';

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
        {props.title.includes('보낸') ? senderPage + 1 : receiverPage + 1} /{' '}
        {props.title.includes('보낸') || props.title === '보낸 편지'
          ? senderData.length
          : receiverData.length}
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
