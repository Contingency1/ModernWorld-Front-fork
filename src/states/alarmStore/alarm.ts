import { atom } from 'jotai';

export const alarmStateAtom = atom<{ title: string; content: string }>({
  title: '',
  content: '',
});
