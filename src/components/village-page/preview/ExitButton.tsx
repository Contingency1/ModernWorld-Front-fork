'use client';

import * as S from '@/components/village-page/preview/style';
import { IMAGE } from '@/utils/image';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const ExitButton = () => {
  const route = useRouter();

  return (
    <>
      <S.ImgStyle
        width="40px"
        height="40px"
        onClick={() => route.back()}
        $marginLeft="20%">
        <Image
          src={IMAGE.exit}
          alt={'마을로 돌아가기'}
          fill
          sizes="(max-width : 40px) 100vw"></Image>
      </S.ImgStyle>
    </>
  );
};

export default ExitButton;
