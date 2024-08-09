import { atom } from 'jotai';
import { MailBoxDataType, SendMailDataType } from '@/types/mailBox';

export const mailBoxSelectAtom = atom<number>(0);
export const postSenderDataAtom = atom<MailBoxDataType[]>([]);
export const postReceiverDataAtom = atom<MailBoxDataType[]>([]);
export const presentSenderDataAtom = atom<MailBoxDataType[]>([]);
export const presentReceiverDataAtom = atom<MailBoxDataType[]>([]);
export const viewSendPageAtom = atom<number>(0);
export const viewReceiverPageAtom = atom<number>(0);
export const isSendMailModalAtom = atom<boolean>(false);
export const sendMailDataAtom = atom<SendMailDataType | null>(null);

export const senderDataAtom = atom((get) => {
  return get(mailBoxSelectAtom) === 0
    ? get(postSenderDataAtom)
    : get(presentSenderDataAtom);
});

export const receiverDataAtom = atom((get) => {
  return get(mailBoxSelectAtom) === 0
    ? get(postReceiverDataAtom)
    : get(presentReceiverDataAtom);
});
