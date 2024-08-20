'use client';

import * as S from '@/components/my-page/contents/mail-box/style';
import { mailBoxSelectAtom } from '@/states/mailboxAtoms';
import { useAtomValue } from 'jotai';
import { useEffect, useState } from 'react';

export default function ItemListEle(props: any) {
  const type = useAtomValue(mailBoxSelectAtom);
  const [senderName, setSenderName] = useState('');
  const [receiverName, setReceiverName] = useState('');
  const [status, setStatus] = useState('');

  console.log(props);
  useEffect(() => {
    if (props.data) {
      if (type === 0) {
        setSenderName(props.data.userPostReceiverNo?.nickname);
        setReceiverName(props.data.userPostSenderNo?.nickname);
        setStatus(props.data.check ? '읽음' : '안읽음');
      } else {
        setSenderName(props.data.userPresentReceiverNo?.nickname);
        setReceiverName(props.data.userPresentSenderNo?.nickname);
        getPresentStatus(props.data.status);
      }
    }
  }, [props.data]);

  const getPresentStatus = (status: string) => {
    switch (status) {
      case 'unread':
        setStatus('안읽음');
        break;
      case 'read':
        setStatus('읽　음');
        break;
      case 'accept':
        setStatus('수　락');
        break;
      case 'reject':
        setStatus('거　절');
        break;
    }
  };

  return (
    <>
      <div>
        <S.ItemListEleDiv>
          <img
            src="https://wang0514.s3.ap-northeast-2.amazonaws.com/page/gift-icon.png"
            alt="img"
            width="18vw"
          />
          <S.MarginDiv $margin="1vw" $fontSize="16px">
            {props.title.includes('받은') ? receiverName : senderName} 님에게{' '}
            {props.title}
          </S.MarginDiv>
          <S.MarginDiv $fontSize="12px" color="#909090">
            {status}
          </S.MarginDiv>
        </S.ItemListEleDiv>
      </div>
    </>
  );
}
