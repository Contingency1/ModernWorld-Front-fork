'use client';

import * as S from '../styled';
import RecordComponent from './RecordComponent';
import { gameResultAtom } from '@/states/gameAtom';
import { useAtom } from 'jotai';

export const RecordModal = () => {
  const [gameResult1] = useAtom(gameResultAtom);

  return (
    <>
      <S.IfYouDontPlayText>
        {gameResult1.result === 'win'
          ? '이겼습니다!'
          : gameResult1.result === 'lose'
            ? '졌습니다'
            : '비겼습니다'}
      </S.IfYouDontPlayText>
      <RecordComponent />
    </>
  );
};
