import Link from 'next/link';
import * as S from '../styled';
import Image from 'next/image';
import { IMAGE } from '@/utils/image';
import { useSetAtom } from 'jotai';
import { OnlyRecordAtom } from '@/states/gameAtom';

const ExistComponent = () => {
  const setOnlyRecord = useSetAtom(OnlyRecordAtom);

  const handleChildClick = (
    event: React.MouseEvent<HTMLDivElement>,
    action: boolean,
  ) => {
    event.stopPropagation();
    action ? setOnlyRecord(true) : null;
  };
  return (
    <Link href="/my-page">
      <S.ExistDiv onClick={(event) => handleChildClick(event, false)}>
        <Image
          src={IMAGE.exit}
          alt={'나가기'}
          fill
          sizes={'(max-width : 50px) 100vw'}></Image>
      </S.ExistDiv>
    </Link>
  );
};

export default ExistComponent;
