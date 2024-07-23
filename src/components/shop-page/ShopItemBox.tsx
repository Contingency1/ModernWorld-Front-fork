'use client';

import SHOP from '@/app/api/shop';
import * as S from '@/components/my-page/contents/inventory/style';
import {
  charactersTypeAtom,
  selectItemTypeAtom,
  themeTypeAtom,
} from '@/states/shopAtoms';
import { ShopDataType } from '@/types/shop';
import { useAtom, useAtomValue } from 'jotai';
import { useEffect, useState } from 'react';

export default function ShopItemBox() {
  const [items, setItems] = useState([]);
  const [characters, setCharacters] = useState([]);
  const selectItemType = useAtomValue(selectItemTypeAtom);
  const theme = useAtomValue(themeTypeAtom);
  const character = useAtomValue(charactersTypeAtom);

  const getCharacter = async (character: string) => {
    const response = await SHOP.getCharacters(character);
    setCharacters(response);
  };

  const getItems = async (theme: string) => {
    const response = await SHOP.getItems(theme);
    setItems(response);
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
      <S.BookMarkBox height="65vh" $backColor="#F5F0E2">
        {(selectItemType === 0 ? items : characters).map((i: ShopDataType) => (
          <S.ItemDiv key={i.no}>
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

/*<>
      <S.BookMarkBox height="65vh" $backColor="#e9eff1">
        {(selectedType === 'objects' ? userItem : userCharacter).map(
          (i: InventoryItemType) => (
            <div
              key={i.no}
              onClick={(e) => {
                selectedType === 'objects'
                  ? setItemStatus(i.itemNo, i.status)
                  : setCharacterStatus(i.characterNo, i.status);
              }}
              style={{ cursor: 'pointer' }}>
              <S.ItemDiv key={i.no}>
                {i.status ? (
                  <S.StatusCheck color="#5A61E6" />
                ) : (
                  <S.StatusCheck color="#EC4A4A" />
                )}
                <S.Img
                  img={
                    selectedType === 'objects'
                      ? i.item.image
                      : i.character.image
                  }
                />
              </S.ItemDiv>
            </div>
          ),
        )}
        {[
          ...Array(
            12 -
              (selectedType === 'objects'
                ? userItem.length
                : userCharacter.length),
          ),
        ].map((_, index) => (
          <S.ItemDiv key={`null-${index}`}></S.ItemDiv>
        ))}
      </S.BookMarkBox>
    </>*/
