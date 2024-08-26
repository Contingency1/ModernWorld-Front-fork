'use client';

import * as S from '@/components/village-page/styled';
import { currentPageAtom, searchValue } from '@/states/village';
import { IMAGE } from '@/utils/image';
import { useSetAtom } from 'jotai';
import Image from 'next/image';

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
      <div style={{ width: '10%', height: '100%', position: 'relative' }}>
        <Image fill alt={'검색 돋보기'} src={IMAGE.magnifier} />
      </div>
      <S.SearchInput
        placeholder="닉네임으로 검색"
        $inputColor={props.inputColor}
        onChange={handleUsernameChange}></S.SearchInput>
      <></>
    </S.SearchDiv>
  );
}
