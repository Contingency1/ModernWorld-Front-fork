import MAILBOX from '@/app/api/mailBox';
import * as S from '@/components/my-page/contents/mail-box/style';
import {
  receiverDataAtom,
  senderDataAtom,
  viewSendPageAtom,
  viewReceiverPageAtom,
} from '@/states/mailboxAtoms';
import { useAtomValue } from 'jotai';
import { useEffect, useRef, useState } from 'react';

export default function PostInfo(props: { title: string }) {
  const page = useAtomValue(
    props.title.includes('보낸') ? viewSendPageAtom : viewReceiverPageAtom,
  );
  const senderData = useAtomValue(senderDataAtom);
  const receiverData = useAtomValue(receiverDataAtom);
  const [sendPostNo, setSendPostNo] = useState(senderData[page]?.no);
  const [receivePostNo, setReceivePostNo] = useState(receiverData[page]?.no);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [reply, setReply] = useState(null);

  const handleClickDelete = () => {
    const postNo = props.title.includes('보낸') ? sendPostNo : receivePostNo;
    if (postNo) {
      MAILBOX.delPost(postNo);
    }
  };

  const sendPost = async () => {
    setReply(null);
    setPostUi(
      <S.Image
        src="https://wang0514.s3.ap-northeast-2.amazonaws.com/page/trash.png"
        alt="del"
        width="33vw"
        onClick={handleClickDelete}
      />,
    );
    createPost();
  };

  const [postUi, setPostUi] = useState(
    <S.Image
      src="https://wang0514.s3.ap-northeast-2.amazonaws.com/page/trash.png"
      alt="del"
      width="33vw"
      onClick={handleClickDelete}
    />,
  );

  const setPostCheck = async (no: number) => {
    if (no) {
      await MAILBOX.setPostCheck(no);
    }
  };

  const onClickHandle = () => {
    setPostUi(
      <S.Image
        src="https://wang0514.s3.ap-northeast-2.amazonaws.com/page/free-icon-edit-button-7734280.png"
        alt="post"
        width="33vw"
        onClick={sendPost}
      />,
    );
    setReply('답장을 보내보세요!');
  };

  useEffect(() => {
    if (props.title.includes('보낸')) {
      setSendPostNo(senderData[page]?.no);
      setPostCheck(sendPostNo);
    } else {
      setReceivePostNo(receiverData[page]?.no);
      setPostCheck(receivePostNo);
    }
  }, [props.title, page, senderData, receiverData]);

  const createPost = async () => {
    const content = textareaRef.current?.value || '';
    await MAILBOX.createPost(receiverData[page].userPostSenderNo.no, content);
  };

  return (
    <>
      <S.ContentsView height="25vh">
        <S.ListScroll>
          <S.MarginDiv fontSize="18px" margin="3vh 2vw" textAlign="left">
            {props.title.includes('보낸') ? (
              senderData[page]?.content
            ) : (
              <div onClick={onClickHandle}>
                <S.PostTextarea
                  ref={textareaRef}
                  defaultValue={receiverData[page]?.content}
                />
              </div>
            )}
          </S.MarginDiv>
        </S.ListScroll>
        <S.MarginDiv
          fontSize="18px"
          margin="1vh 2vw 0 2vw"
          textAlign="left"
          color="#767676">
          {props.title.includes('보낸')
            ? senderData[page]?.createdAt
            : reply
              ? reply
              : receiverData[page]?.createdAt}
        </S.MarginDiv>
        <hr style={{ width: '90%', borderTop: '1px dashed' }} />
        <S.MarginDiv margin="-1vh 2vw 0 0" textAlign="right">
          {postUi}
        </S.MarginDiv>
      </S.ContentsView>
    </>
  );
}
