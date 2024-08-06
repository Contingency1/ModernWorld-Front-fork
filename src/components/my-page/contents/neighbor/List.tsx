import Pagination from './Pagination';
import UserListItem from './UserListItem';
import * as S from './style';

export default function List() {
  return (
    <>
      <S.UserListSection>
        <UserListItem />
      </S.UserListSection>
      <hr style={{ width: '80%' }} />
      <S.UserListSection>
        <UserListItem />
      </S.UserListSection>
      <hr style={{ width: '80%' }} />
      <S.UserListSection>
        <UserListItem />
      </S.UserListSection>
      <Pagination width="80%" margin="1vw" />
    </>
  );
}
