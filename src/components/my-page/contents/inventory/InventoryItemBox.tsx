'use client';

import * as S from '@/components/my-page/contents/inventory/style';
import { useAtom } from 'jotai';
import { userCharacterChangeAtom } from '@/states/userAtoms';
import {
  themeAtom,
  characterTypeAtom,
  selectedTypeAtom,
} from '@/states/inventoryAtoms';
import { useEffect, useState } from 'react';
import INVENTORY from '@/app/api/inventory';
import { InventoryItemType } from '@/types/inventory';

export default function InventoryItemBox() {
  const [statusView, setStatusView] = useState<string>('착용');
  const [theme] = useAtom<string>(themeAtom);
  const [userItem, setUserItem] = useState<any>([]);
  const [userCharacter, setUserCharacter] = useState<any>([]);
  const [characterType] = useAtom<string>(characterTypeAtom);
  const [userCharacterChange, setUserCharacterChange] = useAtom<boolean>(
    userCharacterChangeAtom,
  );
  const [selectedType] = useAtom<string>(selectedTypeAtom);

  const getInventoryItem = async () => {
    const response = await INVENTORY.getInventoryItem(1, theme);
    setUserItem(response);
  };

  const getInventoryCharacter = async () => {
    const response = await INVENTORY.getInventoryCharacter(1, characterType);
    setUserCharacter(response);
  };

  const setItemStatus = async (no: number, status: boolean) => {
    await INVENTORY.setItemStatus(no, status);
    statusView === '착용' ? setStatusView('미착용') : setStatusView('착용');
  };

  const setCharacterStatus = async (no: number, status: boolean) => {
    await INVENTORY.setCharacterStatus(no, status);
    setUserCharacterChange(!userCharacterChange);
    statusView === '착용' ? setStatusView('미착용') : setStatusView('착용');
  };

  const dynamicFetch = async () => {
    if (selectedType === 'objects') {
      await getInventoryItem();
    } else {
      await getInventoryCharacter();
    }
  };

  useEffect(() => {
    dynamicFetch();
  }, [selectedType, statusView, theme, characterType]);

  return (
    <>
      <S.BookMarkBox height="65vh" backColor="#e9eff1">
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
    </>
  );
}
