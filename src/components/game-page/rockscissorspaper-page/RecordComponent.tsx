'use client';

import {
  OnlyRecordAtom,
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
import { add, format, subHours } from 'date-fns';
import { OnlyRecord } from './OnlyRecord';

const RecordComponent = () => {
  const [showResult, setShowResult] = useAtom(ShowResultAtom);
  const [date, setDate] = useState(`${getTime().month}-${getTime().day}`);
  const [monthDay, setMonthDay] = useState(getTime().current);

  const setResetUserHand = useSetAtom(userHandAtom);
  const [record, setRecord] = useState<RecordType[]>([
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
  const onlyRecord = useAtomValue(OnlyRecordAtom);

  const getUserNo = () => {
    if (typeof window !== undefined) {
      const userNo = localStorage.getItem('userNo');
      return Number(userNo);
    }
  };

  useEffect(() => {
    const getUserRecord = async () => {
      // const kstDate = new Date(monthDay);

      // const utcDate = subHours(kstDate, 9);

      // const date = format(utcDate, 'yyyy-MM-dd');

      const response = await GAME.GetUsersLecord(
        getUserNo() as number,
        `${monthDay}`,
      );
      setRecord(response);
    };
    getUserRecord();
  }, [refresh, date, monthDay]);

  const userInputDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDate(event.target.value);
  };

  const addDay = (date: string) => {
    const addDay = format(add(date, { days: 1 }), 'yyyy-MM-dd');
    setMonthDay(addDay);
  };

  const prevDay = (date: string) => {
    const prevDay = format(add(date, { days: -1 }), 'yyyy-MM-dd');
    setMonthDay(prevDay);
  };

  const onclickHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  return (
    <>
      <S.RecordRootDiv $pointerClick={!showResult} onClick={onclickHandler}>
        <S.RecordHeader>
          <S.InputDateTodayMatchDiv>
            <S.InputDate
              placeholder={monthDay}
              $pointerClick={!showResult}
              onChange={userInputDate}></S.InputDate>
            <S.TodayMatch>의 대전</S.TodayMatch>
          </S.InputDateTodayMatchDiv>
          <S.RetryText
            $pointerClick={
              (!showResult && onlyRecord) || (showResult && !onlyRecord)
            }
            onClick={() => {
              setResetUserHand(3);
              setShowResult(false);
            }}>
            다시하기
          </S.RetryText>
        </S.RecordHeader>
        <S.RecordBody>
          <S.BotAndUserRecordDiv>
            <S.ArrowDiv
              $pointerClick={
                (!showResult && onlyRecord) || (showResult && !onlyRecord)
              }
              onClick={() => {
                prevDay(monthDay);
              }}>
              <Image
                fill
                src={IMAGE.leftArrow}
                sizes={'(max-width : 50pv) 100vw'}
                alt={'왼쪽 화살표'}></Image>
            </S.ArrowDiv>
            <S.UserAndBotText>봇</S.UserAndBotText>
            <S.Line></S.Line>
            <S.RecordLegendDiv>
              {record.map(({ computerChoice }, index) => (
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
              {record.map(({ result }, index) => (
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
              {record.map(({ result }, index) => (
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
              {record.map(({ userChoice }, index) => (
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
            <S.ArrowDiv
              $pointerClick={
                (!showResult && onlyRecord) || (showResult && !onlyRecord)
              }
              onClick={() => {
                addDay(monthDay);
              }}>
              <Image
                fill
                src={IMAGE.rightArrow}
                sizes={'(max-width : 50pv) 100vw'}
                alt={'오른쪽 화살표'}></Image>
            </S.ArrowDiv>
          </S.BotAndUserRecordDiv>
        </S.RecordBody>
      </S.RecordRootDiv>
    </>
  );
};

export default RecordComponent;
