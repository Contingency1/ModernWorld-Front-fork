import * as S from './style';

export default function EmojiKeyboard() {
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
    <S.EmojiContainer>
      {emojis.map((emoji, index) =>
        emoji ? <S.EmojiKey key={index}>{emoji}</S.EmojiKey> : null,
      )}
    </S.EmojiContainer>
  );
}
