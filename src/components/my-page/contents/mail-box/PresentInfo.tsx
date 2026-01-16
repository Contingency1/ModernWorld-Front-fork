'use client';

import MAILBOX from '@/app/api/mailBox';
import * as S from '@/components/my-page/contents/mail-box/style';
import {
  receiverDataAtom,
  senderDataAtom,
  viewSendPageAtom,
  viewReceiverPageAtom,
} from '@/states/mailboxAtoms';
import { getFormattedDate } from '@/utils/date';
import { IMAGE } from '@/utils/image';
import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import { useEffect, useState } from 'react';

export default function PresentInfo(props: { title: string }) {
  const page = useAtomValue(
    props.title.includes('보낸') ? viewSendPageAtom : viewReceiverPageAtom,
  );
  const senderData = useAtomValue(senderDataAtom);
  const receiverData = useAtomValue(receiverDataAtom);
  const [sendPresentNo, setSendPresentNo] = useState(senderData[page]?.no);
  const [receivePresentNo, setReceivePresentNo] = useState(
    receiverData[page]?.no,
  );

  const setPresentStatus = async (no: number) => {
    if (no) {
      await MAILBOX.setPresentStatus(no);
    }
  };

  useEffect(() => {
    if (props.title.includes('보낸')) {
      setSendPresentNo(senderData[page]?.no);
      setPresentStatus(sendPresentNo);
    } else {
      setReceivePresentNo(receiverData[page]?.no);
      setPresentStatus(receivePresentNo);
    }
  }, [props.title, page, senderData, receiverData]);

  const statusChange = (s: string) => {
    switch (s) {
      case 'unread':
        return '안읽음';
      case 'read':
        return '읽　음';
      case 'accept':
        return '수　락';
      case 'reject':
        return '거　절';
    }
  };

  const deleteHandle = () => {
    if (props.title.includes('보낸') ? sendPresentNo : receivePresentNo) {
      MAILBOX.delPresent(
        props.title.includes('보낸') ? sendPresentNo : receivePresentNo,
      );
    }
  };

  const acceptRejectHandle = (s: string) => () => {
    MAILBOX.updatePresentStatus(receivePresentNo, s);
  };

  if (props.title.includes('보낸')) {
    if (!senderData.length) return <></>;
  } else if (!receiverData.length) {
    return <></>;
  }

  return (
    <>
      <S.ContentsView height="25vh">
        <S.DelSection>
          <S.Image
            src={IMAGE.remove}
            alt="del"
            width="20vw"
            onClick={deleteHandle}
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
          <S.FontSize $fontSize="18px">
            {props.title.includes('보낸')
              ? senderData[page]?.item?.name
              : receiverData[page]?.item?.name}
          </S.FontSize>
          <S.FontSize $fontSize="14px">
            {props.title.includes('보낸')
              ? senderData[page]?.item?.description
              : receiverData[page]?.item?.description}
          </S.FontSize>
          <S.FontSize $fontSize="12px">
            {getFormattedDate(
              props.title.includes('보낸')
                ? senderData[page]?.createdAt
                : receiverData[page]?.createdAt,
            )}
          </S.FontSize>

          {props.title === '보낸 선물' || props.title === '보낸 편지' ? (
            <S.StatusFont $fontSize="18px">
              {statusChange(senderData[page]?.status)}
            </S.StatusFont>
          ) : (
            <>
              {/* status가 'accept'나 'reject'가 아닐 때만 버튼 표시 */}
              {receiverData[page]?.status !== 'accept' &&
              receiverData[page]?.status !== 'reject' ? (
                <S.ItemApprovalControls>
                  <S.AcceptRejectUi onClick={acceptRejectHandle('accept')}>
                    수락하기
                  </S.AcceptRejectUi>
                  <S.AcceptRejectUi onClick={acceptRejectHandle('reject')}>
                    거절하기
                  </S.AcceptRejectUi>
                </S.ItemApprovalControls>
              ) : (
                // 이미 수락/거절 했다면 상태 텍스트 표시
                <S.StatusFont $fontSize="18px">
                  {statusChange(receiverData[page]?.status)}
                </S.StatusFont>
              )}
            </>
          )}
        </S.ItemImg>
      </S.ContentsView>
    </>
  );
}
