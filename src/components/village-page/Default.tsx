import * as S from '@/components/village-page/styled';
import Link from 'next/link';

export const Default = () => {
  return (
    <S.RootDiv>
      <Link href="village/cat">
        <S.HarfDiv color={'#CACACA'}>
          <S.Outline>
            <S.ChoiceImg
              width={'100%'}
              src={
                'https://wang0514.s3.ap-northeast-2.amazonaws.com/items/KakaoTalk_20240509_151108128.png'
              }
            />
          </S.Outline>
        </S.HarfDiv>
      </Link>
      <Link href="village/dog">
        <S.HarfDiv color={'#E5D9B6'}>
          <S.Outline>
            <S.ChoiceImg
              width={'90%'}
              src={
                'https://wang0514.s3.ap-northeast-2.amazonaws.com/items/%EA%B0%95%EC%95%84%EC%A7%80+%EB%A7%88%EC%9D%84.png'
              }
            />
          </S.Outline>
        </S.HarfDiv>
      </Link>
    </S.RootDiv>
  );
};
