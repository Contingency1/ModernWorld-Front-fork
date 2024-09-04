'use client';

import { useEffect } from 'react';
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

  useEffect(() => {
    async function getUser() {
      const response = await VILLAGE.getVillageUser({
        page: currentPage,
        take: 8,
        animal: props.animal,
        orderByField: sortState,
        nickname: debounceSearchValue,
      });
      setVillageUsersArary(response.data);
      setPages({
        page: response.meta.page,
        totalPage: response.meta.totalPage,
      });
    }
    getUser();
  }, [sortState, debounceSearchValue, currentPage]);

  return (
    <>
      {villageUsersArray.map((userInfo: VillageData) => (
        <S.UserBox key={userInfo.nickname}>
          <S.UserCharacter
            onClick={() => route.push(`/previewVillageUsers/${userInfo.no}`)}>
            <S.UserCharacterImgDiv>
              <Image
                fill
                alt="유저 캐릭터 이미지"
                sizes="(max-width:154px) 100vw"
                src={userInfo.characterLocker[0]?.character.image}
              />
            </S.UserCharacterImgDiv>
          </S.UserCharacter>
          <S.ShowUserNickname>
            {userInfo.nickname}{' '}
            <S.UserAchievementDiv>
              {userInfo.userAchievement[0]?.achievement.title}
            </S.UserAchievementDiv>
          </S.ShowUserNickname>
          <S.ShowUserHeartDiv>
            <S.UserHeart>
              <Image
                fill
                alt={'하트'}
                src={IMAGE.heart}
                sizes="(max-width:10px) 100vw"
              />
            </S.UserHeart>
            {userInfo.legend?.likeCount} / point:{userInfo.accumulationPoint}
          </S.ShowUserHeartDiv>
        </S.UserBox>
      ))}
    </>
  );
}

export const animal = atom('');
