"use client";

import * as S from "@/components/my-page/user/style";
import CharacterInfo from "./CharacterInfo";
import PointInfo from "./PointInfo";
import Category from "./Category";
import useGetUser from "@/app/api/useGetUser";

export default function LeftSection() {
  useGetUser(2);

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
