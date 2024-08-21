'use client';

import * as S from '@/components/village-page/styled';
import { currentPageAtom, searchValue } from '@/states/village';
import { IMAGE } from '@/utils/image';
import { useDebounce } from '@uidotdev/usehooks';
import { useAtom, useSetAtom } from 'jotai';
import { useEffect } from 'react';

interface SearchBox {
  inputColor: string;
}

export default function SearchBox(props: SearchBox) {
  const setInputValue = useSetAtom(searchValue);
  const clearPage = useSetAtom(currentPageAtom);

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    clearPage(1);
  };

  return (
    <S.SearchDiv>
      <img src={IMAGE.magnifier} />
      <S.SearchInput
        placeholder="닉네임으로 검색"
        $inputColor={props.inputColor}
        onChange={handleUsernameChange}></S.SearchInput>
      <></>
    </S.SearchDiv>
  );
}
