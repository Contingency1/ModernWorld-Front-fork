import { IMAGE } from '@/utils/image';
import * as S from './style';
import Image from 'next/image';
import { COLOR } from '@/utils/color';
export default function LoginPage() {
  return (
    <S.BackgroundColor>
      <Image
        src={IMAGE.mainLogo}
        fill
        alt={'메인로그'}
        sizes={'(max-width)'}></Image>
      <S.MainLogoDiv $grid1="40%" $grid2="11%" $grid3="11%" $grid4="11%">
        <S.MainLogoText $marginTop="13%" $fontSize="500%">
          모던월드
        </S.MainLogoText>
        <S.LoginBtnLink
          href={`${process.env.NEXT_PUBLIC_CALLBACK_NAVER_URL}`}
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
          href={`${process.env.NEXT_PUBLIC_CALLBACK_KAKAO_URL}`}
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
          href={`${process.env.NEXT_PUBLIC_CALLBACK_GOOGLE_URL}`}
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
