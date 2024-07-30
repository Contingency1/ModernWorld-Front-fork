import * as S from './style';

export default function DayCheckBox(props: any) {
  const emojis = [
    '',
    '😀',
    '😂',
    '😍',
    '😐',
    '😮',
    '😣',
    '🤒',
    '😨',
    '😭',
    '😡',
  ];
  return (
    <>
      <S.DayCheckBoxSection>
        <S.Font $fontSize="24px">{props.day}</S.Font>
        <S.EmojiViewer>
          <S.Font $fontSize="40px">{emojis[props.attendance[1]]}</S.Font>
        </S.EmojiViewer>
      </S.DayCheckBoxSection>
    </>
  );
}
