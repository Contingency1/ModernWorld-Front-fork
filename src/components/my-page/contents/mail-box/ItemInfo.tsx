'use client';

import * as S from '@/components/my-page/contents/mail-box/style';
import { useEffect } from 'react';
import { useAtomValue, useAtom } from 'jotai';
import {
  selectMailBoxTypeAtom,
  viewReceiverPresentNoAtom,
  viewSenderPresentNoAtom,
  senderPresentInfoAtom,
  receiverPresentInfoAtom,
} from '@/states/mailboxAtoms';
import MAILBOX from '@/app/api/mailBox';

export default function ItemInfo(props: { title: string }) {
  const selectMailBoxType = useAtomValue(selectMailBoxTypeAtom);
  const receiverPresentNo = useAtomValue(viewReceiverPresentNoAtom);
  const senderPresentNo = useAtomValue(viewSenderPresentNoAtom);
  const [receiverPresentInfo, setReceiverPresentInfo] = useAtom(
    receiverPresentInfoAtom,
  );
  const [senderPresentInfo, setSenderPresentInfo] = useAtom(
    senderPresentInfoAtom,
  );

  const getSenderPresent = async () => {
    const response = await MAILBOX.getPresent(senderPresentNo);
    setSenderPresentInfo(response);
  };

  const getReceiverPresent = async () => {
    const response = await MAILBOX.getPresent(receiverPresentNo);
    setReceiverPresentInfo(response);
  };

  useEffect(() => {
    if (selectMailBoxType === 0) {
    } else {
      getSenderPresent();
      getReceiverPresent();
    }
  }, [selectMailBoxType, receiverPresentNo, senderPresentNo]);

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
              props.title === '보낸 선물'
                ? senderPresentInfo.item.image
                : receiverPresentInfo.item.image
            }
            alt="img"
            height="90vh"
          />
          <S.FontSize fontSize="18px">
            {props.title === '보낸 선물'
              ? senderPresentInfo.item.name
              : receiverPresentInfo.item.name}
          </S.FontSize>
          <S.FontSize fontSize="14px">
            {props.title === '보낸 선물'
              ? senderPresentInfo.item.description
              : receiverPresentInfo.item.description}
          </S.FontSize>
          <S.FontSize fontSize="12px">
            {props.title === '보낸 선물'
              ? senderPresentInfo.createdAt
                  .replace(/T/, ' ')
                  .replace(/\..+/, '')
              : receiverPresentInfo.createdAt
                  .replace(/T/, ' ')
                  .replace(/\..+/, '')}
          </S.FontSize>

          {props.title === '보낸 선물' ? (
            <S.StatusFont fontSize="18px">
              {statusChange(senderPresentInfo.status)}
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
