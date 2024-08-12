import { SendMailDataType } from '@/types/mailBox';
import { atom } from 'jotai';

export const pageViewTypeAtom = atom<'list' | 'management'>('list');
export const neighborListPageAtom = atom<number>(1);
export const neighborApplicationPageAtom = atom<number>(1);
export const isNeighborSendModalAtom = atom(false);
