import { atom } from 'jotai';

export const selectedTypeAtom = atom<'objects' | 'characters'>('objects');
export const themeAtom = atom('봄 테마');
export const characterTypeAtom = atom<'cat' | 'dog'>('dog');
