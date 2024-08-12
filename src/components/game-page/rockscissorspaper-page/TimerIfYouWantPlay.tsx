'use client';

import { CurrentSecAtom, SelectHandAtom } from '@/states/gameAtom';
import { useAtom } from 'jotai';
import * as S from '../styled';

export const TimerIfYouWantPlay = () => {
  const [timer] = useAtom(CurrentSecAtom);
  const [selectHand] = useAtom(SelectHandAtom);

  return (
    <>
      <S.CountText>{timer}</S.CountText>
      <S.IfYouDontPlayText>
        {!selectHand
          ? '화면을 클릭하면 시작합니다!'
          : '안 내면 진 거 가위바위보!'}
      </S.IfYouDontPlayText>
    </>
  );
};
