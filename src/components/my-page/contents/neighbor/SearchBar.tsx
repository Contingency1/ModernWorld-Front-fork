'use client';

import { useEffect, useState } from 'react';
import * as S from './style';
import USER from '@/app/api/user';
import { UserSearchResult } from '@/types/user';
import { useDebounce } from '@uidotdev/usehooks';
import NEIGHBOR from '@/app/api/neighbor';

export default function SearchBar() {
  const [nickname, setNickname] = useState('');
  const [searchResult, setSearchResult] = useState<null | UserSearchResult>(
    null,
  );
  const debouncedSearch = useDebounce(nickname, 2000);

  const getUser = async () => {
    if (debouncedSearch) {
      try {
        const response = await USER.searchUser(debouncedSearch);
        setSearchResult(response);
      } finally {
      }
    } else {
      setSearchResult(null);
    }
  };

  useEffect(() => {
    getUser();
  }, [debouncedSearch]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const trimmedValue = event.target.value.trim();
    setNickname(trimmedValue);
  };

  return (
    <>
      <S.ManageSection>
        <S.ColumnSection width="100%" height="100%" $margin="0 0 -1vw 0">
          <S.UserSearchBar
            placeholder="친구 신청할 유저 닉네임을 검색하세요!"
            onChange={handleInputChange}
          />
          <S.ListContainer>
            {searchResult &&
              searchResult?.data.map((user) => (
                <S.DisplayDiv $flexDirection="row">
                  <S.ListBar key={user.no} $margin="1vw 0 0.5vw 0">
                    {user.nickname} : {user.description ?? '자기소개 없음'}
                  </S.ListBar>
                  <S.FriendRequest
                    onClick={() => {
                      NEIGHBOR.sendFriendRequest(user.no);
                    }}>
                    친구 신청
                  </S.FriendRequest>
                </S.DisplayDiv>
              ))}
          </S.ListContainer>
        </S.ColumnSection>
      </S.ManageSection>
    </>
  );
}
