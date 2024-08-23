'use client';

import { useEffect, useState } from 'react';
import * as S from '@/components/village-page/styled';
import { atom, useAtom, useAtomValue, useSetAtom } from 'jotai';
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
import { useDebounce } from '@uidotdev/usehooks';
import Image from 'next/image';

export default function GetUserApi(props: { animal: string }) {
  const [villageUsersArray, setVillageUsersArary] = useAtom(
    villageUsersArrayAtom,
  );
  const { currentPage, sortState, keyword, route } = {
    currentPage: useAtomValue(currentPageAtom),
    sortState: useAtomValue(sortStateAtom),
    keyword: useAtomValue(searchValue),
    route: useRouter(),
  };
  const setPages = useSetAtom(PagesAtom);
  const debounceSearchValue = useDebounce(keyword, 1000);

  async function getUser() {
    const response = await VILLAGE.getVillageUser({
      page: currentPage,
      take: 8,
      animal: props.animal,
      orderByField: sortState,
      nickname: debounceSearchValue,
    });
    setVillageUsersArary(response.data);
    setPages({ page: response.meta.page, totalPage: response.meta.totalPage });
  }

  useEffect(() => {
    getUser();
  }, [sortState, debounceSearchValue, currentPage]);

  return (
    <>
      {villageUsersArray.map((e: VillageData) => (
        <S.UserBox
          key={e.nickname}
          onClick={() => route.push(`/previewVillageUsers/${e.no}`)}>
          <S.UserCharacter>
            <S.UserCharacterImgDiv>
              <Image
                fill
                alt="유저 캐릭터 이미지"
                src={e.characterLocker[0]?.character.image}
              />
            </S.UserCharacterImgDiv>
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
