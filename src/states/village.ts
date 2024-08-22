import { atom } from 'jotai';

export const villageUsersArrayAtom = atom<[]>([]);
export const currentPageAtom = atom<number>(1);
export const sortStateAtom = atom<string>('');
export const searchValue = atom<string>('');
export const UserSelectedAtom = atom('');
export const PagesAtom = atom({ page: 1, totalPage: 1 });
