import { atom } from 'jotai';

export const pageViewTypeAtom = atom<'list' | 'management'>('list');
