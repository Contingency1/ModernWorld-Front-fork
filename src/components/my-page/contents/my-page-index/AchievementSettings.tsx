'use client';

import * as S from './style';
import { useAtom } from 'jotai';
import { achievementColorAtom, userDataAtom } from '@/states/userAtoms';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ACHIEVEMENTS } from '@/app/api/achievement';
import { achievementTitles, levelColors } from '@/utils/achievements';
import { AchievementDataType } from '@/types/achievement';
import { IMAGE } from '@/utils/image';

const padTitle = (title: string) => {
  if (title.length >= 5) return title;
  return title + '　'.repeat(5 - title.length);
};

export default function AchievementSettings() {
  const router = useRouter();
  const [indexUserInfo, setIndexUserInfo] = useAtom(userDataAtom);
  const [achievementData, setAchievementData] = useState<
    Record<string, AchievementDataType[]>
  >({});
  const [achievementColor, setAchievementColor] = useAtom(achievementColorAtom);

  const getAchievements = async (title: string) => {
    const response = await ACHIEVEMENTS.getAchievements(title);
    setAchievementData((prev) => ({
      ...prev,
      [title]: response,
    }));
  };

  useEffect(() => {
    achievementTitles.flat().forEach((title) => getAchievements(title));
  }, [achievementColor]);

  const handleItemClick = async (data: AchievementDataType) => {
    const response = await ACHIEVEMENTS.setAchievements(
      data.achievementNo,
      data.achievement.title,
    );
    setAchievementColor(data.achievement.level);
  };

  console.log(achievementData);

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
            {achievementTitles.map((pair, index) => (
              <S.DirectionDiv flex="row" $margin="1vw 0" key={index}>
                {pair.map((title) => (
                  <S.DirectionDiv flex="row" $margin="0 1vw" key={title}>
                    <S.AchievementBadge>{padTitle(title)}</S.AchievementBadge>
                    <S.DirectionDiv flex="column">
                      {achievementData[title]?.map(
                        (data: AchievementDataType) => (
                          <S.AchievementListFont
                            key={data.achievementNo}
                            color={levelColors[data.achievement.level]}
                            onClick={() => handleItemClick(data)}>
                            <S.CheckUi />
                            {data.status && <S.CheckImg src={IMAGE.check} />}
                            {padTitle(data.achievement.title)}
                          </S.AchievementListFont>
                        ),
                      )}
                    </S.DirectionDiv>
                  </S.DirectionDiv>
                ))}
              </S.DirectionDiv>
            ))}
          </S.AchievementEleContainer>
        </S.UserInfoSection>
      </S.Background>
    </>
  );
}
