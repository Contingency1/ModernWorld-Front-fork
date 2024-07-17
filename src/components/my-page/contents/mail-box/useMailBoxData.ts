import MAILBOX from '@/app/api/mailBox';
import {
  postReceiverDataAtom,
  postSenderDataAtom,
  presentReceiverDataAtom,
  presentSenderDataAtom,
} from '@/states/mailboxAtoms';
import { useAtom } from 'jotai';
import { useEffect } from 'react';

export default function useMailBoxData(type: number) {
  const [postSenderData, setPostSenderData] = useAtom(postSenderDataAtom);
  const [postReceiverData, setPostReceiverData] = useAtom(postReceiverDataAtom);
  const [presentSenderData, setPresentSenderData] = useAtom(
    presentSenderDataAtom,
  );
  const [presentReceiverData, setPresentReceiverData] = useAtom(
    presentReceiverDataAtom,
  );

  const getPresents = async () => {
    setPresentSenderData(await MAILBOX.getPresentsList('senderNo'));
    setPresentReceiverData(await MAILBOX.getPresentsList('receiverNo'));
  };

  const getPosts = async () => {
    setPostSenderData(await MAILBOX.getPostsList('senderNo'));
    setPostReceiverData(await MAILBOX.getPostsList('receiverNo'));
  };

  useEffect(() => {
    if (type === 0) {
      getPosts();
    } else {
      getPresents();
    }
  }, [type]);

  return {
    postSenderData,
    postReceiverData,
    presentSenderData,
    presentReceiverData,
  };
}
