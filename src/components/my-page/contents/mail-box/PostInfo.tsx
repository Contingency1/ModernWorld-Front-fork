import * as S from '@/components/my-page/contents/mail-box/style';

export default function PostInfo(props: { title: string }) {
  return (
    <>
      <S.ContentsView height="25vh">
        <S.ListScroll>
          <S.MarginDiv fontSize="18px" margin="3vh 2vw" textAlign="left">
            {'편지 내용'}
          </S.MarginDiv>
        </S.ListScroll>
        <S.MarginDiv
          fontSize="18px"
          margin="1vh 2vw 0 2vw"
          textAlign="left"
          color="#767676">
          2024-07-16 14:43
        </S.MarginDiv>
        <hr style={{ width: '90%', borderTop: '1px dashed' }} />
        <S.MarginDiv margin="-1vh 2vw 0 0" textAlign="right">
          <img
            src="https://wang0514.s3.ap-northeast-2.amazonaws.com/page/trash.png"
            alt="del"
            width="33vw"
          />
        </S.MarginDiv>
      </S.ContentsView>
    </>
  );
}
