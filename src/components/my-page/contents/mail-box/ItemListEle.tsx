'use client';

import * as S from '@/components/my-page/contents/mail-box/style';
import { useEffect, useState } from 'react';

export default function ItemListEle(props: any) {
  const [status, setStatus] = useState('');
  useEffect(() => {
    switch (props.data.status) {
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
    }
  }, []);

  return (
    <>
      <S.ItemListEleDiv>
        <img
          src="https://wang0514.s3.ap-northeast-2.amazonaws.com/page/gift-icon.png"
          alt="img"
          width="18vw"
        />
        <S.MarginDiv margin="1vw" fontSize="18px">
          {props.title === '받은 선물'
            ? props.data.userPresentSenderNo.nickname
            : props.data.userPresentReceiverNo.nickname}{' '}
          님에게 {props.title === '보낸 선물' ? '보낸' : '받은'} 선물
        </S.MarginDiv>
        <S.MarginDiv fontSize="12px" color="#909090">
          {status}
        </S.MarginDiv>
      </S.ItemListEleDiv>
    </>
  );
}
