import { UserInfoType, UserLegendsType } from '@/types/user';
import { atom } from 'jotai';
export const userDataAtom = atom<UserInfoType>({
  nickname: '',
  currentPoint: 0,
  accumulationPoint: 0,
  description: '',
  image: '',
  legend: {
    likeCount: 0,
  },
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
