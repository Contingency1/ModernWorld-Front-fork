'use client';

import NEIGHBOR from '@/app/api/neighbor';
import USER from '@/app/api/user';
import { MyRoom } from '@/components/my-room/MyRoom';
import * as S from '@/components/village-page/preview/style';
import { isAxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function PreviewVillageUsers(props: { userNo: any }) {
  const [like, setLike] = useState(0);
  const [likeState, setLikeState] = useState(false);
  const route = useRouter();

  async function sendLike(userNo: number) {
    const response = await USER.sendLike(userNo);
    if (response === 409) {
      cancelLike(userNo);
    }
    setLikeState(true);
  }

  async function cancelLike(userNo: number) {
    await USER.unLike(userNo);
    setLikeState(false);
  }

  async function addFriend(userNo: number) {
    confirm('친구 요청을 보내시겠습니까?');
    try {
      await NEIGHBOR.sendFriendRequest(userNo);
      alert('친구 요청을 성공적으로 보냈습니다');
    } catch (err) {
      console.log(err);
      if (isAxiosError(err) && err.response) {
        if (err.response.status === 409)
          alert('이미 친구요청을 보낸 상대입니다');
      }
    }
  }

  useEffect(() => {
    async function getLike(userNo: number) {
      const response = await USER.getUserInfo(userNo);
      setLike(response.legend.likeCount);
    }
    getLike(props.userNo);
  }, [likeState]);

  return (
    <S.RootDiv>
      <S.ContainerDiv>
        <S.previewRoomDiv>
          <MyRoom width={'90%'} height={'90%'} userNo={props.userNo}></MyRoom>
        </S.previewRoomDiv>
      </S.ContainerDiv>
      <S.previewMenu>
        <S.MenuButton onClick={() => addFriend(props.userNo)}>
          친구 추가
        </S.MenuButton>
        <S.MenuButton
          onClick={() => {
            !likeState ? sendLike(props.userNo) : cancelLike(props.userNo);
          }}>
          <S.HeartAndExistImg
            $marginRight="5%"
            src="https://wang0514.s3.ap-northeast-2.amazonaws.com/page/heartPicture.png"></S.HeartAndExistImg>
          {like}
        </S.MenuButton>
        <S.HeartAndExistImg
          $marginLeft="10%"
          src="https://wang0514.s3.ap-northeast-2.amazonaws.com/page/exit.png"
          onClick={() => route.push('/village/cat')}></S.HeartAndExistImg>
      </S.previewMenu>
    </S.RootDiv>
  );
}
