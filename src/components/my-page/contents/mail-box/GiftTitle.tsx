'use client';

import * as S from '@/components/my-page/contents/mail-box/style';
import { useAtomValue } from 'jotai';
import {
  selectMailBoxTypeAtom,
  senderPresentAtom,
  receiverPresentAtom,
} from '@/states/mailboxAtoms';

export default function GiftTitle(props: any) {
  const type = useAtomValue(selectMailBoxTypeAtom);
  const senderPresent = useAtomValue(senderPresentAtom);
  const receiverPresent = useAtomValue(receiverPresentAtom);
  return (
    <>
      <S.MarginDiv margin="0.5vh 0 1vh 0" fontSize="28px">
        {props.title}(
        {props.title === '보낸 선물'
          ? senderPresent.length
          : receiverPresent.length}
        )
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
          재진 님에게{' '}
          {props.title === '보낸 선물' ? '보냈습니다.' : '받았습니다.'}
        </S.MarginDiv>
      </S.UserInfo>
    </>
  );
}
