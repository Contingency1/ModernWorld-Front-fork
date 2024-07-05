'use client';

import { useAtom } from 'jotai';
import {
  themeAtom,
  selectedTypeAtom,
  characterTypeAtom,
} from '@/states/inventoryAtoms';
import * as S from '@/components/my-page/contents/style';

export default function InvenRightBookMark() {
  const [theme, setTheme] = useAtom(themeAtom);
  const [characterType, setCharacterType] = useAtom(characterTypeAtom);
  const [selectedType] = useAtom(selectedTypeAtom);

  const themeClick = (n: number) => {
    switch (n) {
      case 1:
        setTheme('봄 테마');
        break;
      case 2:
        setTheme('여름 테마');
        break;
      case 3:
        setTheme('가을 테마');
        break;
      case 4:
        setTheme('겨울 테마');
        break;
      default:
        break;
    }
  };

  if (selectedType === 'objects') {
    return (
      <>
        <S.BookMarkSide>
          <S.RMenuDiv
            color={theme === '봄 테마' ? '#363A8D' : '#7C80C8'}
            onClick={() => themeClick(1)}>
            봄
          </S.RMenuDiv>
          <S.RMenuDiv
            color={theme === '여름 테마' ? '#363A8D' : '#7C80C8'}
            onClick={() => themeClick(2)}>
            여름
          </S.RMenuDiv>
          <S.RMenuDiv
            color={theme === '가을 테마' ? '#363A8D' : '#7C80C8'}
            onClick={() => themeClick(3)}>
            가을
          </S.RMenuDiv>
          <S.RMenuDiv
            color={theme === '겨울 테마' ? '#363A8D' : '#7C80C8'}
            onClick={() => themeClick(4)}>
            겨울
          </S.RMenuDiv>
        </S.BookMarkSide>
      </>
    );
  } else {
    return (
      <>
        <S.BookMarkSide>
          <S.RMenuDiv
            color={characterType === 'dog' ? '#363A8D' : '#7C80C8'}
            onClick={() => setCharacterType('dog')}>
            강아지
          </S.RMenuDiv>
          <S.RMenuDiv
            color={characterType === 'cat' ? '#363A8D' : '#7C80C8'}
            onClick={() => setCharacterType('cat')}>
            고양이
          </S.RMenuDiv>
        </S.BookMarkSide>
      </>
    );
  }
}
