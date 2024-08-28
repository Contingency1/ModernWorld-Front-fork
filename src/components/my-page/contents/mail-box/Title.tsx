'use client';

import * as S from '@/components/my-page/contents/mail-box/style';
import { useAtomValue } from 'jotai';
import {
  mailBoxSelectAtom,
  receiverDataAtom,
  senderDataAtom,
  viewSendPageAtom,
  viewReceiverPageAtom,
} from '@/states/mailboxAtoms';
import { useEffect, useState } from 'react';
import { IMAGE } from '@/utils/image';

export default function Title(props: { title: string }) {
  const type = useAtomValue(mailBoxSelectAtom);
  const page = useAtomValue(
    props.title.includes('보낸') ? viewSendPageAtom : viewReceiverPageAtom,
  );
  const senderData = useAtomValue(senderDataAtom);
  const receiverData = useAtomValue(receiverDataAtom);

  const [name, setName] = useState('');
  const getName = () => {
    if (!type) {
      return props.title.includes('보낸')
        ? senderData[page]?.userPostReceiverNo?.nickname ?? '(탈퇴한 유저)'
        : receiverData[page]?.userPostSenderNo?.nickname ?? '(탈퇴한 유저)';
    } else {
      return props.title.includes('보낸')
        ? senderData[page]?.userPresentReceiverNo?.nickname ?? '(탈퇴한 유저)'
        : receiverData[page]?.userPresentSenderNo?.nickname ?? '(탈퇴한 유저)';
    }
  };

  useEffect(() => {
    setName(getName());
  }, [senderData, receiverData, page]);

  const zeroData = (
    <>
      <S.ContentsView
        height="70vh"
        $alignItems="center"
        $justifyContent="center"
        $boxShadow="inset 0px 4px 4px rgb(0, 0, 0, 0.1)">
        <S.UserInfo>
          <img src={type ? IMAGE.gift : IMAGE.mail} alt="gift" width="20vw" />
          <S.MarginDiv $margin="1vw">
            {props.title.includes('선물')
              ? `아직 ${props.title}이 없어요!`
              : `아직 ${props.title}가 없어요!`}
          </S.MarginDiv>
        </S.UserInfo>
      </S.ContentsView>
    </>
  );

  if (props.title.includes('보낸')) {
    if (!senderData.length) return zeroData;
  } else if (!receiverData.length) {
    return zeroData;
  }

  return (
    <>
      <S.MarginDiv $margin="0.5vh 0 1vh 0" $fontSize="28px">
        {props.title}(
        {props.title.includes('보낸') ? senderData.length : receiverData.length}
        )
      </S.MarginDiv>
      <S.UserInfo>
        <img src={type ? IMAGE.gift : IMAGE.mail} alt="gift" width="20vw" />
        <S.MarginDiv $margin="1vw">
          {name} 님에게{' '}
          {props.title.includes('보낸') ? '보냈습니다.' : '받았습니다.'}
        </S.MarginDiv>
      </S.UserInfo>
    </>
  );
}
