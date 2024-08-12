'use client';

import {
  BotHandAtom,
  SelectHandAtom,
  ShowResultAtom,
  userHandAtom,
} from '@/states/gameAtom';
import * as S from '../styled';
import { useAtom } from 'jotai';
import { useEffect, useState } from 'react';
import { GAME } from '@/app/api/game';
import { day, month, UTChours, year } from '@/utils/date';

const RecordComponent = () => {
  const [showResult, setShowResult] = useAtom(ShowResultAtom);
  const [selectHand, setSelectHand] = useAtom(SelectHandAtom);
  const [userHand, setUserHand] = useAtom(userHandAtom);
  const [_, setBotHand] = useAtom(BotHandAtom);
  const [date, setDate] = useState(`${month}-${day}`);
  const [userRecord, setUserRecord] = useState<
    [
      {
        no: number;
        userNo: number;
        userChoice: string;
        computerChoice: string;
        result: string;
        createdAt: string;
      },
    ]
  >([
    {
      no: 0,
      userNo: 0,
      userChoice: '',
      computerChoice: '',
      result: '',
      createdAt: '',
    },
  ]);
  const [computerHandRecord, setComputerHandRecord] = useState([]);
  const [userHandRecord, setUserHandRecord] = useState([]);
  const [record, setRecord] = useState([]);

  const getUserNo = () => {
    const userNo = localStorage.getItem('userNo');
    return Number(userNo);
  };

  useEffect(() => {
    const getUserRecord = async () => {
      if (Number(UTChours) > 15) {
        const response = await GAME.GetUsersLecord(
          getUserNo(),
          `${year}-${Number(date) - 1}`,
        );
        setComputerHandRecord(response.map((hand: any) => hand.computerChoice));
        setUserHandRecord(response.map((hand: any) => hand.userChoice));
        setRecord(response.map((hand: any) => hand.result));
        setUserRecord(response);
      } else {
        const response = await GAME.GetUsersLecord(
          getUserNo(),
          `${year}-${date}`,
        );
        setComputerHandRecord(response.map((hand: any) => hand.computerChoice));
        setUserHandRecord(response.map((hand: any) => hand.userChoice));
        setRecord(response.map((hand: any) => hand.result));
        setUserRecord(response);
      }
    };
    getUserRecord();
  }, [date]);

  const resetUserHand = () => {
    setUserHand(3);
  };

  const userInputDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDate(event.target.value);
  };

  return (
    <S.RecordRootDiv $pointerClick={!showResult}>
      <S.RecordHeader>
        <S.InputDateTodayMatchDiv>
          <S.InputDate
            placeholder={`${Number(UTChours) > 15 ? `${month}-${Number(day) - 1}` : `${month}-${day}`}`}
            $pointerClick={!showResult}
            onChange={userInputDate}></S.InputDate>
          <S.TodayMatch>의 대전</S.TodayMatch>
        </S.InputDateTodayMatchDiv>
        <S.RetryText
          $pointerClick={!showResult}
          onClick={() => {
            setShowResult(false);
            setSelectHand(false);
          }}>
          게임하기
        </S.RetryText>
      </S.RecordHeader>
      <S.RecordBody>
        <S.BotAndUserRecordDiv>
          <S.ArrowImg
            src={
              'https://wang0514.s3.ap-northeast-2.amazonaws.com/items/ArrowLeft.png'
            }></S.ArrowImg>
          <S.UserAndBotText>봇</S.UserAndBotText>
          <S.Line></S.Line>
          <S.RecordLegendDiv>
            {computerHandRecord.map((hand) => (
              <>
                {hand === 'Rock' ? '바위' : hand === 'Scissors' ? '가위' : '보'}
                <br />
              </>
            ))}
          </S.RecordLegendDiv>
        </S.BotAndUserRecordDiv>
        <S.ScoreDiv>
          <S.RecordLegendDiv>
            {record.map((record, index) => (
              <S.RecordText
                key={index}
                color={
                  record === 'win'
                    ? 'blue'
                    : record === 'draw'
                      ? '#FF5454'
                      : 'red'
                }>
                {record === 'win' ? '승' : record === 'draw' ? '무' : '패'}
              </S.RecordText>
            ))}
          </S.RecordLegendDiv>
          <S.RecordLegendDiv>
            {record.map((record, index) => (
              <S.RecordText
                style={{ marginLeft: '1vw' }}
                key={index}
                color={record === 'white' ? 'white' : 'white'}>
                {record === 'win' ? '+300' : 0}
              </S.RecordText>
            ))}
          </S.RecordLegendDiv>
        </S.ScoreDiv>
        <S.BotAndUserRecordDiv>
          <S.RecordLegendDiv>
            {userHandRecord.map((hand) => (
              <>
                {hand === 'Rock'
                  ? '바위'
                  : hand === 'Scissors'
                    ? '가위'
                    : hand === 'Paper'
                      ? '보'
                      : '-'}
                <br />
              </>
            ))}
          </S.RecordLegendDiv>
          <S.Line></S.Line>
          <S.UserAndBotText>나</S.UserAndBotText>
          <S.ArrowImg
            src={
              'https://wang0514.s3.ap-northeast-2.amazonaws.com/items/ArrowRight.png'
            }></S.ArrowImg>
        </S.BotAndUserRecordDiv>
      </S.RecordBody>
    </S.RecordRootDiv>
  );
};

export default RecordComponent;
