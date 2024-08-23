import Link from 'next/link';
import * as S from '@/components/village-page/comment/styled';
export const RedirectPrevPage = (props: { userNo: number }) => {
  return (
    <Link href={`/previewVillageUsers/${props.userNo}`}>
      <S.ExistButton
        src={
          'https://wang0514.s3.ap-northeast-2.amazonaws.com/page/remove.png'
        }></S.ExistButton>
    </Link>
  );
};
