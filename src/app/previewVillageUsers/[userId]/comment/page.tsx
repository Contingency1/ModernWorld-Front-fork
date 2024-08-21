import { Comment } from '@/components/village-page/comment/Comment';
import '../../../../style/globals.css';
import { Reply } from '@/components/village-page/comment/reply/Reply';

export default function commentPage() {
  return (
    <>
      <Comment></Comment>
      <Reply></Reply>
    </>
  );
}
