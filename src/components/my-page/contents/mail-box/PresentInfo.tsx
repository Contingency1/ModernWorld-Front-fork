'use client';

import * as S from '@/components/my-page/contents/mail-box/style';

export default function PresentInfo(props: { title: string }) {
  const statusChange = (s: string) => {
    switch (s) {
      case 'unread':
        return '안읽음';
        break;
      case 'read':
        return '읽　음';
        break;
      case 'accept':
        return '수　락';
        break;
      case 'reject':
        return '거　절';
    }
  };

  return (
    <>
      <S.ContentsView height="25vh">
        <S.DelSection>
          <img
            src="https://wang0514.s3.ap-northeast-2.amazonaws.com/page/remove.png"
            alt="del"
            width="20vw"
          />
        </S.DelSection>

        <S.ItemImg>
          <img src={'아이템 이미지'} alt="img" height="90vh" />
          <S.FontSize fontSize="18px">{'아이템 이름'}</S.FontSize>
          <S.FontSize fontSize="14px">{'아이템 설명'}</S.FontSize>
          <S.FontSize fontSize="12px">{'아이템 날짜'}</S.FontSize>

          {props.title === '보낸 선물' || props.title === '보낸 편지' ? (
            <S.StatusFont fontSize="18px">{'상태'}</S.StatusFont>
          ) : (
            <S.ItemApprovalControls>
              <div>수락하기</div>
              <div>거절하기</div>
            </S.ItemApprovalControls>
          )}
        </S.ItemImg>
      </S.ContentsView>
    </>
  );
}
