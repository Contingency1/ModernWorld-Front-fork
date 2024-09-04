'use client';

import { useAtom } from 'jotai';
import * as S from './style';
import { userDataAtom } from '@/states/userAtoms';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { achievementDescriptions } from '@/utils/achievements';
import { serviceDescriptions } from '@/utils/serviceInfo';
import { DescriptionType } from '@/types/utils';
import AUTH from '@/app/api/auth';
import { IMAGE } from '@/utils/image';

export default function ServiceInfo() {
  const router = useRouter();
  const [indexUserInfo] = useAtom(userDataAtom);
  const [isAchievementDescription, setIsAchievementDescription] =
    useState(false);
  const [isServiceDescription, setIsServiceDescription] = useState(false);

  const handleUserWithdrawal = async () => {
    await AUTH.userWithdrawal();
    router.push('/');
  };

  const toggleDescription = (type: string) => {
    if (type === 'achievement') setIsAchievementDescription((prev) => !prev);
    else setIsServiceDescription((prev) => !prev);
  };

  const renderDescriptions = (descriptions: DescriptionType[]) =>
    descriptions.map(({ id, title, description }: DescriptionType) => (
      <div key={id}>
        <S.Font $margin="0.5vw 0" color="#FF2525" $fontSize="20px">
          {title}
        </S.Font>
        <S.Font $fontSize="16px">
          {Array.isArray(description)
            ? description.map((desc, i) => (
                <S.Font key={i} $fontSize="16px">
                  {desc}
                </S.Font>
              ))
            : description}
        </S.Font>
      </div>
    ));

  return (
    <S.Background>
      <S.UserInfoSection>
        <S.UserImageContainer onClick={() => router.push('/my-page')}>
          <img src={indexUserInfo.image} alt="User Profile" />
        </S.UserImageContainer>
        <S.ServiceInfoContainer>
          <S.Font $fontSize="14px" color="#9C9C9C" $margin="0 -1.5vw 0 0">
            {indexUserInfo.socialName} 님 안녕하세요!
          </S.Font>
          {[
            {
              label: '업적 설명',
              isVisible: isAchievementDescription,
              toggle: () => toggleDescription('achievement'),
              content: renderDescriptions(achievementDescriptions),
              backColor: '#FFDEDE',
            },
            {
              label: '이용 정보',
              isVisible: isServiceDescription,
              toggle: () => toggleDescription('service'),
              content: renderDescriptions(serviceDescriptions),
              backColor: '#D7E7FF',
            },
          ].map(({ label, isVisible, toggle, content, backColor }, index) => (
            <div key={index} style={{ margin: '0.5vw 0 0.5vw 0' }}>
              <S.UserInfoContent width="40vw" $backColor={backColor}>
                {label}
                <S.Arrow
                  src={isVisible ? IMAGE.arrowUp : IMAGE.arrowDown}
                  onClick={toggle}
                />
              </S.UserInfoContent>
              {isVisible && (
                <S.ServiceDescriptionContainer>
                  {content}
                </S.ServiceDescriptionContainer>
              )}
            </div>
          ))}
          <S.Font
            $fontSize="14px"
            color="#9C9C9C"
            $margin="4vw 2.6vw 0 auto"
            cursor="pointer"
            onClick={() => handleUserWithdrawal()}>
            회원탈퇴 하러가기
          </S.Font>
        </S.ServiceInfoContainer>
      </S.UserInfoSection>
    </S.Background>
  );
}
