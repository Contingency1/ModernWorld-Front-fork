import * as S from './style';
export default function AchievementEle() {
  return (
    <>
      <S.DirectionDiv flex="row" $margin="1vw 0">
        <S.DirectionDiv flex="row" $margin="0 1vw">
          <S.AchievementBadge>소통왕</S.AchievementBadge>
          <S.DirectionDiv flex="column">
            <S.AchievementListFont color="#B8860B">
              <S.CheckUi />
              <S.CheckImg src="https://wang0514.s3.ap-northeast-2.amazonaws.com/page/check.png" />
              어쩌구
            </S.AchievementListFont>
            <S.AchievementListFont color="#006400">
              <S.CheckUi />
              어쩌구
            </S.AchievementListFont>
            <S.AchievementListFont color="#65000B">
              <S.CheckUi />
              어쩌구
            </S.AchievementListFont>
          </S.DirectionDiv>
          <S.DirectionDiv flex="row" $margin="0 1vw">
            <S.AchievementBadge>소통왕</S.AchievementBadge>
            <S.DirectionDiv flex="column">
              <S.AchievementListFont color="#B8860B">
                <S.CheckUi />
                어쩌구
              </S.AchievementListFont>
              <S.AchievementListFont color="#006400">
                <S.CheckUi />
                어쩌구
              </S.AchievementListFont>
              <S.AchievementListFont color="#65000B">
                <S.CheckUi />
                어쩌구
              </S.AchievementListFont>
            </S.DirectionDiv>
          </S.DirectionDiv>
        </S.DirectionDiv>
      </S.DirectionDiv>
    </>
  );
}
