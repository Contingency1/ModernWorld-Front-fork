import Pagination from './Pagination';
import UserListItem from './UserListItem';
import * as S from './style';

export default function Management() {
  return (
    <>
      <S.ManageSection>
        <UserListItem />
      </S.ManageSection>
      <Pagination width="90%" margin="1vw" />
      <S.ManageSection>
        <S.ColumnSection width="100%" height="100%" $margin="0 0 -1vw 0">
          <S.UserSearchBar placeholder="친구 신청할 유저 닉네임을 검색하세요!" />
          <S.DisplayDiv flex="row" $margin="1vw">
            <S.Font $fontSize="18px" $margin="0 1vw">
              ? 님께
            </S.Font>
            <S.Button>요청 보내기</S.Button>
          </S.DisplayDiv>
        </S.ColumnSection>
      </S.ManageSection>
    </>
  );
}
