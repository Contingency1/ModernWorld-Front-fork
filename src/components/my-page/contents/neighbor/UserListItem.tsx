import * as S from './style';
export default function UserListItem() {
  return (
    <>
      <S.UserImg></S.UserImg>
      <S.FontSection>
        <S.RowDiv>
          <S.Font $fontSize="24px">사용자</S.Font>
          <S.Font $fontSize="18px" $margin="0 0 0 0.3vw">
            (업적)
          </S.Font>
        </S.RowDiv>
        <S.Font $fontSize="18px" $margin="1vw 0 0 0">
          안녕하세요~ 반가워요
        </S.Font>
      </S.FontSection>
      <S.ColumnSection>
        <S.Button>편지 보내기</S.Button>
        <S.Button>방 보러가기</S.Button>
      </S.ColumnSection>
    </>
  );
}
