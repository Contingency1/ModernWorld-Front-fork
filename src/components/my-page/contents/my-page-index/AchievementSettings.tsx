'use client';

import * as S from './style';
import { useAtom } from 'jotai';
import { achievementColorAtom, userDataAtom } from '@/states/userAtoms';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ACHIEVEMENTS } from '@/app/api/achievement';
import { achievementDescriptions, levelColors } from '@/utils/achievements';
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
    achievementDescriptions.forEach((achievement) =>
      getAchievements(achievement.title),
    );
  }, [achievementColor]);

  const handleItemClick = async (data: AchievementDataType) => {
    if (data.achievement.title) {
      const response = await ACHIEVEMENTS.setAchievements(
        data.achievementNo,
        data.achievement.title,
      );
      setAchievementColor(data.achievement.level);
    }
  };

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
            {achievementDescriptions
              .reduce((rows, { title, level }, index) => {
                const currentRow = Math.floor(index / 2);
                if (!rows[currentRow]) {
                  rows[currentRow] = [];
                }
                rows[currentRow].push(
                  <S.DirectionDiv flex="row" $margin="0 1vw" key={title}>
                    <S.AchievementBadge>{padTitle(title)}</S.AchievementBadge>
                    <S.DirectionDiv flex="column">
                      {level?.map((lvl: string, idx: number) => {
                        const achievement = achievementData[title]?.find(
                          (ach) => ach.achievement.title === lvl,
                        );

                        const isAvailable = achievement?.achievement.title;
                        const fontColor = isAvailable
                          ? levelColors[achievement?.achievement.level]
                          : '#45454540';

                        return (
                          <S.AchievementListFont
                            key={`${title}-${idx}`}
                            color={fontColor}
                            onClick={() =>
                              isAvailable && handleItemClick(achievement!)
                            }
                            style={{
                              cursor: isAvailable ? 'pointer' : 'not-allowed',
                            }}>
                            <S.CheckUi />
                            {isAvailable && achievement?.status && (
                              <S.CheckImg src={IMAGE.check} />
                            )}
                            {padTitle(lvl)}
                          </S.AchievementListFont>
                        );
                      })}
                    </S.DirectionDiv>
                  </S.DirectionDiv>,
                );
                return rows;
              }, [] as JSX.Element[][])
              .map((row, index) => (
                <S.DirectionDiv flex="row" $margin="1vw 0" key={index}>
                  {row}
                </S.DirectionDiv>
              ))}
          </S.AchievementEleContainer>
        </S.UserInfoSection>
      </S.Background>
    </>
  );
}
