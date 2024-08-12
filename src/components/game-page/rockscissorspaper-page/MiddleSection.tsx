'use client';

import Link from 'next/link';
import * as S from '../styled';
import { useAtom } from 'jotai';
import {
  gameResultAtom,
  CurrentSecAtom,
  SelectHandAtom,
  ShowResultAtom,
  StartTimerAtom,
  userHandAtom,
  BeforeStartGameAtom,
} from '@/states/gameAtom';
import { GAME } from '@/app/api/game';
import { useEffect, useState } from 'react';
import { RockSicssorsPaperImgArray } from '@/utils/rockScissorsPaper';
import { RecordModal } from './RecordModal';
import { TimerIfYouWantPlay } from './TimerIfYouWantPlay';
import USER from '@/app/api/user';
import { minify } from 'next/dist/build/swc';
import { hours, minutes } from '@/utils/date';

const MiddleSection = () => {
  // 유저의 손
  const [hand, setHand] = useAtom(userHandAtom);
  // 게임 결과
  const [gameResult, setGameResult] = useAtom(gameResultAtom);
  // 타이머 시작
  const [startTimer, setStartTimer] = useAtom(StartTimerAtom);
  // 현재 초
  const [timer, setTimer] = useAtom(CurrentSecAtom);
  //유저의 손을 선택
  const [selectHand, setSelectHand] = useAtom(SelectHandAtom);
  // 결과를 보여주는 boolean
  const [showResult, setShowResult] = useAtom(ShowResultAtom);
  // 게임 시작 전 상태 전적보기 버튼은 보이고 화면을 클릭하면 시작한다는 문구가 나오는 상태
  const [beforeGameStart, setBeforeGameStart] = useAtom(BeforeStartGameAtom);

  const [userInfo, setUserInfo] = useState<{
    data: {
      image: string;
      chance: number;
      currentPoint: number;
      nickname: string;
    };
  }>();

  const getUserNo = () => {
    const userNo = localStorage.getItem('userNo');
    return Number(userNo);
  };

  useEffect(() => {
    const getUserInfo = async (userNo: number) => {
      const response = await USER.getUserInfo(userNo);
      setUserInfo(response);
    };
    getUserInfo(getUserNo());
  }, []);

  console.log(minutes, hours);

  // API 요청
  const postUsersHand = async () => {
    const response = await GAME.PostUsersHand(hand);
    return setGameResult(response);
  };

  // 3초 뒤에 요청 API 요청, 타이머 초기화, 결과창 확인, 손 자동 초기화
  const delayedPostUsersHand = () => {
    if (!showResult) {
      setTimer(3);
      //결과창 확인
      const showResultFoo = () => {
        setShowResult(true);
      };
      // 유저의 손을 초기화
      const setTimeOutSelectHand = () => {
        setSelectHand(false);
      };
      // 타이머 초기화
      const clearTimer = () => {
        setStartTimer(false);
      };
      setStartTimer(true);
      setTimeout(setTimeOutSelectHand, 3000);
      setTimeout(postUsersHand, 3000);
      setTimeout(clearTimer, 3000);
      setTimeout(showResultFoo, 3000);
    }
  };

  const startCountdown = () => {
    const timer = setInterval(() => {
      setTimer((prevCount) => {
        if (prevCount > 0) {
          return prevCount - 1;
        } else {
          clearInterval(timer);
          return prevCount;
        }
      });
    }, 1000);
  };

  return (
    <S.GameInfoRootDiv $pointerClick={showResult}>
      <S.GameInfoHeader>
        <S.Flexdiv
          $marginTop={'0'}
          width={'30vw'}
          height={'20vh'}
          $justifyContent={'space-evenly'}>
          {RockSicssorsPaperImgArray.map((img, index) => (
            <S.HandAndShadowDiv $marginTop="7vh" key={index + 1}>
              <S.HandImg width={'5vw'} height={'30%'} src={img}></S.HandImg>
              <S.ShadowImg
                width={'5vw'}
                height={'30%'}
                src={
                  'https://wang0514.s3.ap-northeast-2.amazonaws.com/items/%EA%B0%80%EC%9C%84%EB%B0%94%EC%9C%84%EB%B3%B4/handShadow.svg'
                }></S.ShadowImg>
            </S.HandAndShadowDiv>
          ))}
        </S.Flexdiv>
      </S.GameInfoHeader>
      <S.GameInfoBody
        $pointerClick={showResult}
        onClick={() => {
          delayedPostUsersHand();
          setSelectHand(true);
          startCountdown();
        }}>
        {!showResult ? (
          <TimerIfYouWantPlay></TimerIfYouWantPlay>
        ) : (
          <RecordModal></RecordModal>
        )}
        {/* <S.ShowRecordText>전적 보기</S.ShowRecordText> */}
        <S.ChanceText>남은 기회 : {userInfo?.data.chance}/10</S.ChanceText>
        <Link href="/my-page">
          <S.ExistImg
            src={
              'https://wang0514.s3.ap-northeast-2.amazonaws.com/page/exit.png'
            }></S.ExistImg>
        </Link>
      </S.GameInfoBody>
    </S.GameInfoRootDiv>
  );
};

export default MiddleSection;
