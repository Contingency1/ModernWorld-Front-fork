'use client';

import * as S from '../styled';
import { useEffect, useState } from 'react';
import RecordComponent from './RecordComponent';
import { GAME } from '@/app/api/game';
import { onlyResultAtom } from '@/states/gameAtom';
import { useAtom } from 'jotai';

export const RecordModal = () => {
  const [resultText, setResultText] = useState('');
  const [gameResult, setGameResult] = useState('');
  const [beforeGameStart] = useAtom(onlyResultAtom);

  const getUserNo = () => {
    const userNo = localStorage.getItem('userNo');
    return Number(userNo);
  };

  useEffect(() => {
    const getUserRecord = async () => {
      const response = await GAME.GetUsersLecord(getUserNo());
      setGameResult(response[response.length - 1].result);
    };
    getUserRecord();
  }, []);

  return (
    <>
      <S.IfYouDontPlayText>
        {gameResult === 'win'
          ? '이겼습니다!'
          : gameResult === 'lose'
            ? '졌습니다!'
            : '비겼습니다!'}
      </S.IfYouDontPlayText>
      <RecordComponent />
    </>
  );
};
