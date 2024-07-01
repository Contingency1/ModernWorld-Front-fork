'use client';

import * as S from '@/components/my-page/contents/inventory/style';
import { useAtom } from 'jotai';
import { themeAtom, userItemAtom } from '@/states/itemAtoms';
import { useEffect, useState } from 'react';
import INVENTORY from '@/app/api/inventory';

interface Item {
  no: number;
  itemNo: number;
  status: boolean;
  item: {
    image: string;
  };
}

export default function InventoryItemBox() {
  const [status, setStatus] = useState(true);
  const [theme] = useAtom<string>(themeAtom);
  const [userItem, setUserItem] = useAtom(userItemAtom);

  const getInventoryItem = async () => {
    const response = await INVENTORY.getInventoryItem(1, theme);
    setUserItem(response);
    setStatus(!status);
  };

  useEffect(() => {
    getInventoryItem();
  }, [theme, status]);

  return (
    <>
      <S.BookMarkBox height="65vh" backColor="#e9eff1">
        {userItem.map((i: any) => (
          <div
            key={i.no}
            onClick={(e) => {
              INVENTORY.setItemStatus(i.itemNo, i.status);
            }}
            style={{ cursor: 'pointer' }}>
            <S.ItemDiv key={i.no}>
              {i.status ? (
                <S.StatusCheck color="#5A61E6" />
              ) : (
                <S.StatusCheck color="#EC4A4A" />
              )}
              <S.Img img={i.item.image} />
            </S.ItemDiv>
          </div>
        ))}
        {[...Array(12 - userItem.length)].map((_, index) => (
          <S.ItemDiv key={`null-${index}`}></S.ItemDiv>
        ))}
      </S.BookMarkBox>
    </>
  );
}
