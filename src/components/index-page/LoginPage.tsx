'use client';

import { IMAGE } from '@/utils/image';
import * as S from './style';
import Image from 'next/image';
import { COLOR } from '@/utils/color';
import axios from 'axios';
export default function LoginPage() {
  const BACKEND_API_URL =
    process.env.NEXT_PUBLIC_MODERN_WORLD_BASE_URL || 'http://localhost:8080';

  const handleLogin = async (provider: string) => {
    try {
      const response = await axios.get(
        `${BACKEND_API_URL}auth/login-url/${provider}`,
      );

      const targetUrl = response.data.loginUrl;

      if (targetUrl) {
        window.location.href = targetUrl;
      } else {
        alert('로그인 URL을 받아오지 못했습니다.');
      }
    } catch (error) {
      console.error('로그인 에러:', error);
      alert('로그인 서버 연결 실패');
    }
  };

  return (
    <S.BackgroundColor>
      <Image src={IMAGE.mainLogo} fill alt={'메인로그'} sizes={'(max-width)'} />
      <S.MainLogoDiv $grid1="40%" $grid2="11%" $grid3="11%" $grid4="11%">
        <S.MainLogoText $marginTop="13%" $fontSize="500%">
          모던월드
        </S.MainLogoText>

        {/* 네이버 로그인 버튼 */}
        <S.LoginBtnLink
          // href 속성 제거
          onClick={() => handleLogin('naver')} // 클릭 이벤트 추가
          color="#03C75A"
          $textColor={COLOR.white}
          font="110%">
          <S.logoDiv $imgWidth="35%" $imgHeight="100%">
            <Image
              src={IMAGE.naverLogo}
              fill
              alt={'네이버로고'}
              sizes={'(max-width:80px) 100vw'}
            />
          </S.logoDiv>
          <div style={{ fontFamily: "'NeoDGM', sans-serif" }}>
            네이버 로그인
          </div>
        </S.LoginBtnLink>

        {/* 카카오 로그인 버튼 */}
        <S.LoginBtnLink
          // href 속성 제거
          onClick={() => handleLogin('kakao')} // 클릭 이벤트 추가
          color="#FEE500"
          $textColor={COLOR.black}
          font="110%">
          <S.logoDiv
            $imgWidth="25%"
            $imgHeight="80%"
            $imgMarginRight="6%"
            $imgMarginLeft="4%">
            <Image
              src={IMAGE.kakaoLogo}
              fill
              alt={'카카오로고'}
              sizes={'(max-width:80px) 100vw'}
            />
          </S.logoDiv>
          <div style={{ fontFamily: "'NeoDGM', sans-serif" }}>
            카카오 로그인
          </div>
        </S.LoginBtnLink>

        {/* 구글 로그인 버튼 */}
        <S.LoginBtnLink
          // href 속성 제거
          onClick={() => handleLogin('google')} // 클릭 이벤트 추가
          color={COLOR.white}
          $textColor={COLOR.black}
          font="110%">
          <S.logoDiv
            $imgWidth="15%"
            $imgHeight="50%"
            $imgMarginRight="4%"
            $imgMarginLeft="8%">
            <Image
              src={IMAGE.googleLogo}
              fill
              alt={'구글로고'}
              sizes={'(max-width:80px) 100vw'}
            />
          </S.logoDiv>
          <div style={{ marginLeft: '8%', fontFamily: "'NeoDGM', sans-serif" }}>
            Google 로그인
          </div>
        </S.LoginBtnLink>
      </S.MainLogoDiv>
    </S.BackgroundColor>
  );
}
