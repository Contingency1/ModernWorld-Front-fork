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
  const [isLoading, setIsLoading] = useState(false);
  const [displayMessage, setDisplayMessage] = useState<JSX.Element | string>(
    '? 님께',
  );
  const debouncedSearch = useDebounce(nickname, 2000);

  const getUser = async () => {
    if (debouncedSearch) {
      try {
        const response = await USER.searchUser(debouncedSearch);
        setSearchResult(response);
      } finally {
        setIsLoading(false);
      }
    } else {
      setSearchResult(null);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const trimmedValue = event.target.value.trim();
    setNickname(trimmedValue);
  };

  // 초기값
  useEffect(() => {
    if (nickname === '') {
      setDisplayMessage('? 님께');
      setIsLoading(false);
    } else {
      setIsLoading(true);
      setDisplayMessage('검색중...');
    }
  }, [nickname]);

  // 검색
  useEffect(() => {
    if (debouncedSearch) {
      getUser();
    }
  }, [debouncedSearch]);

  // 검색 결과에 따라 message 값 업데이트
  useEffect(() => {
    if (!isLoading) {
      if (searchResult && searchResult.data[0]?.nickname === nickname) {
        setDisplayMessage(`${searchResult.data[0].nickname} 님께`);
      } else if (nickname !== '') {
        setDisplayMessage('? 님께');
      }
    }
  }, [isLoading, searchResult, nickname]);

  const sendFriendRequest = async () => {
    if (searchResult) {
      const response = await NEIGHBOR.sendFriendRequest(
        searchResult?.data[0].no,
      );
    }
  };

  return (
    <>
      <S.ManageSection>
        <S.ColumnSection width="100%" height="100%" $margin="0 0 -1vw 0">
          <S.UserSearchBar
            placeholder="친구 신청할 유저 닉네임을 검색하세요!"
            onChange={handleInputChange}
          />
          <S.DisplayDiv flex="row" $margin="1vw">
            <S.Font $fontSize="18px" $margin="0 1vw">
              {displayMessage}
            </S.Font>
            <S.Button onClick={sendFriendRequest}>요청 보내기</S.Button>
          </S.DisplayDiv>
        </S.ColumnSection>
      </S.ManageSection>
    </>
  );
}
