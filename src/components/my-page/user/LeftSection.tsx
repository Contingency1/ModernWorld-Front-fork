import * as S from "@/components/my-page/style";
import CharacterInfo from "./CharacterInfo";
import PointInfo from "./PointInfo";
import Category from "./Category";

export default function LeftSection() {
  return (
    <>
      <S.OutLineSection width="48vh" height="82vh">
        <CharacterInfo></CharacterInfo>
        <PointInfo></PointInfo>
        <Category></Category>
      </S.OutLineSection>
    </>
  );
}
