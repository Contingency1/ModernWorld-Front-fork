import MAILBOX from '@/app/api/mailBox';
import * as S from '@/components/my-page/contents/mail-box/style';
import {
  receiverDataAtom,
  senderDataAtom,
  viewSendPageAtom,
  viewReceiverPageAtom,
  listSetAtom,
} from '@/states/mailboxAtoms';
import { useAtom, useAtomValue } from 'jotai';
import { useEffect } from 'react';

export default function PostInfo(props: { title: string }) {
  const page = useAtomValue(
    props.title.includes('보낸') ? viewSendPageAtom : viewReceiverPageAtom,
  );
  const senderData = useAtomValue(senderDataAtom);
  const receiverData = useAtomValue(receiverDataAtom);
  const [list, setList] = useAtom(listSetAtom);

  const setPostCheck = async (no: number) => {
    if (no) {
      await MAILBOX.setPostCheck(no);
      setList(!list);
    }
  };

  useEffect(() => {
    if (props.title.includes('보낸')) {
      setPostCheck(senderData[page]?.no);
    } else {
      setPostCheck(receiverData[page]?.no);
    }
  }, [props.title, page]);

  return (
    <>
      <S.ContentsView height="25vh">
        <S.ListScroll>
          <S.MarginDiv fontSize="18px" margin="3vh 2vw" textAlign="left">
            {props.title.includes('보낸')
              ? senderData[page]?.content
              : receiverData[page]?.content}
          </S.MarginDiv>
        </S.ListScroll>
        <S.MarginDiv
          fontSize="18px"
          margin="1vh 2vw 0 2vw"
          textAlign="left"
          color="#767676">
          {props.title.includes('보낸')
            ? senderData[page]?.createdAt
            : receiverData[page]?.createdAt}
        </S.MarginDiv>
        <hr style={{ width: '90%', borderTop: '1px dashed' }} />
        <S.MarginDiv margin="-1vh 2vw 0 0" textAlign="right">
          <img
            src="https://wang0514.s3.ap-northeast-2.amazonaws.com/page/trash.png"
            alt="del"
            width="33vw"
          />
        </S.MarginDiv>
      </S.ContentsView>
    </>
  );
}
