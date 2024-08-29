import * as S from '@/components/village-page/preview/style';
import { IMAGE } from '@/utils/image';
import Image from 'next/image';
import Link from 'next/link';

const ExitButton = () => {
  return (
    <>
      <S.ImgStyle width="40px" height="40px" $marginLeft="20%">
        <Link href={'/village'}>
          <Image
            src={IMAGE.exit}
            alt={'마을로 돌아가기'}
            fill
            sizes="(max-width : 40px) 100vw"></Image>
        </Link>
      </S.ImgStyle>
    </>
  );
};

export default ExitButton;
