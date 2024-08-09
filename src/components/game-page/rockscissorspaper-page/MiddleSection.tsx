import Link from 'next/link';
import * as S from '../styled';

const MiddleSection = ({ timer }: { timer: any }) => {
  console.log(timer);
  return (
    <S.GameInfoRootDiv>
      <S.GameInfoHeader>
        <S.Flexdiv
          $marginTop={'0'}
          width={'30vw'}
          height={'20vh'}
          $justifyContent={'space-evenly'}>
          <S.HandAndShadowDiv $marginTop="7vh">
            <S.HandImg
              width={'5vw'}
              height={'30%'}
              src={
                'https://wang0514.s3.ap-northeast-2.amazonaws.com/items/%EA%B0%80%EC%9C%84%EB%B0%94%EC%9C%84%EB%B3%B4/%EA%B0%80%EC%9C%84.svg'
              }></S.HandImg>
            <S.ShadowImg
              width={'5vw'}
              height={'30%'}
              src={
                'https://wang0514.s3.ap-northeast-2.amazonaws.com/items/%EA%B0%80%EC%9C%84%EB%B0%94%EC%9C%84%EB%B3%B4/handShadow.svg'
              }></S.ShadowImg>
          </S.HandAndShadowDiv>
          <S.HandAndShadowDiv $marginTop="7vh">
            <S.HandImg
              width={'5vw'}
              height={'30%'}
              src={
                'https://wang0514.s3.ap-northeast-2.amazonaws.com/items/%EA%B0%80%EC%9C%84%EB%B0%94%EC%9C%84%EB%B3%B4/%EB%B0%94%EC%9C%84.svg'
              }></S.HandImg>
            <S.ShadowImg
              width={'5vw'}
              height={'30%'}
              src={
                'https://wang0514.s3.ap-northeast-2.amazonaws.com/items/%EA%B0%80%EC%9C%84%EB%B0%94%EC%9C%84%EB%B3%B4/handShadow.svg'
              }></S.ShadowImg>
          </S.HandAndShadowDiv>
          <S.HandAndShadowDiv $marginTop="7vh">
            <S.HandImg
              width={'5vw'}
              height={'30%'}
              src={
                'https://wang0514.s3.ap-northeast-2.amazonaws.com/items/%EA%B0%80%EC%9C%84%EB%B0%94%EC%9C%84%EB%B3%B4/%EB%B3%B4.svg'
              }></S.HandImg>
            <S.ShadowImg
              width={'5vw'}
              height={'30%'}
              src={
                'https://wang0514.s3.ap-northeast-2.amazonaws.com/items/%EA%B0%80%EC%9C%84%EB%B0%94%EC%9C%84%EB%B3%B4/handShadow.svg'
              }></S.ShadowImg>
          </S.HandAndShadowDiv>
        </S.Flexdiv>
      </S.GameInfoHeader>
      <S.GameInfoBody>
        <S.CountText>{timer}</S.CountText>
        <S.IfYouDontPlayText>안 내면 진 거 가위바위보!</S.IfYouDontPlayText>
        <>전적보기</>
        <S.ChanceText>남은 기회 : 2/10</S.ChanceText>
        <Link href="/my-page">
          <S.ExistImg
            src={
              'https://wang0514.s3.ap-northeast-2.amazonaws.com/page/exit.png'
            }></S.ExistImg>
        </Link>
      </S.GameInfoBody>
    </S.GameInfoRootDiv>
  );
};

export default MiddleSection;
