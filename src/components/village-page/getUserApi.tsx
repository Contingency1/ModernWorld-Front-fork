'use client';

import { useEffect, useState } from 'react';
import * as S from '@/components/village-page/style';
import { SortStateAtom } from './SortDiv';
import { atom, useAtom } from 'jotai';
import { PageNumber } from './Pagenation';
import { searchValue } from './SearchBox';
import { VILLAGE } from '@/app/api/village';
import { VillageData } from '@/types/village';
import Link from 'next/link';

export default function GetUserApi() {
  const [userNicknameArray, setuserNicknameArray] = useState([]);
  const [sort, setSort] = useState('');
  const [userCount, setUserCount] = useAtom(userCountAtom);
  const [radioAtom] = useAtom(SortStateAtom);
  const [page_num, setPage_Num] = useAtom(PageNumber);
  const [keyword] = useAtom(searchValue);

  useEffect(() => {
    setPage_Num(1);
  }, [radioAtom, keyword]);

  function Sort() {
    switch (radioAtom) {
      case '최신':
        setSort('');
        break;
      case '랭킹':
        setSort('accumulationPoint');
        break;
      case '좋아요':
        setSort('like');
        break;
    }
  }

  async function getUser() {
    const response = await VILLAGE.getVillageUser({
      pageNo: page_num,
      take: 8,
      orderByField: sort,
      animal: 'cat',
      nickname: keyword,
    });
    setuserNicknameArray(response.data);
    setUserCount(response.data);
  }

  useEffect(() => {
    Sort();
    getUser();
  }, [radioAtom, page_num, keyword]);

  return (
    <>
      {userNicknameArray.map((e: VillageData) => (
        <S.UserBox key={e.nickname}>
          <S.UserCharacter>
            <Link href="/previewVillageUsers">
              <img src={e.characterLocker[0].character.image} />
            </Link>
          </S.UserCharacter>
          {e.nickname}
          <S.UserHeart>
            <Link href="" style={{ textDecoration: 'none' }}>
              <img src="https://wang0514.s3.ap-northeast-2.amazonaws.com/page/heartPicture.png" />
              {e.legend.likeCount}
              <> point : {e.accumulationPoint}</>
            </Link>
          </S.UserHeart>
          <S.UserName>{e.nickname}</S.UserName>
        </S.UserBox>
      ))}
    </>
  );
}

export const userCountAtom = atom([]);
export const animal = atom('');
