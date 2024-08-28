import MAILBOX from '@/app/api/mailBox';
import * as S from '@/components/my-page/contents/mail-box/style';
import {
  receiverDataAtom,
  senderDataAtom,
  viewSendPageAtom,
  viewReceiverPageAtom,
  isSendMailModalAtom,
  sendMailDataAtom,
} from '@/states/mailboxAtoms';
import { getFormattedDate } from '@/utils/date';
import { IMAGE } from '@/utils/image';
import { useAtom, useAtomValue } from 'jotai';
import { useEffect, useState } from 'react';

export default function PostInfo(props: { title: string }) {
  const page = useAtomValue(
    props.title.includes('보낸') ? viewSendPageAtom : viewReceiverPageAtom,
  );
  const senderData = useAtomValue(senderDataAtom);
  const receiverData = useAtomValue(receiverDataAtom);
  const [sendPostNo, setSendPostNo] = useState(senderData[page]?.no);
  const [receivePostNo, setReceivePostNo] = useState(receiverData[page]?.no);
  const [isSendMailModal, setIsSendMailModal] = useAtom(isSendMailModalAtom);
  const [sendMailData, setSendMailData] = useAtom(sendMailDataAtom);

  const handleClickDelete = () => {
    const postNo = props.title.includes('보낸') ? sendPostNo : receivePostNo;
    if (postNo) {
      MAILBOX.delPost(postNo);
    }
  };

  const handleClickModal = () => {
    setIsSendMailModal(true);
    if (props.title.includes('받은 편지')) {
      setSendMailData(receiverData[page].userPostSenderNo);
    } else if (props.title.includes('보낸 편지')) {
      setSendMailData(senderData[page].userPostReceiverNo);
    }
  };

  const setPostCheck = async (no: number) => {
    if (no) {
      await MAILBOX.setPostCheck(no);
    }
  };

  useEffect(() => {
    if (props.title.includes('보낸')) {
      setSendPostNo(senderData[page]?.no);
      setPostCheck(sendPostNo);
    } else {
      setReceivePostNo(receiverData[page]?.no);
      setPostCheck(receivePostNo);
    }
  }, [props.title, page, senderData, receiverData, isSendMailModal]);

  if (props.title.includes('보낸')) {
    if (!senderData.length) return <></>;
  } else if (!receiverData.length) {
    return <></>;
  }
  return (
    <>
      <S.ContentsView height="25vh">
        <S.ListScroll>
          <S.MarginDiv $fontSize="18px" $margin="3vh 2vw" $textAlign="left">
            {props.title.includes('보낸')
              ? senderData[page]?.content
              : receiverData[page]?.content}
          </S.MarginDiv>
        </S.ListScroll>
        <S.MarginDiv
          $fontSize="18px"
          $margin="1vh 2vw 0 2vw"
          $textAlign="left"
          color="#767676">
          {getFormattedDate(
            props.title.includes('보낸')
              ? senderData[page]?.createdAt
              : receiverData[page]?.createdAt,
          )}
        </S.MarginDiv>
        <hr style={{ width: '90%', borderTop: '1px dashed' }} />
        <S.MarginDiv $margin="-1vh 2vw 0 0" $textAlign="right">
          <S.ReceiverMailFooter>
            <S.MarginDiv
              onClick={() => handleClickModal()}
              $fontSize="18px"
              $margin="0 0 0.2vw 2.5vw"
              color="#3A3EA0"
              cursor="pointer">
              {props.title.includes('받은 편지') ? '답장하기' : '다시 보내기'}
            </S.MarginDiv>
            <S.Image
              src={IMAGE.trashBox}
              alt="del"
              width="33vw"
              onClick={handleClickDelete}
            />
          </S.ReceiverMailFooter>
        </S.MarginDiv>
      </S.ContentsView>
    </>
  );
}
