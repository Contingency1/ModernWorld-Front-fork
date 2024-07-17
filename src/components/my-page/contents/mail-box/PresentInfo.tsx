'use client';

import MAILBOX from '@/app/api/mailBox';
import * as S from '@/components/my-page/contents/mail-box/style';
import {
  receiverDataAtom,
  senderDataAtom,
  viewSendPageAtom,
  viewReceiverPageAtom,
  listSetAtom,
} from '@/states/mailboxAtoms';
import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import { useEffect } from 'react';

export default function PresentInfo(props: { title: string }) {
  const page = useAtomValue(
    props.title.includes('보낸') ? viewSendPageAtom : viewReceiverPageAtom,
  );
  const senderData = useAtomValue(senderDataAtom);
  const receiverData = useAtomValue(receiverDataAtom);
  const [list, setList] = useAtom(listSetAtom);

  const setPresentStatus = async (no: number) => {
    if (no) {
      await MAILBOX.setPresentStatus(no);
      setList(!list);
    }
  };

  useEffect(() => {
    if (props.title.includes('보낸')) {
      const number = senderData[page]?.no;
      setPresentStatus(number);
    } else {
      const number = receiverData[page]?.no;
      setPresentStatus(number);
    }
  }, [props.title, page]);

  const statusChange = (s: string) => {
    switch (s) {
      case 'unread':
        return '안읽음';
        break;
      case 'read':
        return '읽　음';
        break;
      case 'accept':
        return '수　락';
        break;
      case 'reject':
        return '거　절';
    }
  };

  return (
    <>
      <S.ContentsView height="25vh">
        <S.DelSection>
          <img
            src="https://wang0514.s3.ap-northeast-2.amazonaws.com/page/remove.png"
            alt="del"
            width="20vw"
          />
        </S.DelSection>

        <S.ItemImg>
          <img
            src={
              props.title.includes('보낸')
                ? senderData[page]?.item?.image
                : receiverData[page]?.item?.image
            }
            alt="img"
            height="70vh"
          />
          <S.FontSize fontSize="18px">
            {props.title.includes('보낸')
              ? senderData[page]?.item?.name
              : receiverData[page]?.item?.name}
          </S.FontSize>
          <S.FontSize fontSize="14px">
            {props.title.includes('보낸')
              ? senderData[page]?.item?.description
              : receiverData[page]?.item?.description}
          </S.FontSize>
          <S.FontSize fontSize="12px">
            {props.title.includes('보낸')
              ? senderData[page]?.createdAt
              : receiverData[page]?.createdAt}
          </S.FontSize>

          {props.title === '보낸 선물' || props.title === '보낸 편지' ? (
            <S.StatusFont fontSize="18px">
              {props.title.includes('보낸')
                ? statusChange(senderData[page]?.status)
                : statusChange(receiverData[page]?.status)}
            </S.StatusFont>
          ) : (
            <S.ItemApprovalControls>
              <div>수락하기</div>
              <div>거절하기</div>
            </S.ItemApprovalControls>
          )}
        </S.ItemImg>
      </S.ContentsView>
    </>
  );
}
