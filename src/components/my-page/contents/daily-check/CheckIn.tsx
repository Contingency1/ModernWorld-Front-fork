'use client';

import { useEffect, useState } from 'react';
import DayCheckBox from './DayCheckBox';
import * as S from './style';
import USER from '@/app/api/user';
import { UserAttendanceDataType } from '@/types/user';
import { days } from '@/utils/daysConstants';
import { EMOJIS } from '@/utils/emojiConstants';
import { bouncy } from 'ldrs';

export default function CheckIn() {
  const [selectedEmoji, setSelectedEmoji] = useState<number | null>(null);
  const [isCheck, setIsCheck] = useState(false);
  const [currentDate, setCurrentDate] = useState('');
  const [weekday, setWeekday] = useState(0);
  const [attendanceData, setAttendanceData] =
    useState<UserAttendanceDataType | null>(null);

  bouncy.register();

  const getAttendance = async () => {
    const response = await USER.getAttendance();
    if (response) {
      if (response.attendance[weekday][0] > 0) {
        setIsCheck(true);
        setSelectedEmoji(response.attendance[weekday][0]);
      }
    }

    setAttendanceData(response);
  };

  const setAttendance = async () => {
    if (selectedEmoji) {
      await USER.setAttendance(selectedEmoji);
      setIsCheck(true);
    } else {
      alert('기분을 선택해주세요!');
    }
  };

  useEffect(() => {
    getAttendance();
    const today = new Date();
    const formattedDate = today.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long',
    });
    const weekday = today
      .toLocaleDateString('ko-KR', {
        weekday: 'long',
      })
      .substring(0, 1);
    setWeekday(days.indexOf(weekday));
    setCurrentDate(formattedDate);
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
            {attendanceData ? (
              days.map((day, index) => {
                if (day.trim() === '') {
                  return null; // 빈 문자열인 경우 렌더링하지 않음
                }

                const attendance =
                  attendanceData.attendance && attendanceData.attendance[index]
                    ? attendanceData.attendance[index]
                    : [0, 0];
                return (
                  <DayCheckBox key={index} day={day} attendance={attendance} />
                );
              })
            ) : (
              <l-bouncy size="45" speed="1.75" color="black"></l-bouncy>
            )}
          </S.ContentSection>
          <S.MoodSelectorSection>
            <S.ColumnContainer $margin="0 2vw 0 0">
              <S.Font $fontSize="15px" color="#737373" $margin="0 0 -1vh 0">
                {selectedEmoji
                  ? '오늘은 ' + EMOJIS[selectedEmoji]
                  : '오늘의 기분을 선택하세요!'}
              </S.Font>
              <S.CheckButton onClick={setAttendance}>
                <S.Font $margin="0 0.5vw 0 0">
                  {isCheck ? '출석완료' : '출석하기'}
                </S.Font>
                <img
                  src="https://wang0514.s3.ap-northeast-2.amazonaws.com/page/check.png"
                  width={'12vw'}
                />
              </S.CheckButton>
              <S.Font $margin="2vh" color="#484848" $fontSize="18px">
                {currentDate}
              </S.Font>
            </S.ColumnContainer>
            <S.EmojiContainer>
              {EMOJIS.map((emoji, index) =>
                emoji ? (
                  <S.EmojiKey
                    key={index}
                    isSelected={selectedEmoji === index}
                    onClick={() => setSelectedEmoji(index)}>
                    {emoji}
                  </S.EmojiKey>
                ) : null,
              )}
            </S.EmojiContainer>
          </S.MoodSelectorSection>
          <S.Hr></S.Hr>
        </S.Background>
      </S.Background>
    </>
  );
}
