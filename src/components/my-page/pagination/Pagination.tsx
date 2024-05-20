import * as S from "@/components/my-page/pagination/style";

export default function Pagination(props) {
  return (
    <>
      <S.PageSection width={`${props.width}`}>
        <img
          src="https://wang0514.s3.ap-northeast-2.amazonaws.com/items/ArrowLeft.png"
          alt="<"
          width="30vw"
        />
        1 / 2
        <img
          src="https://wang0514.s3.ap-northeast-2.amazonaws.com/items/ArrowRight.png"
          alt="<"
          width="30vw"
        />
      </S.PageSection>
    </>
  );
}
