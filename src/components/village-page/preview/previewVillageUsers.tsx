'use client';

import { COMMENT } from '@/app/api/comment';
import NEIGHBOR from '@/app/api/neighbor';
import USER from '@/app/api/user';
import { MyRoom } from '@/components/my-room/MyRoom';
import * as S from '@/components/village-page/preview/style';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function PreviewVillageUsers(props: { userNo: number }) {
  const [like, setLike] = useState(0);
  const [likeState, setLikeState] = useState(false);
  const [comment, setComment] = useState(0);
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
    await NEIGHBOR.sendFriendRequest(userNo);
  }

  async function getComments(userNo: number) {
    const response = await COMMENT.getComments(
      userNo,
      1,
      1,
      'asc',
      'receiverNo',
    );
    console.log(response.meta);
    setComment(response.meta.totalCount);
  }
  console.log(comment);

  useEffect(() => {
    async function getLike(userNo: number) {
      const response = await USER.getUserInfo(userNo);
      setLike(response.legend.likeCount);
    }
    getComments(props.userNo);
    getLike(props.userNo);
  }, [likeState]);

  return (
    <S.RootDiv>
      <S.ContainerDiv>
        <S.previewRoomDiv>
          <MyRoom width={'95%'} height={'90%'} userNo={props.userNo}></MyRoom>
        </S.previewRoomDiv>
      </S.ContainerDiv>
      <S.previewMenuContainer>
        <S.previewMenuDiv>
          <S.MenuButtonDiv
            width="15vw"
            onClick={() => {
              !likeState ? sendLike(props.userNo) : cancelLike(props.userNo);
            }}
            $marginLeft="15%">
            <S.ImgStyle
              $marginRight="5%"
              src="https://wang0514.s3.ap-northeast-2.amazonaws.com/page/heartPicture.png"
              width="20px"
              height="20px"></S.ImgStyle>
            좋아요 {like}
          </S.MenuButtonDiv>

          <S.MenuButtonDiv
            width="14vw"
            $marginLeft="10%"
            onClick={() => route.push(`${props.userNo}/comment`)}>
            <S.ImgStyle
              $marginRight="5%"
              src={
                'https://wang0514.s3.ap-northeast-2.amazonaws.com/page/previewpage/addComment.png'
              }
              width="20px"
              height="20px"></S.ImgStyle>
            방명록 남기기 {comment}
          </S.MenuButtonDiv>
          <S.MenuButtonDiv
            width="12vw"
            $marginLeft="10%"
            onClick={() => addFriend(props.userNo)}>
            <S.ImgStyle
              $marginRight="5%"
              src={
                'https://wang0514.s3.ap-northeast-2.amazonaws.com/page/previewpage/addFriend.png'
              }
              width="20px"
              height="20px"></S.ImgStyle>
            친구 추가
          </S.MenuButtonDiv>
          <S.ImgStyle
            width="40px"
            height="40px"
            src="https://wang0514.s3.ap-northeast-2.amazonaws.com/page/exit.png"
            onClick={() => route.push('/village/cat')}
            $marginLeft="20%"></S.ImgStyle>
        </S.previewMenuDiv>
      </S.previewMenuContainer>
    </S.RootDiv>
  );
}
