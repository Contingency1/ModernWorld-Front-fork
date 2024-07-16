import { atom } from 'jotai';
import { MailBoxDataType } from '@/types/mailBox';

export const mailBoxSelectAtom = atom(0);
export const senderDataAtom = atom<MailBoxDataType[]>([]);
export const receiverDataAtom = atom<MailBoxDataType[]>([]);
export const viewPageAtom = atom<number>(0);
