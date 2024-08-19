'use client';

import * as S from './style';
import { useAtom } from 'jotai';
import { userDataAtom } from '@/states/userAtoms';
import { useRouter } from 'next/navigation';
import AchievementEle from './AchievementEle';
import { useEffect, useState } from 'react';
import { ACHIEVEMENTS } from '@/app/api/achievement';

export default function AchievementSettings() {
  const router = useRouter();
  const [indexUserInfo, setIndexUserInfo] = useAtom(userDataAtom);
  const [achievementData, setAchievementData] = useState();

  const getAchievements = async () => {
    const response = await ACHIEVEMENTS.getAchievements();
  };

  useEffect(() => {
    getAchievements();
  }, []);

  return (
    <>
      <S.Background>
        <S.UserInfoSection height="65%">
          <S.UserImageContainer
            marginTop="-55vh"
            onClick={() => router.push('/my-page')}>
            <img src={indexUserInfo.image} alt="User Profile" />
          </S.UserImageContainer>
          <S.AchievementViewContainer>
            <S.Font>나의 업적 선택하기</S.Font>
          </S.AchievementViewContainer>
          <S.AchievementEleContainer>
            <S.DirectionDiv flex="column" $margin="0 0 5vw 0">
              <S.DirectionDiv flex="row" $margin="1vw 0">
                <S.DirectionDiv flex="row" $margin="0 1vw">
                  <S.AchievementBadge>소통왕</S.AchievementBadge>
                  <S.DirectionDiv flex="column">
                    <S.AchievementListFont color="#B8860B">
                      <S.CheckUi />
                      <S.CheckImg src="https://wang0514.s3.ap-northeast-2.amazonaws.com/page/check.png" />
                      어쩌구
                    </S.AchievementListFont>
                    <S.AchievementListFont color="#006400">
                      <S.CheckUi />
                      어쩌구
                    </S.AchievementListFont>
                    <S.AchievementListFont color="#65000B">
                      <S.CheckUi />
                      어쩌구
                    </S.AchievementListFont>
                  </S.DirectionDiv>
                  <S.DirectionDiv flex="row" $margin="0 1vw">
                    <S.AchievementBadge>소통왕</S.AchievementBadge>
                    <S.DirectionDiv flex="column">
                      <S.AchievementListFont color="#B8860B">
                        <S.CheckUi />
                        어쩌구
                      </S.AchievementListFont>
                      <S.AchievementListFont color="#006400">
                        <S.CheckUi />
                        어쩌구
                      </S.AchievementListFont>
                      <S.AchievementListFont color="#65000B">
                        <S.CheckUi />
                        어쩌구
                      </S.AchievementListFont>
                    </S.DirectionDiv>
                  </S.DirectionDiv>
                </S.DirectionDiv>
              </S.DirectionDiv>
            </S.DirectionDiv>
          </S.AchievementEleContainer>
        </S.UserInfoSection>
      </S.Background>
    </>
  );
}
