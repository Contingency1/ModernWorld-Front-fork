'use client';

import { isSendMailModalAtom, sendMailDataAtom } from '@/states/mailboxAtoms';
import * as S from './style';
import { useAtomValue, useSetAtom } from 'jotai';
import { useState } from 'react';
import MAILBOX from '@/app/api/mailBox';
import { isNeighborSendModalAtom } from '@/states/neighbor';
import { IMAGE } from '@/utils/image';

export default function SendPostModal() {
  const setIsSendMailModal = useSetAtom(isSendMailModalAtom);
  const setIsNeighborSendMailModal = useSetAtom(isNeighborSendModalAtom);
  const sendMailData = useAtomValue(sendMailDataAtom);
  const [contents, setContents] = useState('');

  const onChangeHandle = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContents(event.target.value);
  };

  const onClickExit = () => {
    setIsSendMailModal(false);
    setIsNeighborSendMailModal(false);
  };

  const sendMail = async () => {
    if (sendMailData && contents) {
      await MAILBOX.createPost(sendMailData?.no, contents);
    } else {
      alert('편지 내용을 적어주세요!');
    }
    setIsSendMailModal(false);
    setIsNeighborSendMailModal(false);
  };

  return (
    <>
      {sendMailData ? (
        <S.PageDark>
          <S.SendPostModalBody>
            <S.SendPostModalHeader>
              <S.Img
                src={IMAGE.remove}
                width="1.5vw"
                $margin="1vw"
                cursor="pointer"
                onClick={() => onClickExit()}
              />
            </S.SendPostModalHeader>
            <S.SendPostModalTitle>
              <S.Img src={IMAGE.mail} width="1.5vw" $margin="1vw" />
              <S.Font $fontSize="20px" $margin="0 0.5vw">
                {sendMailData?.nickname} 님께 보내는 편지
              </S.Font>
            </S.SendPostModalTitle>
            <S.InputContainer
              placeholder="편지를 남겨주세요!"
              onChange={onChangeHandle}></S.InputContainer>
            <S.TextCounterContainer>
              <S.Font
                $fontSize="16px"
                color={contents.length < 100 ? '#3B3B3B' : '#FF5454'}>
                {contents.length}/100자
              </S.Font>
            </S.TextCounterContainer>
            <S.SendPostModalFooter onClick={sendMail}>
              <S.Font $fontSize="20px" cursor="pointer" $margin="0 0.5vw">
                전송하기
              </S.Font>
              <S.Img
                src={IMAGE.send}
                width="2vw"
                cursor="pointer"
                $margin="0 0.5vw 0 0"
              />
            </S.SendPostModalFooter>
          </S.SendPostModalBody>
        </S.PageDark>
      ) : (
        <></>
      )}
    </>
  );
}
