'use client';

import * as S from '@/components/village-page/styled';
import { searchValue } from '@/states/village';
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
      <img src="https://wang0514.s3.ap-northeast-2.amazonaws.com/items/%EB%8F%8B%EB%B3%B4%EA%B8%B0" />
      <S.SearchInput
        placeholder="닉네임으로 검색"
        $inputColor={props.inputColor}
        onChange={handleUsernameChange}></S.SearchInput>
      <></>
    </S.SearchDiv>
  );
}
