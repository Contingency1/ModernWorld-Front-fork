import { MyRoom } from '@/components/my-room/MyRoom';
import * as S from '@/components/village-page/comment/styled';

export const Comment = () => {
  return (
    <S.CommentContainer>
      <S.RootDiv>
        <S.ExistButton
          src={
            'https://wang0514.s3.ap-northeast-2.amazonaws.com/page/remove.png'
          }></S.ExistButton>
        <S.UserName>기무라의 방</S.UserName>
        <S.UserRoomDiv>
          <MyRoom width="98%" height="95%"></MyRoom>
        </S.UserRoomDiv>
        <S.CommentInputRootDiv>
          <S.CommentInput placeholder="방명록을 남겨보세요~"></S.CommentInput>
          <S.PencilImg
            src={
              'https://wang0514.s3.ap-northeast-2.amazonaws.com/page/%EC%97%B0%ED%95%84%EC%95%84%EC%9D%B4%EC%BD%98'
            }
            width="2vw"
            height="2vw"
            $marginLeft="13%"></S.PencilImg>
        </S.CommentInputRootDiv>
        {[...Array(3)].map((_) => (
          <S.CommentRootDiv>
            <S.CommentNicknameDiv>
              김동우 : 잘보고가요^^총총 : 3 잘보고가요^^총총 : 3잘보고가요^^총총
              : 3잘보고가요^^총총 : 3잘보고가요^^총총 : 3잘보고가요^^총총 :
              3잘보고가요^^총총 : 3잘보고가요^^총총 : 3잘보고가요^^총총 : 3
            </S.CommentNicknameDiv>
            <S.CommentDateDiv>2024-08-15 21:37</S.CommentDateDiv>
            <S.PencilImg
              src={
                'https://wang0514.s3.ap-northeast-2.amazonaws.com/page/free-icon-dustbin-8152414.png'
              }
              width="1vw"
              height="1vw"></S.PencilImg>
          </S.CommentRootDiv>
        ))}
        <S.PageNationDiv>
          <S.PencilImg
            src={
              'https://wang0514.s3.ap-northeast-2.amazonaws.com/items/ArrowLeft.png'
            }
            width="1vw"
            height="1vw"></S.PencilImg>
          1 / 3
          <S.PencilImg
            src={
              'https://wang0514.s3.ap-northeast-2.amazonaws.com/items/ArrowRight.png'
            }
            width="1vw"
            height="1vw"></S.PencilImg>
        </S.PageNationDiv>
      </S.RootDiv>
    </S.CommentContainer>
  );
};
