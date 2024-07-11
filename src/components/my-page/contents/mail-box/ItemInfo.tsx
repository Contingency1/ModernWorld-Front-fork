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
    const response = await MAILBOX.getPresent(senderPresentNo.no);
    setSenderPresentInfo(response);
  };

  const getReceiverPresent = async () => {
    const response = await MAILBOX.getPresent(receiverPresentNo.no);
    setReceiverPresentInfo(response);
  };

  useEffect(() => {
    if (selectMailBoxType === 0) {
    } else {
      getSenderPresent();
      getReceiverPresent();
    }
  }, [selectMailBoxType, receiverPresentNo, senderPresentNo]);

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
            width="90vw"
          />
          <S.FontSize fontSize="20px">
            {props.title === '보낸 선물'
              ? senderPresentInfo.item.name
              : receiverPresentInfo.item.name}
          </S.FontSize>
          <S.FontSize fontSize="14px">
            {props.title === '보낸 선물'
              ? senderPresentInfo.item.description
              : receiverPresentInfo.item.description}
          </S.FontSize>
          <S.FontSize fontSize="14px">
            {props.title === '보낸 선물'
              ? senderPresentInfo.createdAt
                  .replace(/T/, ' ')
                  .replace(/\..+/, '')
              : receiverPresentInfo.createdAt
                  .replace(/T/, ' ')
                  .replace(/\..+/, '')}
          </S.FontSize>
        </S.ItemImg>
      </S.ContentsView>
    </>
  );
}
