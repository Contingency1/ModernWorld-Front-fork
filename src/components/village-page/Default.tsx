import * as S from '@/components/village-page/styled';
import { COLOR } from '@/utils/color';
import { IMAGE } from '@/utils/image';
import Image from 'next/image';
import Link from 'next/link';

export const Default = () => {
  return (
    <S.RootDiv>
      <Link href="village/cat">
        <S.HarfDiv color={COLOR.grey}>
          <S.Outline>
            <S.ChoiceImg width={'100%'}>
              <Image
                fill
                alt={'고양이 마을 로고'}
                sizes="100vw"
                src={IMAGE.catVillageLogo}></Image>
            </S.ChoiceImg>
          </S.Outline>
        </S.HarfDiv>
      </Link>
      <Link href="village/dog">
        <S.HarfDiv color={COLOR.beige200}>
          <S.Outline>
            <S.ChoiceImg width={'90%'}>
              <Image
                fill
                sizes="100vw"
                alt={'강아지 마을 로고'}
                src={IMAGE.dogVillageLogo}></Image>
            </S.ChoiceImg>
          </S.Outline>
        </S.HarfDiv>
      </Link>
    </S.RootDiv>
  );
};
