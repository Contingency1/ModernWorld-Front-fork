'use client';

import { IMAGE } from '@/utils/image';
import Image from 'next/image';
import * as S from '@/components/village-page/preview/style';
import NEIGHBOR from '@/app/api/neighbor';

const AddFriend = ({ userNo }: { userNo: number }) => {
  async function addFriend(userNo: number) {
    await NEIGHBOR.sendFriendRequest(userNo);
  }
  return (
    <>
      <S.MenuButtonDiv
        width="12vw"
        $marginLeft="10%"
        onClick={() => addFriend(userNo)}>
        <S.ImgStyle $marginRight="5%" width="20px" height="20px">
          <Image
            src={IMAGE.addFriend}
            alt={'친구 추가'}
            fill
            sizes="(max-width : 20px) 100vw"></Image>
        </S.ImgStyle>
        친구 추가
      </S.MenuButtonDiv>
    </>
  );
};

export default AddFriend;
