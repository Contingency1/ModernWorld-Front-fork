'use client';

import { useState } from 'react';
import * as S from './style';
import { EMOJIS } from '@/utils/emojiConstants';

export default function EmojiKeyboard() {
  const [selectedEmoji, setSelectedEmoji] = useState<number | null>(null);

  return (
    <S.EmojiContainer>
      {EMOJIS.map((emoji, index) =>
        emoji ? (
          <S.EmojiKey
            key={index}
            isSelected={selectedEmoji === index}
            onClick={() => setSelectedEmoji(index)}>
            {emoji}
          </S.EmojiKey>
        ) : null,
      )}
    </S.EmojiContainer>
  );
}
