'use client';

import * as S from '@/components/village-page/styled';
import { searchValue } from '@/states/village';
import { IMAGE } from '@/utils/image';
import { useAtom } from 'jotai';

interface SearchBox {
  inputColor: string;
}

export default function SearchBox(props: SearchBox) {
  const [inputValue, setInputValue] = useAtom(searchValue);

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
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
