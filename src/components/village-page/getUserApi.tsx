'use client';

import { useEffect } from 'react';
import * as S from '@/components/village-page/styled';
import { atom, useAtom } from 'jotai';
import { VILLAGE } from '@/app/api/village';
import { VillageData } from '@/types/village';
import {
  currentPageAtom,
  searchValue,
  sortStateAtom,
  villageUsersArrayAtom,
} from '@/states/village';
import { useRouter } from 'next/navigation';

export default function GetUserApi(props: { animal: string }) {
  const [villageUsersArray, setVillageUsersArary] = useAtom(
    villageUsersArrayAtom,
  );
  const [currentPage] = useAtom(currentPageAtom);
  const [sortState] = useAtom(sortStateAtom);
  const [keyword] = useAtom(searchValue);
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
          {e.nickname}
          <S.UserHeart>
            <img src="https://wang0514.s3.ap-northeast-2.amazonaws.com/page/heartPicture.png" />
            {e.legend?.likeCount}
            <> point : {e.accumulationPoint}</>
          </S.UserHeart>
          <S.UserName>{e.nickname}</S.UserName>
        </S.UserBox>
      ))}
    </>
  );
}

export const animal = atom('');
