'use client';

import Link from 'next/link';
import * as S from './style';
import USER from '@/app/api/user';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { IMAGE } from '@/utils/image';
export default function MainPage() {
  const [name, setName] = useState('');
  const [isUser, setIsUser] = useState<boolean>(true);
  const route = useRouter();

  useEffect(() => {
    const getUserName = async () => {
      const userNo = Number(localStorage.getItem('userNo'));
      try {
        const response = await USER.getUserInfo(userNo);
        setName(response.nickname);
        return;
      } catch (err) {
        setIsUser(false);
        alert('로그인이 필요합니다');
        return route.push('/loginpage');
      }
    };

    getUserName();
  }, []);

  return (
    <S.BackgroundColor>
      <S.MainLogoDiv $grid1="40%" $grid2="30%" $grid3="30%">
        <Image
          src={IMAGE.mainLogo}
          fill
          alt={'메인로그'}
          sizes={'(max-width)'}></Image>
        <S.MainLogoText $marginTop="13%" $fontSize="500%">
          모던월드
        </S.MainLogoText>
        <S.MainLogoText $fontSize="100%" style={{ marginBottom: '5%' }}>
          {name}님 환영합니다 :)
        </S.MainLogoText>
        <Link href="/my-page">
          <S.MainPowerBtn>
            <Image
              src={IMAGE.powerBtn}
              fill
              alt={'마이페이지 가기'}
              sizes={'(max-width: 100px) 100vw'}></Image>
          </S.MainPowerBtn>
        </Link>
      </S.MainLogoDiv>
    </S.BackgroundColor>
  );
}
