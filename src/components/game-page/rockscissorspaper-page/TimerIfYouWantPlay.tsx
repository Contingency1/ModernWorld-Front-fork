'use client';

import { CurrentSecAtom, StartTimerAtom } from '@/states/gameAtom';
import { useAtom } from 'jotai';
import * as S from '../styled';

export const TimerIfYouWantPlay = () => {
  const [timer] = useAtom(CurrentSecAtom);
  const [startTimer] = useAtom(StartTimerAtom);

  return (
    <>
      <S.CountText>{timer}</S.CountText>
      <S.IfYouDontPlayText>
        {!startTimer
          ? '화면을 클릭하면 시작합니다!'
          : '안 내면 진 거 가위바위보!'}
      </S.IfYouDontPlayText>
    </>
  );
};
