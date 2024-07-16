'use client';

import * as S from '@/components/my-page/contents/mail-box/style';
import { useEffect, useState } from 'react';
import { useAtomValue } from 'jotai';
import {
  mailBoxSelectAtom,
  senderDataAtom,
  receiverDataAtom,
  viewPageAtom,
} from '@/states/mailboxAtoms';

export default function GiftTitle(props: { title: string }) {
  const type = useAtomValue(mailBoxSelectAtom);
  const senderData = useAtomValue(senderDataAtom);
  const receiverData = useAtomValue(receiverDataAtom);
  const page = useAtomValue(viewPageAtom);
  const [data] = useState(
    props.title.includes('보낸') ? senderData : receiverData,
  );
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
          {'수정중'} 님에게{' '}
          {props.title === '보낸 선물' ? '보냈습니다.' : '받았습니다.'}
        </S.MarginDiv>
      </S.UserInfo>
    </>
  );
}
