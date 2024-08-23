'use client';

import { useAtom, useAtomValue } from 'jotai';
import * as S from '../my-page-index-modal/style';
import { isLikeModalAtom, userDataAtom } from '@/states/userAtoms';
import { useEffect, useState } from 'react';
import LEGENDS from '@/app/api/legends';
import { userHeartLegendType } from '@/types/legend';
import { useRouter } from 'next/navigation';
import { IMAGE } from '@/utils/image';

export default function LikeModal() {
  const userNo = Number(localStorage.getItem('userNo'));
  const router = useRouter();
  const [isLikeModal, setIsLikeModal] = useAtom(isLikeModalAtom);
  const [viewType, setViewType] = useState<'receiverNo' | 'senderNo'>(
    'receiverNo',
  );
  const [likeListData, setLikeListData] = useState<
    userHeartLegendType[] | null
  >(null);
  const getLikeLegends = async () => {
    const response = await LEGENDS.getLikeLegends(userNo, viewType);
    setLikeListData(response.data);
  };

  useEffect(() => {
    getLikeLegends();
  }, [viewType]);

  return (
    <>
      {likeListData && (
        <>
          <S.MenuModalBackground>
            <S.MenuModalBody width="30vw">
              <S.DisplayDiv $justifyContent="end">
                <S.Font
                  $fontSize="1.5vw"
                  color="#7F7F7F"
                  $margin="0.8vw 1vw 0 0"
                  cursor="pointer"
                  onClick={() => setIsLikeModal(false)}>
                  x
                </S.Font>
              </S.DisplayDiv>
              <S.DisplayDiv
                $justifyContent="center"
                $alignItems="center"
                $margin="0.8vw 0 1.5vw 0">
                <S.Font
                  color="#454545"
                  $fontSize="18px"
                  $margin="0 3.2vw 0 0"
                  cursor="pointer"
                  onClick={() => setViewType('receiverNo')}>
                  받은 좋아요 (30)
                </S.Font>
                <S.Font
                  color="#454545"
                  $fontSize="18px"
                  cursor="pointer"
                  onClick={() => setViewType('senderNo')}>
                  보낸 좋아요 (30)
                </S.Font>
              </S.DisplayDiv>
              <S.Hr $margin={viewType} />

              <S.DisplayDiv $justifyContent="center" $alignItems="center">
                <S.LikeListSection>
                  {likeListData?.map((item) => (
                    <S.LikeListContainer key={item.no}>
                      <S.UserImg
                        src={
                          viewType === 'receiverNo'
                            ? item?.sender?.image
                            : item?.receiver?.image
                        }
                        width="3vw"
                        $margin="0 0 0 1.1vw"
                        $border="2px solid #fff"
                      />
                      <S.Img
                        width="1vw"
                        $margin="0 0.5vw 0 1vw"
                        src={IMAGE.heart}
                        alt=""
                      />
                      <S.Font $fontSize="12px" color="#454545" width="12vw">
                        {viewType === 'receiverNo'
                          ? `${item?.sender?.nickname} 님께 좋아요를 받았습니다.`
                          : `${item?.receiver?.nickname} 님께 좋아요를 보냈습니다.`}
                      </S.Font>
                      <S.GoToRoomButton
                        onClick={() =>
                          router.push(
                            `/previewVillageUsers/${viewType === 'receiverNo' ? item?.sender?.no : item?.receiver?.no}`,
                          )
                        }>
                        방 보러가기
                      </S.GoToRoomButton>
                    </S.LikeListContainer>
                  ))}
                </S.LikeListSection>
              </S.DisplayDiv>
            </S.MenuModalBody>
          </S.MenuModalBackground>
        </>
      )}
    </>
  );
}
