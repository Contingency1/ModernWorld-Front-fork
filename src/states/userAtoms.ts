import { LeftUserInfoType } from '@/types/user';
import { atom } from 'jotai';
export const userDataAtom = atom<LeftUserInfoType>({
  nickname: '',
  currentPoint: 0,
  accumulationPoint: 0,
  legend: { likeCount: 0 },
  characterLocker: [
    {
      character: {
        image: '',
      },
    },
  ],
  userAchievement: [
    {
      achievement: {
        title: '',
        level: '',
      },
    },
  ],
});
export const characterImage = atom<string>('');
export const userCharacterChangeAtom = atom<boolean>(true);
