import { atom } from 'jotai';

export const selectMailBoxTypeAtom = atom(0);
export const senderPresentAtom = atom([]);
export const receiverPresentAtom = atom([]);
export const viewSenderPresentNo = atom((get) => {
  const senderPresent = get(senderPresentAtom);
  return senderPresent[0];
});

export const viewReceiverPresentNo = atom((get) => {
  const receiverPresent = get(receiverPresentAtom);
  return receiverPresent[0];
});
