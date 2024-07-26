import * as S from './style';

export default function MyPageIndex() {
  return (
    <>
      <S.Background>
        <S.UserInfoSection>
          <S.UserImage src="https://wang0514.s3.ap-northeast-2.amazonaws.com/page/%ED%83%84%EC%A7%80%EB%A1%9C.jpg"></S.UserImage>
          <S.UserInfoContentSection>
            <S.UserInfoContent
              width="8vw"
              $backColor="#FFDEDE"
              $textAlign="center">
              이　　름
            </S.UserInfoContent>
            <S.UserInfoContent width="30vw" $backColor="#FFDEDE">
              탄지로
            </S.UserInfoContent>
          </S.UserInfoContentSection>
          <S.UserInfoContentSection $marginTop="16vh">
            <S.UserInfoContent
              width="8vw"
              $backColor="#D7E7FF"
              $textAlign="center">
              자기소개
            </S.UserInfoContent>
            <S.UserInfoContent width="30vw" $backColor="#D7E7FF">
              하이욤
            </S.UserInfoContent>
          </S.UserInfoContentSection>
        </S.UserInfoSection>
        <S.StatSection>
          <S.StatBadge>
            좋아요<S.AccentText>5</S.AccentText>
          </S.StatBadge>
          <S.StatBadge>
            방문<S.AccentText>5</S.AccentText>
          </S.StatBadge>
          <S.StatBadge>
            이웃<S.AccentText>5</S.AccentText>
          </S.StatBadge>
        </S.StatSection>
      </S.Background>
    </>
  );
}
