import * as S from '@/components/my-page/user/style';

export default function Category() {
  return (
    <>
      <S.CategorySection>
        <S.CategoryEle $borderRight="1px solid #A2A2A2">
          <S.LinkBox href="/my-page/mailbox">우편함</S.LinkBox>
        </S.CategoryEle>
        <S.CategoryEle>
          <S.LinkBox href="/my-page/inventory">인벤토리</S.LinkBox>
        </S.CategoryEle>
        <S.CategoryEle
          $borderRight="1px solid #A2A2A2"
          $borderTop="1px solid #A2A2A2">
          <S.LinkBox href="/shop">상점</S.LinkBox>
        </S.CategoryEle>
        <S.CategoryEle $borderTop="1px solid #A2A2A2">
          <S.LinkBox href="/my-page/neighbor">이웃</S.LinkBox>
        </S.CategoryEle>
        <S.CategoryEle
          $borderRight="1px solid #A2A2A2"
          $borderTop="1px solid #A2A2A2">
          <S.LinkBox href="/village">마을</S.LinkBox>
        </S.CategoryEle>
        <S.CategoryEle $borderTop="1px solid #A2A2A2">
          <S.LinkBox href="/my-page/pet-room">펫 방</S.LinkBox>
        </S.CategoryEle>
      </S.CategorySection>
    </>
  );
}
