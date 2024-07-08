import * as S from '@/components/my-page/user/style';
import { useAtom } from 'jotai';
import { userDataAtom } from '@/states/userAtoms';

export default function PointInfo() {
  const [data] = useAtom(userDataAtom);

  return (
    <>
      <S.PointInfo color="rgba(255, 255, 255, 0.5)">
        <S.PointTitle>사용 가능 포인트</S.PointTitle>
        <S.PointContent>{data.currentPoint}</S.PointContent>
        <S.PointHr />
        <S.PointTitle>누적 포인트</S.PointTitle>
        <S.PointContent>{data.accumulationPoint}</S.PointContent>
      </S.PointInfo>
    </>
  );
}
