import Link from 'next/link';
import * as S from './styled';

const Lobby = () => {
  return (
    <S.BackGroundDiv $flexDirection="column">
      <S.TopDiv>
        <S.Flexdiv>
          <S.HandAndShadowDiv $marginTop="23%">
            <S.HandImg
              width={'8vw'}
              height={'20vh'}
              src={
                'https://wang0514.s3.ap-northeast-2.amazonaws.com/items/%EA%B0%80%EC%9C%84%EB%B0%94%EC%9C%84%EB%B3%B4/%EA%B0%80%EC%9C%84.svg'
              }></S.HandImg>
            <S.ShadowImg
              width={'8vw'}
              height={'20vh'}
              src={
                'https://wang0514.s3.ap-northeast-2.amazonaws.com/items/%EA%B0%80%EC%9C%84%EB%B0%94%EC%9C%84%EB%B3%B4/handShadow.svg'
              }></S.ShadowImg>
          </S.HandAndShadowDiv>
          <S.HandAndShadowDiv $marginTop="23%">
            <S.HandImg
              width={'8vw'}
              height={'20vh'}
              src={
                'https://wang0514.s3.ap-northeast-2.amazonaws.com/items/%EA%B0%80%EC%9C%84%EB%B0%94%EC%9C%84%EB%B3%B4/%EB%B0%94%EC%9C%84.svg'
              }></S.HandImg>
            <S.ShadowImg
              width={'8vw'}
              height={'20vh'}
              src={
                'https://wang0514.s3.ap-northeast-2.amazonaws.com/items/%EA%B0%80%EC%9C%84%EB%B0%94%EC%9C%84%EB%B3%B4/handShadow.svg'
              }></S.ShadowImg>
          </S.HandAndShadowDiv>
          <S.HandAndShadowDiv $marginTop="23%">
            <S.HandImg
              width={'8vw'}
              height={'20vh'}
              src={
                'https://wang0514.s3.ap-northeast-2.amazonaws.com/items/%EA%B0%80%EC%9C%84%EB%B0%94%EC%9C%84%EB%B3%B4/%EB%B3%B4.svg'
              }></S.HandImg>
            <S.ShadowImg
              width={'8vw'}
              height={'20vh'}
              src={
                'https://wang0514.s3.ap-northeast-2.amazonaws.com/items/%EA%B0%80%EC%9C%84%EB%B0%94%EC%9C%84%EB%B3%B4/handShadow.svg'
              }></S.ShadowImg>
          </S.HandAndShadowDiv>
        </S.Flexdiv>
      </S.TopDiv>
      <S.BottomDiv>
        <S.RockSicssorsPapreDiv>가위바위보 게임</S.RockSicssorsPapreDiv>
        <Link href="/game/rockscissorspaper">
          <S.PowerImg
            src={
              'https://wang0514.s3.ap-northeast-2.amazonaws.com/page/power.png'
            }></S.PowerImg>
        </Link>
      </S.BottomDiv>
    </S.BackGroundDiv>
  );
};

export default Lobby;
