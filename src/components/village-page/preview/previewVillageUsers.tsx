'use client';

import USER from '@/app/api/user';
import { MyRoom } from '@/components/my-room/MyRoom';
import * as S from '@/components/village-page/preview/style';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function PreviewVillageUsers() {
  const [like, setLike] = useState(0);
  const [likeState, setLikeState] = useState(false);
  const route = useRouter();

  async function sendLike() {
    const response = await USER.sendLike(2);
    if (response === 409) {
      cancelLike();
    }
    setLikeState(true);
  }

  async function cancelLike() {
    await USER.unLike(2);
    setLikeState(false);
  }

  useEffect(() => {
    async function getLike() {
      const response = await USER.getUserInfo(2);
      setLike(response.legend.likeCount);
    }
    getLike();
  }, [likeState]);

  return (
    <S.RootDiv>
      <S.ContainerDiv>
        <S.previewRoomDiv>
          <MyRoom width={'90%'} height={'90%'}></MyRoom>
        </S.previewRoomDiv>
      </S.ContainerDiv>
      <S.previewMenu>
        <S.MenuButton>친구 추가</S.MenuButton>
        <S.MenuButton
          onClick={() => {
            !likeState ? sendLike() : cancelLike();
          }}>
          <S.HeartAndExistImg
            $marginRight="5%"
            src="https://wang0514.s3.ap-northeast-2.amazonaws.com/page/heartPicture.png"></S.HeartAndExistImg>
          {like}
        </S.MenuButton>
        <S.HeartAndExistImg
          $marginLeft="10%"
          src="https://wang0514.s3.ap-northeast-2.amazonaws.com/page/exit.png"
          onClick={() => route.push('/villagecat')}></S.HeartAndExistImg>
      </S.previewMenu>
    </S.RootDiv>
  );
}
