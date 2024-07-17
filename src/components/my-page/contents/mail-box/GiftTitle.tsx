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
  const [name, setName] = useState('');
  const [data, setData] = useState(
    /보낸/.test(props.title) ? senderData : receiverData,
  );

  const getName = () => {
    if (!type) {
      return props.title.includes('보낸')
        ? senderData[page]?.userPostReceiverNo.nickname
        : receiverData[page]?.userPostSenderNo.nickname;
    } else {
      return props.title.includes('보낸')
        ? senderData[page]?.userPresentReceiverNo.nickname
        : receiverData[page]?.userPresentSenderNo.nickname;
    }
  };

  const getPresents = async () => {
    setSenderData(await MAILBOX.getPresentsList('senderNo'));
    setReceiverData(await MAILBOX.getPresentsList('receiverNo'));
  };

  const getPosts = async () => {
    setSenderData(await MAILBOX.getPostsList('senderNo'));
    setReceiverData(await MAILBOX.getPostsList('receiverNo'));
  };

  useEffect(() => {
    if (type === 0) {
      getPosts();
    } else {
      getPresents();
    }
  }, [type]);

  useEffect(() => {
    setData(/보낸/.test(props.title) ? senderData : receiverData);
  }, [getPosts, getPresents]);

  useEffect(() => {
    setName(getName());
  }, [data]);

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
          {name} 님에게{' '}
          {props.title.includes('보낸') ? '보냈습니다.' : '받았습니다.'}
        </S.MarginDiv>
      </S.UserInfo>
    </>
  );
}
