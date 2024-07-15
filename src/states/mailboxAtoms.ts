import { atom, WritableAtom } from 'jotai'; //읽기와 쓰기 모두 가능한 WritableAtom
import { PresentListType, PresentInfo } from '@/types/mailBox';

export const selectMailBoxTypeAtom = atom(1);
export const senderPresentAtom = atom<PresentListType[]>([]);
export const receiverPresentAtom = atom<PresentListType[]>([]);

/*
PresentListType[] (상태 타입)
[PresentListType[]] (업데이트 인수 타입, 배열로 감싸서 전달)
void (업데이트 함수의 반환 타입)
*/

const createViewNoAtom = (
  presentAtom: WritableAtom<PresentListType[], [PresentListType[]], void>,
) =>
  atom(
    (get) => {
      const presents: PresentListType[] = get(presentAtom);
      return presents.length > 0 ? presents[0].no : 0;
    },
    (get, set, update: number) => {
      const presents: PresentListType[] = get(presentAtom);
      if (presents.length > 0) {
        const newPresents = [...presents];
        newPresents[0] = { ...newPresents[0], no: update };
        set(presentAtom, newPresents);
      }
    },
  ) as WritableAtom<number, [number], void>;

export const viewSenderPresentNoAtom = createViewNoAtom(senderPresentAtom);
export const viewReceiverPresentNoAtom = createViewNoAtom(receiverPresentAtom);

// presentInfo 공통 초기값
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
