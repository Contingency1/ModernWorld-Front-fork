'use client';

import { useAtom } from 'jotai';
import * as S from './style';
import { userDataAtom } from '@/states/userAtoms';
import { useRouter } from 'next/navigation';

export default function ServiceInfo() {
  const router = useRouter();
  const [indexUserInfo, setIndexUserInfo] = useAtom(userDataAtom);

  return (
    <>
      <S.Background>
        <S.UserInfoSection>
          <S.UserImageContainer onClick={() => router.push('/my-page')}>
            <img src={indexUserInfo.image} alt="User Profile" />
          </S.UserImageContainer>
          <S.ServiceInfoContainer>
            <S.UserInfoContent width="40vw" $backColor="#FFDEDE">
              업적 설명
              <S.Arrow src="https://wang0514.s3.ap-northeast-2.amazonaws.com/page/DownArrow.svg" />
            </S.UserInfoContent>
            <S.UserInfoContent
              $margin="1vw 0 0 0"
              width="40vw"
              $backColor="#D7E7FF">
              회원 정보
              <S.Arrow src="https://wang0514.s3.ap-northeast-2.amazonaws.com/page/DownArrow.svg" />
            </S.UserInfoContent>
          </S.ServiceInfoContainer>
        </S.UserInfoSection>
      </S.Background>
    </>
  );
}
