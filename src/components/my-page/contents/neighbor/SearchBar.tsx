'use client';

import { useEffect, useState } from 'react';
import * as S from './style';
import USER from '@/app/api/user';
import { UserSearchResult } from '@/types/user';

export default function SearchBar() {
  const [nickname, setNickname] = useState<string>('');
  const [searchResult, setSearchResult] = useState<null | UserSearchResult>(
    null,
  );

  const getUser = async () => {
    if (nickname) {
      const response = await USER.searchUser(nickname);
      setSearchResult(response);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(event.target.value);
  };

  console.log(searchResult ? searchResult.data[0].nickname : '없음');

  useEffect(() => {
    getUser();
  }, [nickname]);

  return (
    <>
      <S.ManageSection>
        <S.ColumnSection width="100%" height="100%" $margin="0 0 -1vw 0">
          <S.UserSearchBar
            placeholder="친구 신청할 유저 닉네임을 검색하세요!"
            onChange={handleInputChange}
          />
          <S.DisplayDiv flex="row" $margin="1vw">
            {searchResult ? (
              <>
                <S.Font $fontSize="18px" $margin="0 1vw">
                  * 님께
                </S.Font>
                <S.Button>요청 보내기</S.Button>
              </>
            ) : (
              <>
                <S.Font $fontSize="18px" $margin="0 1vw">
                  ? 님께
                </S.Font>
                <S.Button>요청 보내기</S.Button>
              </>
            )}
          </S.DisplayDiv>
        </S.ColumnSection>
      </S.ManageSection>
    </>
  );
}
