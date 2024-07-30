'use client';

import { useEffect, useState } from 'react';
import DayCheckBox from './DayCheckBox';
import EmojiKeyboard from './EmojiKeyboard';
import * as S from './style';
import USER from '@/app/api/user';
import { UserAttendanceDataType } from '@/types/user';

export default function CheckIn() {
  const [attendanceData, setAttendanceData] = useState<UserAttendanceDataType>({
    no: 0,
    nickname: '',
    attendance: {},
  });

  const days: Record<number, string> = {
    0: '월',
    1: '화',
    2: '수',
    3: '목',
    4: '금',
    5: '토',
    6: '일',
  };

  const getAttendance = async () => {
    const response = await USER.getAttendance();
    setAttendanceData(response);
  };

  useEffect(() => {
    getAttendance();
  }, []);

  return (
    <>
      <S.Background width="100%" height="100%" $backColor="#e9eff1">
        <S.Background width="90%" height="85%" $backColor="#fff">
          <S.ContentSection>
            <S.Font $fontSize="40px" color="#6C6C6C" $margin="0 3vh 0 0">
              출 석 체 크
            </S.Font>
            <img
              src="https://wang0514.s3.ap-northeast-2.amazonaws.com/page/check.png"
              width={'30vw'}
            />
          </S.ContentSection>
          <S.ContentSection>
            {Object.keys(days).map((key) => {
              const dayKey = Number(key);
              const attendance =
                attendanceData.attendance && attendanceData.attendance[dayKey]
                  ? attendanceData.attendance[dayKey]
                  : [0, 0];

              return (
                <DayCheckBox
                  key={dayKey}
                  day={days[dayKey]} // 요일 이름
                  attendance={attendance} // 출석 정보
                />
              );
            })}
          </S.ContentSection>
          <S.MoodSelectorSection>
            <S.ColumnContainer $margin="0 2vw 0 0">
              <S.Font $fontSize="15px" color="#737373">
                오늘의 기분을 선택하세요!
              </S.Font>
              <S.CheckButton>
                <S.Font $margin="0 0.5vw 0 0">출석하기</S.Font>
                <img
                  src="https://wang0514.s3.ap-northeast-2.amazonaws.com/page/check.png"
                  width={'12vw'}
                />
              </S.CheckButton>
            </S.ColumnContainer>
            <EmojiKeyboard />
          </S.MoodSelectorSection>
          <S.Hr></S.Hr>
        </S.Background>
      </S.Background>
    </>
  );
}
