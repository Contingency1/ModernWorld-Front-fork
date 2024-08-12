import { GAME } from '@/app/api/game';
import {
  gameResultAtom,
  CurrentSecAtom,
  SelectHandAtom,
  ShowResultAtom,
  StartTimerAtom,
  userHandAtom,
} from '@/states/gameAtom';
import { useAtom } from 'jotai';
import { useState } from 'react';

const Timer = () => {
  const [hand, setHand] = useAtom(userHandAtom);
  // 게임 결과
  const [gameResult, setGameResult] = useAtom(gameResultAtom);
  // 타이머 시작
  const [startTimer, setStartTimer] = useAtom(StartTimerAtom);

  const [timer, setTimer] = useAtom(CurrentSecAtom);
  //유저의 손을 선택
  const [selectHand, setSelectHand] = useAtom(SelectHandAtom);
  // 결과를 보여주는 boolean
  const [showResult, setShowResult] = useAtom(ShowResultAtom);
  const [userInfo, setUserInfo] = useState<{
    data: {
      image: string;
      chance: number;
      currentPoint: number;
      nickname: string;
    };
  }>();
  // 로컬스토리지에 있는 유저넘버 가져오기
  const getUserNo = () => {
    const userNo = localStorage.getItem('userNo');
    return Number(userNo);
  };
  // API 요청
  const postUsersHand = async () => {
    const response = await GAME.PostUsersHand(hand);
    return setGameResult(response);
  };

  const down = () => {
    setTimer(timer - 1);
  };
  const setTimeOutCountDown = () => {
    const intervalID = setInterval(down, 1000);
    return intervalID;
  };

  // 3초 뒤에 요청 API 요청, 타이머 초기화, 결과창 확인, 손 자동 초기화
  const delayedPostUsersHand = () => {
    const resetUserHand = () => {
      setHand(3);
    };
    const showResultFoo = () => {
      setShowResult(true);
    };
    const setTimeOutSelectHand = () => {
      setSelectHand(false);
    };
    // 타이머 초기화
    const clearTimer = () => {
      setStartTimer(false);
      setTimer(3);
    };
    setStartTimer(true);
    // setTimeout(3000);
    setTimeout(setTimeOutSelectHand, 3000);
    setTimeout(postUsersHand, 3000);
    setTimeout(clearTimer, 3000);
    setTimeout(resetUserHand, 3000);
    setTimeout(showResultFoo, 3000);
  };
};
