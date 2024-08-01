import * as S from './style';
export default function MainPage() {
  return (
    <S.BackgroundColor style={{ backgroundColor: '#5F6F52' }}>
      <S.MainLogo $grid1="40%" $grid2="11%" $grid3="11%" $grid4="11%">
        <S.MainLogoText $marginTop="13%" $fontSize="500%">
          모던월드
        </S.MainLogoText>
        <S.LoginBtnLink
          href={`https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${process.env.NEXT_PUBLIC_NAVER_ID}&redirect_uri=${process.env.NEXT_PUBLIC_HTTPS_LOCALHOST}/naver/auth/callback&state=test&auth_type=reauthenticate`}
          color="#03C75A"
          $textColor="#ffffff"
          $imgWidth="35%"
          $imgHeight="100%"
          font="110%">
          <img src="https://wang0514.s3.ap-northeast-2.amazonaws.com/page/%EB%A1%9C%EA%B7%B8%EC%9D%B8+%EC%95%84%EC%9D%B4%EC%BD%98+%EB%A1%9C%EA%B3%A0+%EB%AA%A8%EC%9D%8C/n%EB%A1%9C%EA%B3%A0-removebg-preview.png"></img>
          네이버 로그인
        </S.LoginBtnLink>
        <S.LoginBtnLink
          href={` https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_KAKAO_ID}&redirect_uri=${process.env.NEXT_PUBLIC_HTTPS_LOCALHOST}/kakao/auth/callback&response_type=code&prompt=login`}
          color="#FEE500"
          $textColor="#000000"
          $imgWidth="25%"
          $imgHeight="80%"
          $imgMarginRight="6%"
          $imgMarginLeft="4%"
          font="110%">
          <img src="https://wang0514.s3.ap-northeast-2.amazonaws.com/page/%EB%A1%9C%EA%B7%B8%EC%9D%B8+%EC%95%84%EC%9D%B4%EC%BD%98+%EB%A1%9C%EA%B3%A0+%EB%AA%A8%EC%9D%8C/%EC%B9%B4%EC%B9%B4%EC%98%A4%EB%A1%9C%EA%B3%A0-removebg-preview.png"></img>
          카카오 로그인
        </S.LoginBtnLink>
        <S.LoginBtnLink
          href="newcharacter"
          color="#ffffff"
          $textColor="#000000"
          $imgWidth="15%"
          $imgHeight="50%"
          $imgMarginRight="4%"
          $imgMarginLeft="8%"
          font="110%">
          <img src="https://wang0514.s3.ap-northeast-2.amazonaws.com/page/%EB%A1%9C%EA%B7%B8%EC%9D%B8+%EC%95%84%EC%9D%B4%EC%BD%98+%EB%A1%9C%EA%B3%A0+%EB%AA%A8%EC%9D%8C/%EA%B5%AC%EA%B8%80%EB%A1%9C%EA%B3%A02-removebg-preview.png"></img>
          Google 계정으로 로그인
        </S.LoginBtnLink>
      </S.MainLogo>
    </S.BackgroundColor>
  );
}
