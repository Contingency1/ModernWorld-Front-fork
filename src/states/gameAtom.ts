import { atom } from 'jotai';

export const userHandAtom = atom<number>(3);
export const gameResultAtom = atom<{
  userChoice: string;
  computerChoice: string;
  result: string;
  createdAt: string;
  user: {
    no: number;
    nickname: string;
    chance: number;
  };
}>({
  userChoice: '',
  computerChoice: '',
  result: '',
  createdAt: '',
  user: { no: 0, nickname: '', chance: 0 },
});
export const StartTimerAtom = atom<boolean>(false);
export const CurrentSecAtom = atom<number>(3);
export const ShowResultAtom = atom<boolean>(false);
export const BotHandAtom = atom('');
export const RecordAtom = atom<any>([]);
export const RefreshResultAtom = atom(false);
