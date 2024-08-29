import { NeighborsDataType } from '@/types/neighbors';
import Pagination from './Pagination';
import UserListItem from './UserListItem';
import * as S from './style';

export default function List(props: { userData: null | NeighborsDataType }) {
  if (!props.userData) {
    return <>로딩중...</>;
  }

  if (props.userData.data.length === 0) {
    return <>아직 이웃이 없습니다!</>;
  }

  return (
    <>
      <S.UserListSection>
        <UserListItem userData={props.userData.data[0]} />
      </S.UserListSection>
      <hr style={{ width: '80%' }} />
      <S.UserListSection>
        <UserListItem userData={props.userData.data[1]} />
      </S.UserListSection>
      <hr style={{ width: '80%' }} />
      <S.UserListSection>
        <UserListItem userData={props.userData.data[2]} />
      </S.UserListSection>
      <Pagination
        width="80%"
        margin="1vw"
        totalPage={props.userData.meta.totalPage}
      />
    </>
  );
}
