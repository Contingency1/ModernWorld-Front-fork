import { atom } from 'jotai';

export const selectItemTypeAtom = atom(0);
export const themeTypeAtom = atom<
  '봄 테마' | '여름 테마' | '가을 테마' | '겨울 테마'
>('봄 테마');
export const charactersTypeAtom = atom<'cat' | 'dog'>('dog');
export const isModalOpenAtom = atom(false);
export const isGiftPageOpenAtom = atom(false);
