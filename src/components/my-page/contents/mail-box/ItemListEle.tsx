import * as S from "@/components/my-page/contents/mail-box/style";

export default function ItemListEle(props) {
  return (
    <>
      <S.ItemListEleDiv>
        <img
          src="https://wang0514.s3.ap-northeast-2.amazonaws.com/page/gift-icon.png"
          alt="img"
          width="18vw"
        />
        <S.MarginDiv margin="1vw" fontSize="18px">
          재진 님에게 보낸 선물
        </S.MarginDiv>
        <S.MarginDiv fontSize="12px" color="#909090">
          읽음
        </S.MarginDiv>
      </S.ItemListEleDiv>
    </>
  );
}
