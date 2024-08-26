'use client';

import * as S from './style';
import { useAtom, useAtomValue, useSetAtom } from 'jotai';
import { isNeighborSendModalAtom, pageViewTypeAtom } from '@/states/neighbor';
import NEIGHBOR from '@/app/api/neighbor';
import { sendMailDataAtom } from '@/states/mailboxAtoms';
import { useRouter } from 'next/navigation';

export default function UserListItem(props: any) {
  console.log(props);
  const setIsSendMailModal = useSetAtom(isNeighborSendModalAtom);
  const [sendMailModalData, setSendMailModalData] = useAtom(sendMailDataAtom);
  const pageViewType = useAtomValue(pageViewTypeAtom);
  const router = useRouter();

  const handleModal = () => {
    setIsSendMailModal(true);
    setSendMailModalData({
      no: props.userData.neighbor.no,
      nickname: props.userData.neighbor.nickname,
    });
  };

  const acceptNeighborRequest = () => {
    NEIGHBOR.acceptNeighborRequest(props.userData.no);
  };
  const deleteNeighborRequest = () => {
    NEIGHBOR.deleteNeighborRequest(props.userData.no);
  };

  const getColor = () => {
    const achievementLevel =
      props.userData.neighbor.userAchievement[0]?.achievement?.level;

    const colorObj: Record<string, string> = {
      one: '#B8860B',
      two: '#006400',
      three: '#65000B',
    };

    return colorObj[achievementLevel] ?? '';
  };

  return props.userData ? (
    <>
      <S.UserImg src={props.userData.neighbor.image}></S.UserImg>
      <S.FontSection>
        <S.RowDiv>
          <S.Font $fontSize="24px">{props.userData.neighbor.nickname}</S.Font>
          <S.Font color={getColor()} $fontSize="16px" $margin="0 0 0 0.3vw">
            {props.userData.neighbor.userAchievement[0]?.achievement?.title
              ? `(${props.userData.neighbor.userAchievement[0]?.achievement?.title})`
              : '(-)'}
          </S.Font>
        </S.RowDiv>
        <S.Font $fontSize="18px" $margin="1vw 0 0 0">
          {props.userData.neighbor.description}
        </S.Font>
      </S.FontSection>
      <S.ColumnSection>
        {pageViewType === 'list' ? (
          <>
            <S.Button onClick={handleModal}>편지 보내기</S.Button>
            <S.Button
              onClick={() =>
                router.push(
                  `/previewVillageUsers/${props.userData.neighbor.no}`,
                )
              }>
              방 보러가기
            </S.Button>
          </>
        ) : (
          <>
            <S.Button onClick={acceptNeighborRequest}>친구 수락</S.Button>
            <S.Button onClick={deleteNeighborRequest}>친구 거절</S.Button>
          </>
        )}
      </S.ColumnSection>
    </>
  ) : (
    <></>
  );
}
