'use client';

import { useAtom } from 'jotai';
import * as S from './style';
import { userDataAtom } from '@/states/userAtoms';
import { useEffect, useState } from 'react';
import { UserLegendsType } from '@/types/user';
import legends from '@/app/api/legends';
import LEGENDS from '@/app/api/legends';

export default function MyPageIndex() {
  const [indexUserInfo, setIndexUserInfo] = useAtom(userDataAtom);
  const [userLegends, setUserLegends] = useState<UserLegendsType>({
    userNo: 0,
    attendanceCount: 0,
    commentCount: 0,
    itemCount: 0,
    presentCount: 0,
    likeCount: 0,
  });

  const getUserLegends = async () => {
    const response = await LEGENDS.getUserLegends();
    setUserLegends(response);
  };

  useEffect(() => {
    getUserLegends();
  }, []);

  return (
    <>
      <S.Background>
        <S.UserInfoSection>
          <S.UserImage src={indexUserInfo.image}></S.UserImage>
          <S.UserInfoContentSection>
            <S.UserInfoContent
              width="8vw"
              $backColor="#FFDEDE"
              $textAlign="center">
              이　　름
            </S.UserInfoContent>
            <S.UserInfoContent width="30vw" $backColor="#FFDEDE">
              {indexUserInfo.nickname ? indexUserInfo.nickname : '이름 없음'}
            </S.UserInfoContent>
          </S.UserInfoContentSection>
          <S.UserInfoContentSection $marginTop="16vh">
            <S.UserInfoContent
              width="8vw"
              $backColor="#D7E7FF"
              $textAlign="center">
              자기소개
            </S.UserInfoContent>
            <S.UserInfoContent width="30vw" $backColor="#D7E7FF">
              {indexUserInfo.description
                ? indexUserInfo.description
                : '자기소개 없음'}
            </S.UserInfoContent>
          </S.UserInfoContentSection>
        </S.UserInfoSection>
        <S.StatSection>
          <S.StatBadge>
            좋아요
            <S.AccentText>
              {userLegends.likeCount ? userLegends.likeCount : '0'}
            </S.AccentText>
          </S.StatBadge>
          <S.StatBadge>
            출석
            <S.AccentText>
              {userLegends.attendanceCount ? userLegends.attendanceCount : '0'}
            </S.AccentText>
          </S.StatBadge>
          <S.StatBadge>
            아이템
            <S.AccentText>
              {userLegends.itemCount ? userLegends.itemCount : '0'}
            </S.AccentText>
          </S.StatBadge>
        </S.StatSection>
      </S.Background>
    </>
  );
}
