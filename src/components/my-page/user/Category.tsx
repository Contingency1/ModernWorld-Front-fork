import * as S from "@/components/my-page/user/style";

export default function Category() {
  return (
    <>
      <S.CategorySection>
        <S.CategoryEle borderRight="1px solid #A2A2A2">우편함</S.CategoryEle>
        <S.CategoryEle>이웃</S.CategoryEle>
        <S.CategoryEle
          borderRight="1px solid #A2A2A2"
          borderTop="1px solid #A2A2A2"
        >
          퀘스트
        </S.CategoryEle>
        <S.CategoryEle borderTop="1px solid #A2A2A2">인벤토리</S.CategoryEle>
        <S.CategoryEle
          borderRight="1px solid #A2A2A2"
          borderTop="1px solid #A2A2A2"
        >
          출석체크
        </S.CategoryEle>
        <S.CategoryEle borderTop="1px solid #A2A2A2">펫 방</S.CategoryEle>
      </S.CategorySection>
    </>
  );
}
