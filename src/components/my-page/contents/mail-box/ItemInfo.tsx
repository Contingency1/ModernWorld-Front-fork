'use client';

import * as S from '@/components/my-page/contents/mail-box/style';
import { useAtomValue } from 'jotai';
import {
  viewReceiverPresentNo,
  viewSenderPresentNo,
} from '@/states/mailboxAtoms';

export default function ItemInfo(props: any) {
  const viewSenderPresent = useAtomValue(viewSenderPresentNo);
  const viewReceiverPresent = useAtomValue(viewReceiverPresentNo);

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
          <img src="" alt="img" width="90vw" />
          <S.FontSize fontSize="20px">아이템 이름</S.FontSize>
          <S.FontSize fontSize="14px">아이템 설명</S.FontSize>
          <S.FontSize fontSize="14px">보낸 날짜</S.FontSize>
        </S.ItemImg>
      </S.ContentsView>
    </>
  );
}
