import * as S from './style';

export default function DayCheckBox(props: any) {
  return (
    <>
      <S.DayCheckBoxSection>
        <S.Font $fontSize="24px">월</S.Font>
        <S.EmojiViewer>
          <S.Font $fontSize="40px">😮</S.Font>
        </S.EmojiViewer>
      </S.DayCheckBoxSection>
    </>
  );
}
