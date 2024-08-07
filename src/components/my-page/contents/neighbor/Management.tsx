import { NeighborsDataType } from '@/types/neighbors';
import Pagination from './Pagination';
import UserListItem from './UserListItem';
import * as S from './style';
import SearchBar from './SearchBar';

export default function Management(props: any) {
  return props.userData ? (
    <>
      <S.ManageSection>
        <UserListItem userData={props.userData.data[0]} />
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
