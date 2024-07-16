'use client';

import * as S from '@/components/my-page/contents/mail-box/style';
import { useEffect, useState } from 'react';
import { useAtomValue, useAtom } from 'jotai';
import {
  mailBoxSelectAtom,
  senderDataAtom,
  receiverDataAtom,
  viewPageAtom,
} from '@/states/mailboxAtoms';
import MAILBOX from '@/app/api/mailBox';

export default function GiftTitle(props: { title: string }) {
  const type = useAtomValue(mailBoxSelectAtom);
  const [senderData, setSenderData] = useAtom(senderDataAtom);
  const [receiverData, setReceiverData] = useAtom(receiverDataAtom);
  const page = useAtomValue(viewPageAtom);
  const [data, setData] = useState(
    /보낸/.test(props.title) ? senderData : receiverData,
  );

  useEffect(() => {
    if (/보낸/.test(props.title)) {
      setData(senderData);
    } else {
      setData(receiverData);
    }
  }, [type, props.title]);

  const getData = async (type: number) => {
    try {
      if (type === 0) {
        const senderPosts = await MAILBOX.getPostsList('senderNo');
        const receiverPosts = await MAILBOX.getPostsList('receiverNo');
        setSenderData(senderPosts);
        setReceiverData(receiverPosts);
      } else if (type === 1) {
        const senderPresents = await MAILBOX.getPresentsList('senderNo');
        const receiverPresents = await MAILBOX.getPresentsList('receiverNo');
        setSenderData(senderPresents);
        setReceiverData(receiverPresents);
      }
    } catch (error) {
      console.error('Failed to fetch data:', error);
    }
  };

  useEffect(() => {
    getData(type);
  }, [type]);

  return (
    <>
      <S.MarginDiv margin="0.5vh 0 1vh 0" fontSize="28px">
        {props.title}({data.length})
      </S.MarginDiv>
      <S.UserInfo>
        <img
          src={
            type
              ? 'https://wang0514.s3.ap-northeast-2.amazonaws.com/page/gift-icon.png'
              : 'https://wang0514.s3.ap-northeast-2.amazonaws.com/page/mail.png'
          }
          alt="gift"
          width="20vw"
        />
        <S.MarginDiv margin="1vw">
          {'d'} 님에게{' '}
          {props.title === '보낸 선물' ? '보냈습니다.' : '받았습니다.'}
        </S.MarginDiv>
      </S.UserInfo>
    </>
  );
}
