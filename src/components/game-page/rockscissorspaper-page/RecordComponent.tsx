'use client';

import {
  RefreshResultAtom,
  ShowResultAtom,
  userHandAtom,
} from '@/states/gameAtom';
import * as S from '../styled';
import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import { useEffect, useState } from 'react';
import { GAME } from '@/app/api/game';
import { getTime } from '@/utils/date';
import { RecordType } from '@/types/game';
import { IMAGE } from '@/utils/image';
import Image from 'next/image';

const RecordComponent = () => {
  const [showResult, setShowResult] = useAtom(ShowResultAtom);
  const [date, setDate] = useState(`${getTime().month}-${getTime().day}`);
  const setResetUserHand = useSetAtom(userHandAtom);
  const [userRecord, setUserRecord] = useState<RecordType[]>([
    {
      no: 0,
      userNo: 0,
      userChoice: '',
      computerChoice: '',
      result: '',
      createdAt: '',
    },
  ]);
  const refresh = useAtomValue(RefreshResultAtom);

  const getUserNo = () => {
    if (typeof window !== undefined) {
      const userNo = localStorage.getItem('userNo');
      return Number(userNo);
    }
  };

  useEffect(() => {
    const getUserRecord = async () => {
      if (Number(getTime().UTChours) > 15) {
        const response = await GAME.GetUsersLecord(
          getUserNo() as number,
          `${getTime().year}-${Number(date) - 1}`,
        );
        setUserRecord(response);
      } else {
        const response = await GAME.GetUsersLecord(
          getUserNo() as number,
          `${getTime().year}-${date}`,
        );
        setUserRecord(response);
      }
    };
    getUserRecord();
  }, [refresh, date]);

  const userInputDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDate(event.target.value);
  };

  return (
    <>
      <S.RecordRootDiv $pointerClick={!showResult}>
        <S.RecordHeader>
          <S.InputDateTodayMatchDiv>
            <S.InputDate
              placeholder={`${Number(getTime().UTChours) > 15 ? `${getTime().month}-${Number(getTime().day) - 1}` : `${getTime().month}-${getTime().day}`}`}
              $pointerClick={!showResult}
              onChange={userInputDate}></S.InputDate>
            <S.TodayMatch>의 대전</S.TodayMatch>
          </S.InputDateTodayMatchDiv>
          <S.RetryText
            $pointerClick={!showResult}
            onClick={() => {
              setResetUserHand(3);
              setShowResult(false);
            }}>
            게임하기
          </S.RetryText>
        </S.RecordHeader>
        <S.RecordBody>
          <S.BotAndUserRecordDiv>
            <S.ArrowDiv>
              <Image
                fill
                src={IMAGE.leftArrow}
                sizes={'(max-width : 50pv) 100vw'}
                alt={'오른쪽 화살표'}></Image>
            </S.ArrowDiv>
            <S.UserAndBotText>봇</S.UserAndBotText>
            <S.Line></S.Line>
            <S.RecordLegendDiv>
              {userRecord.map(({ computerChoice }, index) => (
                <div key={index + 1}>
                  {computerChoice === 'Rock'
                    ? '바위'
                    : computerChoice === 'Scissors'
                      ? '가위'
                      : '보'}
                  <br />
                </div>
              ))}
            </S.RecordLegendDiv>
          </S.BotAndUserRecordDiv>
          <S.ScoreDiv>
            <S.RecordLegendDiv>
              {userRecord.map(({ result }, index) => (
                <S.RecordText
                  key={index}
                  color={
                    result === 'win'
                      ? 'blue'
                      : result === 'draw'
                        ? '#FF5454'
                        : 'red'
                  }>
                  {result === 'win' ? '승' : result === 'draw' ? '무' : '패'}
                </S.RecordText>
              ))}
            </S.RecordLegendDiv>
            <S.RecordLegendDiv>
              {userRecord.map(({ result }, index) => (
                <S.RecordText
                  style={{ marginLeft: '1vw' }}
                  key={index}
                  color={result === 'white' ? 'white' : 'white'}>
                  {result === 'win' ? '+300' : 0}
                </S.RecordText>
              ))}
            </S.RecordLegendDiv>
          </S.ScoreDiv>
          <S.BotAndUserRecordDiv>
            <S.RecordLegendDiv>
              {userRecord.map(({ userChoice }, index) => (
                <div key={index + 1}>
                  {userChoice === 'Rock'
                    ? '바위'
                    : userChoice === 'Scissors'
                      ? '가위'
                      : userChoice === 'Paper'
                        ? '보'
                        : '-'}
                  <br />
                </div>
              ))}
            </S.RecordLegendDiv>
            <S.Line></S.Line>
            <S.UserAndBotText>나</S.UserAndBotText>
            <S.ArrowDiv>
              <Image
                fill
                src={IMAGE.rightArrow}
                sizes={'(max-width : 50pv) 100vw'}
                alt={'왼쪽 화살표'}></Image>
            </S.ArrowDiv>
          </S.BotAndUserRecordDiv>
        </S.RecordBody>
      </S.RecordRootDiv>
    </>
  );
};

export default RecordComponent;
