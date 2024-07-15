import { atom } from 'jotai';
import { PresentListType, PresentInfo } from '@/types/mailBox';

export const selectMailBoxTypeAtom = atom(1);
export const senderPresentAtom = atom<PresentListType[]>([]);
export const receiverPresentAtom = atom<PresentListType[]>([]);
export const viewSenderPresentNoAtom = atom<number>(0);
export const viewReceiverPresentNoAtom = atom<number>(0);

//presentInfo 공통 초기값
const presentInfoData: PresentInfo = {
  no: 0,
  status: '',
  createdAt: '',
  item: {
    name: '',
    image: '',
    description: '',
  },
  userPresentSenderNo: {
    no: 0,
    nickname: '',
  },
  userPresentReceiverNo: {
    no: 0,
    nickname: '',
  },
};

export const senderPresentInfoAtom = atom<PresentInfo>(presentInfoData);
export const receiverPresentInfoAtom = atom<PresentInfo>(presentInfoData);
