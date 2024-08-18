'use client';

import * as S from './style';
import { useAtom } from 'jotai';
import { userDataAtom } from '@/states/userAtoms';
import { useRouter } from 'next/navigation';
import AchievementEle from './AchievementEle';

export default function AchievementSettings() {
  const router = useRouter();
  const [indexUserInfo, setIndexUserInfo] = useAtom(userDataAtom);
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
              <AchievementEle />
            </S.DirectionDiv>
          </S.AchievementEleContainer>
        </S.UserInfoSection>
      </S.Background>
    </>
  );
}
