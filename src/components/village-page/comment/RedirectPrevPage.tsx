import Link from 'next/link';
import * as S from '@/components/village-page/comment/styled';
import { IMAGE } from '@/utils/image';
import Image from 'next/image';
export const RedirectPrevPage = (props: { userNo: number }) => {
  return (
    <Link href={`/previewVillageUsers/${props.userNo}`}>
      <S.ExistButton>
        <Image
          src={IMAGE.remove}
          alt={'뒤로가기'}
          fill
          sizes={'max-width:48px 100vw'}></Image>
      </S.ExistButton>
    </Link>
  );
};
