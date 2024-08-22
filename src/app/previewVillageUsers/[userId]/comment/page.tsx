'use client';

import { Comment } from '@/components/village-page/comment/Comment';
import '../../../../style/globals.css';
import Reply from '@/components/village-page/comment/reply/Reply';
import { useAtomValue } from 'jotai';
import { ModalStateAtom } from '@/states/reply';

export default function commentPage({
  params,
}: {
  params: { userId: number };
}) {
  const modalState = useAtomValue(ModalStateAtom);

  return (
    <>
      <Comment></Comment>
      {modalState ? <Reply userId={params.userId}></Reply> : <></>}
    </>
  );
}
