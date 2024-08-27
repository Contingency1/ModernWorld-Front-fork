import { IMAGE } from '@/utils/image';
import * as S from './style';
import Image from 'next/image';
import { COLOR } from '@/utils/color';
export default function LoginPage() {
  return (
    <S.BackgroundColor style={{ backgroundColor: '#5F6F52' }}>
      {/* <Image
        src={IMAGE.mainLogo}
        fill
        alt={'메인로그'}
        sizes={'(max-width)'}></Image> */}
      <S.MainLogoDiv $grid1="40%" $grid2="11%" $grid3="11%" $grid4="11%">
        <S.MainLogoText $marginTop="13%" $fontSize="500%">
          모던월드
        </S.MainLogoText>
        <S.LoginBtnLink
          href={`https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${process.env.NEXT_PUBLIC_NAVER_ID}&redirect_uri=${process.env.NEXT_PUBLIC_HTTPS_LOCALHOST}/naver/auth/callback&state=test&auth_type=reauthenticate`}
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
          <div>네이버 로그인</div>
        </S.LoginBtnLink>
        <S.LoginBtnLink
          href={` https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_KAKAO_ID}&redirect_uri=${process.env.NEXT_PUBLIC_HTTPS_LOCALHOST}/kakao/auth/callback&response_type=code&prompt=login`}
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
          <div>카카오 로그인</div>
        </S.LoginBtnLink>
        <S.LoginBtnLink
          href={`https://accounts.google.com/o/oauth2/v2/auth?access_type=offline&response_type=code&client_id=${process.env.NEXT_PUBLIC_GOOGLE_ID}&redirect_uri=${process.env.NEXT_PUBLIC_HTTPS_LOCALHOST}/google/auth/callback&scope=https://www.googleapis.com/auth/userinfo.profile&prompt=consent`}
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
          <div style={{ marginLeft: '8%' }}>Google 로그인</div>
        </S.LoginBtnLink>
      </S.MainLogoDiv>
    </S.BackgroundColor>
  );
}
