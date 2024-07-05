import Link from 'next/link';
import * as S from './style';
export default function LoginPage() {
  return (
    <body style={{ backgroundColor: '#5F6F52' }}>
      <S.MainLogo grid1="40%" grid2="30%" grid3="30%">
        <S.MainLogoText marginTop="230%" fontSize="5%">
          모던월드
        </S.MainLogoText>
        <S.MainLogoText fontSize="2%">님 환영합니다 :)</S.MainLogoText>
        <Link href="/newcharacter">
          <S.MainPowerBtn width="80px" height="80px"></S.MainPowerBtn>
        </Link>
      </S.MainLogo>
    </body>
  );
}
