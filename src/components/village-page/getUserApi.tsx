'use client';

import { useEffect, useState } from 'react';
import * as S from '@/components/village-page/styled';
import { atom, useAtom, useSetAtom } from 'jotai';
import { VILLAGE } from '@/app/api/village';
import { VillageData } from '@/types/village';
import {
  currentPageAtom,
  PagesAtom,
  searchValue,
  sortStateAtom,
  villageUsersArrayAtom,
} from '@/states/village';
import { useRouter } from 'next/navigation';
import { IMAGE } from '@/utils/image';

export default function GetUserApi(props: { animal: string }) {
  const [villageUsersArray, setVillageUsersArary] = useAtom(
    villageUsersArrayAtom,
  );
  const [currentPage] = useAtom(currentPageAtom);
  const [sortState] = useAtom(sortStateAtom);
  const [keyword] = useAtom(searchValue);
  const setPages = useSetAtom(PagesAtom);
  const route = useRouter();

  async function getUser() {
    const response = await VILLAGE.getVillageUser({
      page: currentPage,
      take: 8,
      animal: props.animal,
      orderByField: sortState,
      nickname: keyword,
    });
    setVillageUsersArary(response.data);
    setPages({ page: response.meta.page, totalPage: response.meta.totalPage });
  }

  useEffect(() => {
    getUser();
  }, [sortState, keyword, currentPage]);

  return (
    <>
      {villageUsersArray.map((e: VillageData) => (
        <S.UserBox
          key={e.nickname}
          onClick={() => route.push(`/previewVillageUsers/${e.no}`)}>
          <S.UserCharacter>
            <img src={e.characterLocker[0]?.character.image} />
          </S.UserCharacter>
          <S.ShowUserNickname>{e.nickname}</S.ShowUserNickname>
          <S.ShowUserHeartDiv>
            <S.UserHeart>
              <img src={IMAGE.heart} />
            </S.UserHeart>
            {e.legend?.likeCount} / point:{e.accumulationPoint}
          </S.ShowUserHeartDiv>
        </S.UserBox>
      ))}
    </>
  );
}

export const animal = atom('');
