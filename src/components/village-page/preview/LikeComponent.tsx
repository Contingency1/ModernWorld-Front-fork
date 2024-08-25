'use client';

import USER from '@/app/api/user';
import * as S from '@/components/village-page/preview/style';
import { IMAGE } from '@/utils/image';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import GetHearLegendtModal from './modal/GetHeartLegendModal';

const LikeComponent = ({ userNo }: { userNo: number }) => {
  const [like, setLike] = useState(0);
  const [likeState, setLikeState] = useState(false);
  const [isModal, setIsModal] = useState(false);

  async function sendLike(userNo: number) {
    const response = await USER.sendLike(userNo);
    if (response === 409) {
      cancelLike(userNo);
    }
    setLikeState(true);
  }

  async function cancelLike(userNo: number) {
    await USER.unLike(userNo);
    setLikeState(false);
  }

  useEffect(() => {
    async function getLike(userNo: number) {
      const response = await USER.getUserInfo(userNo);
      setLike(response.legend.likeCount);
    }
    getLike(userNo);
  }, [likeState]);

  const closeModal = () => {
    setIsModal(false);
  };

  return (
    <>
      <S.MenuButtonDiv width="15vw" $marginLeft="15%">
        <S.ImgStyle
          $marginRight="5%"
          width="20px"
          height="20px"
          onClick={() => {
            !likeState ? sendLike(userNo) : cancelLike(userNo);
          }}>
          <Image
            src={IMAGE.heart}
            alt={'좋아요'}
            fill
            sizes="(max-width : 20px) 100vw"></Image>
        </S.ImgStyle>
        좋아요{' '}
        <div
          onClick={() => {
            setIsModal(true);
          }}
          style={{ marginLeft: '10px' }}>
          {like}
        </div>
      </S.MenuButtonDiv>
      {isModal && (
        <GetHearLegendtModal
          userNo={userNo}
          isModal={isModal}
          closeModal={closeModal}
        />
      )}
    </>
  );
};

export default LikeComponent;
