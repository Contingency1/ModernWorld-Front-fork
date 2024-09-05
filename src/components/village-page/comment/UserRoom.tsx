import { MyRoom } from '@/components/my-room/MyRoom';
import * as S from '@/components/village-page/comment/styled';

export const UserRoom = (props: { userNo: number }) => {
  return <MyRoom width="95%" height="90%" userNo={props.userNo}></MyRoom>;
};
