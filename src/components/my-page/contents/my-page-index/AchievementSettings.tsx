'use client';

import * as S from './style';
import { useAtom } from 'jotai';
import { userDataAtom } from '@/states/userAtoms';
import { useRouter } from 'next/navigation';

export default function AchievementSettings() {
  const router = useRouter();
  const [indexUserInfo, setIndexUserInfo] = useAtom(userDataAtom);
  return (
    <>
      <S.Background>
        <S.UserInfoSection>
          <S.UserImageContainer onClick={() => router.push('/my-page')}>
            <img src={indexUserInfo.image} alt="User Profile" />
          </S.UserImageContainer>
        </S.UserInfoSection>
      </S.Background>
    </>
  );
}
