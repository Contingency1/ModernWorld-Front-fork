'use client';

import SHOP from '@/app/api/shop';
import * as S from '@/components/my-page/contents/inventory/style';
import {
  charactersTypeAtom,
  isModalOpenAtom,
  selectItemTypeAtom,
  themeTypeAtom,
} from '@/states/shopAtoms';
import { ShopDataType } from '@/types/shop';
import { useAtom, useAtomValue } from 'jotai';
import { useEffect, useState } from 'react';
import ItemClickModal from './ItemClickModal';

export default function ShopItemBox() {
  const [items, setItems] = useState([]);
  const [characters, setCharacters] = useState([]);
  const selectItemType = useAtomValue(selectItemTypeAtom);
  const theme = useAtomValue(themeTypeAtom);
  const character = useAtomValue(charactersTypeAtom);

  const [isModalOpen, setIsModalOpen] = useAtom(isModalOpenAtom);
  const [modalNo, setModalNo] = useState<number | null>(null);

  const getCharacter = async (character: string) => {
    const response = await SHOP.getCharacters(character);
    setCharacters(response);
  };

  const getItems = async (theme: string) => {
    const response = await SHOP.getItems(theme);
    setItems(response);
  };

  const handleItemClick = (no: number) => {
    setIsModalOpen(true);
    setModalNo(no);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalNo(null);
  };

  useEffect(() => {
    if (selectItemType === 0) {
      getItems(theme);
    } else {
      getCharacter(character);
    }
  }, [selectItemType, theme, character]);

  return (
    <>
      {isModalOpen && modalNo !== null && <ItemClickModal no={modalNo} />}
      <S.BookMarkBox height="65vh" $backColor="#F5F0E2">
        {(selectItemType === 0 ? items : characters).map((i: ShopDataType) => (
          <S.ItemDiv key={i.no} onClick={() => handleItemClick(i.no)}>
            <S.Img img={i.image} />
          </S.ItemDiv>
        ))}
        {[
          ...Array(
            12 - (selectItemType === 0 ? items.length : characters.length),
          ),
        ].map((_, index) => (
          <S.ItemDiv key={`null-${index}`}></S.ItemDiv>
        ))}
      </S.BookMarkBox>
    </>
  );
}
