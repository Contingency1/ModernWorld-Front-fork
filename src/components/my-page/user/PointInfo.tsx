import * as S from "@/components/my-page/style";

export default function PointInfo() {
  return (
    <>
      <S.PointInfo>
        <S.PointTitle>사용 가능 포인트</S.PointTitle>
        <S.PointContent>2,000 point</S.PointContent>
        <S.PointHr />
        <S.PointTitle>누적 포인트</S.PointTitle>
        <S.PointContent>10,000 point</S.PointContent>
      </S.PointInfo>
    </>
  );
}
