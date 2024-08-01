import * as S from './style';
import { EMOJIS } from '@/utils/emojiConstants';
export default function DayCheckBox(props: any) {
  return (
    <>
      <S.DayCheckBoxSection>
        <S.Font $fontSize="24px" color={props.color ? props.color : null}>
          {props.day}
        </S.Font>
        <S.EmojiViewer>
          <S.Font $fontSize="40px">{EMOJIS[props.attendance[0]]}</S.Font>
        </S.EmojiViewer>
      </S.DayCheckBoxSection>
    </>
  );
}
