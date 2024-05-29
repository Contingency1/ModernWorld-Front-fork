import * as S from "@/components/my-page/user/style";

export default function CharacterInfo() {
  return (
    <>
      <S.CharacterInfo color="rgba(255, 255, 255, 0.5)">
        <img
          src="https://wang0514.s3.ap-northeast-2.amazonaws.com/items/firstDog.png"
          alt="강아지"
          width="110vw"
        />
        <S.NameSection>밍밍이 (아기)</S.NameSection>
      </S.CharacterInfo>
    </>
  );
}
