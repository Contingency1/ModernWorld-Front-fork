import * as S from './style';

export default function Pagination(props: { width: string; margin: string }) {
  return (
    <>
      <S.PaginationSection width={props.width} $margin={props.margin}>
        <img
          src="https://wang0514.s3.ap-northeast-2.amazonaws.com/items/ArrowLeft.png"
          alt="<"
          width="30vw"
        />
        3 / 4
        <img
          src="https://wang0514.s3.ap-northeast-2.amazonaws.com/items/ArrowRight.png"
          alt=">"
          width="30vw"
        />
      </S.PaginationSection>
    </>
  );
}
