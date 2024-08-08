import { NeighborsDataType } from '@/types/neighbors';
import Pagination from './Pagination';
import UserListItem from './UserListItem';
import * as S from './style';
import SearchBar from './SearchBar';

export default function Management(props: {
  userData: null | NeighborsDataType;
}) {
  return props.userData ? (
    <>
      <S.ManageSection>
        {props.userData.data[0] ? (
          <UserListItem userData={props.userData.data[0]} />
        ) : (
          <S.Font color="#454545">요청 목록이 비어있습니다.</S.Font>
        )}
      </S.ManageSection>
      <Pagination
        width="90%"
        margin="1vw"
        totalPage={props.userData.meta.totalPage}
      />
      <SearchBar />
    </>
  ) : (
    <></>
  );
}
