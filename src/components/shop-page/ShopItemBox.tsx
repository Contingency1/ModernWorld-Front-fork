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
  const [modalData, setModalData] = useState<null | any>(null);
  const [designer, setDesigner] = useState('');

  const getCharacter = async (character: string) => {
    const response = await SHOP.getCharacters(character);
    setCharacters(response);
  };

  const getItems = async (theme: string) => {
    const response = await SHOP.getItems(theme);
    setItems(response);
  };

  const handleItemClick = (data: ShopDataType) => {
    setIsModalOpen(true);
    setModalData(data);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalNo(null);
  };

  useEffect(() => {
    switch (theme) {
      case '여름 테마':
        setDesigner('이채영');
        break;
      case '봄 테마':
        setDesigner('이채영');
        break;
      case '겨울 테마':
        setDesigner('박경후');
        break;
      case '가을 테마':
        setDesigner('조영은');
    }
  }, [theme]);

  useEffect(() => {
    if (selectItemType === 0) {
      getItems(theme);
    } else {
      getCharacter(character);
    }
    setIsModalOpen(false);
  }, [selectItemType, theme, character]);

  return (
    <>
      {isModalOpen && <ItemClickModal data={modalData} type={selectItemType} />}
      <S.BookMarkBox height="65vh" $backColor="#F5F0E2">
        {(selectItemType === 0 ? items : characters).map((i: ShopDataType) => (
          <S.ItemDiv key={i.no} onClick={() => handleItemClick(i)}>
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
        {!selectItemType && (
          <S.DesignerName>디자인 : {designer} 님</S.DesignerName>
        )}
      </S.BookMarkBox>
    </>
  );
}
