'use client';

import { useEffect } from 'react';
import * as S from '@/components/village-page/styled';
import { atom, useAtom } from 'jotai';
import { VILLAGE } from '@/app/api/village';
import { VillageData } from '@/types/village';
import Link from 'next/link';
import {
  currentPageAtom,
  searchValue,
  sortStateAtom,
  villageUsersArrayAtom,
} from '@/states/village';

export default function GetUserApi(props: { animal: string }) {
  const [villageUsersArray, setVillageUsersArary] = useAtom(
    villageUsersArrayAtom,
  );
  const [currentPage] = useAtom(currentPageAtom);
  const [sortState] = useAtom(sortStateAtom);
  const [keyword] = useAtom(searchValue);

  async function getUser() {
    const response = await VILLAGE.getVillageUser({
      page: currentPage,
      take: 8,
      animal: props.animal,
      orderByField: sortState,
      nickname: keyword,
    });
    setVillageUsersArary(response.data);
  }

  useEffect(() => {
    getUser();
  }, [sortState, keyword, currentPage]);

  return (
    <>
      {villageUsersArray.map((e: VillageData) => (
        <S.UserBox key={e.nickname}>
          <S.UserCharacter>
            <Link href="/previewVillageUsers">
              <img src={e.characterLocker[0]?.character.image} />
            </Link>
          </S.UserCharacter>
          {e.nickname}
          <S.UserHeart>
            <Link href="" style={{ textDecoration: 'none' }}>
              <img src="https://wang0514.s3.ap-northeast-2.amazonaws.com/page/heartPicture.png" />
              {e.legend?.likeCount}
              <> point : {e.accumulationPoint}</>
            </Link>
          </S.UserHeart>
          <S.UserName>{e.nickname}</S.UserName>
        </S.UserBox>
      ))}
    </>
  );
}

export const animal = atom('');
