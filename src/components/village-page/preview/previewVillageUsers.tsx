'use client';

import USER from '@/app/api/user';
import { MyRoom } from '@/components/my-room/MyRoom';
import * as S from '@/components/village-page/preview/style';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function PreviewVillageUsers() {
  const [like, setLike] = useState(0);
  const [likeState, setLikeState] = useState(false);

  useEffect(() => {
    async function getLike() {
      const response = await USER.getUserInfo(2);
      setLike(response.legend.likeCount);
    }
    getLike();
  }, [likeState]);

  /**
   * 409에러 해결해야됨
   * +++백에서 수정 해준다고 했음
   */

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

  return (
    <S.RootDiv>
      <S.ContainerDiv>
        <S.previewRoomDiv>
          <MyRoom width={'90%'} height={'90%'} border={'50px'}></MyRoom>
        </S.previewRoomDiv>
        <S.previewMenu>
          <S.MenuButton>친구 추가</S.MenuButton>
          <S.MenuButton>
            <S.HeartImg
              src="https://wang0514.s3.ap-northeast-2.amazonaws.com/page/heartPicture.png"
              onClick={() => {
                !likeState ? sendLike() : cancelLike();
              }}></S.HeartImg>
            {like}
          </S.MenuButton>
          <S.MenuButton>
            <Link href="/villagecat" style={{ textDecoration: 'none' }}>
              나가기
            </Link>
          </S.MenuButton>
        </S.previewMenu>
      </S.ContainerDiv>
    </S.RootDiv>
  );
}
