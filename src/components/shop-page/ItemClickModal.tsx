import { IMAGE } from '@/utils/image';
import * as S from './style';
import { useSetAtom } from 'jotai';
import { isModalOpenAtom } from '@/states/shopAtoms';
import { useEffect, useState } from 'react';
import SHOP from '@/app/api/shop';

export default function ItemClickModal(props: { no: number }) {
  const setIsModal = useSetAtom(isModalOpenAtom);
  const [userClickType, setUserClickType] = useState<'buy' | 'gift' | null>(
    null,
  );

  // const buyItem = async (no: number) => {
  //   await SHOP.buyItem(no);
  // };

  // const buyCharacter = async (no: number) => {
  //   await SHOP.buyCharacter(no);
  // };

  // const giftItemToUser = async (userNo: any, itemNo: number) => {
  //   await SHOP.giftItemToUser(userNo, itemNo);
  // };

  // useEffect(()=> {
  //   if (userClickType === 'buy') {

  //   }
  // },[userClickType])

  return (
    <>
      <S.ItemClickBackground>
        <S.Font
          $fontSize="30px"
          position="fixed"
          $margin="0 -56vw 29vw 0"
          cursor="pointer"
          onClick={() => setIsModal(false)}>
          x
        </S.Font>
        <S.ItemContainer>
          <S.Img src={IMAGE.pencil} width="70%"></S.Img>
        </S.ItemContainer>
        <S.Font $fontSize="26px" $margin="2vw 0 1vw 0">
          모나리자 그림 (100p)
        </S.Font>
        <S.Font $fontSize="20px">모나리자에 표정이 생긴 모양이다</S.Font>
        <S.DisplayDiv
          $flexDirection="row"
          $justifyContent="center"
          $alignItems="center">
          <S.Button
            $backColor="#FF7070"
            onClick={() => setUserClickType('buy')}>
            구매하기
          </S.Button>
          <S.Button
            $backColor="#FFB1B1"
            onClick={() => setUserClickType('gift')}>
            선물하기
          </S.Button>
        </S.DisplayDiv>
      </S.ItemClickBackground>
    </>
  );
}
