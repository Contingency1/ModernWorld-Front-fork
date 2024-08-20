'use client';

import Link from 'next/link';
import * as S from './style';
import USER from '@/app/api/user';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
export default function MainPage() {
  const [name, setName] = useState('');
  const route = useRouter();

  const getUserName = async () => {
    const userNo = Number(localStorage.getItem('userNo'));
    try {
      const response = await USER.getUserInfo(userNo);
      setName(response.nickname);
      return;
    } catch (err) {
      alert('로그인이 필요합니다');
      return route.push('/loginpage');
    }
  };

  useEffect(() => {
    getUserName();
  }, []);

  return (
    <S.BackgroundColor style={{ backgroundColor: '#5F6F52' }}>
      <S.MainLogo $grid1="40%" $grid2="30%" $grid3="30%">
        <S.MainLogoText $marginTop="13%" $fontSize="500%">
          모던월드
        </S.MainLogoText>
        <S.MainLogoText $fontSize="100%" style={{ marginBottom: '5%' }}>
          {name}님 환영합니다 :)
        </S.MainLogoText>
        <Link href="/my-page">
          <S.MainPowerBtn width="80px" height="80px"></S.MainPowerBtn>
        </Link>
      </S.MainLogo>
    </S.BackgroundColor>
  );
}
