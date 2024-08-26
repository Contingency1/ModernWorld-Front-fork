'use client';

import { useAtom } from 'jotai';
import * as S from './style';
import React, { useState, useEffect, useCallback } from 'react';
import { newUserNicknameAtom } from '@/states/newUserNickname';

export default function NewNicknameCondition() {
  const [userInput, setUserInput] = useState('');
  const [checkCondition, setCheckCondition] = useState(false);
  const [newUserNickname, setNewUserNickname] = useAtom(newUserNicknameAtom);

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setUserInput(e.target.value);
  }

  const setNewUserNicknameCallback = useCallback(() => {
    setNewUserNickname(userInput);
  }, [newUserNickname]);

  useEffect(() => {
    const REGEX_NICKNAME = /^[a-zA-Z가-힣0-9]{2,10}$/;
    const result = REGEX_NICKNAME.test(userInput);
    setCheckCondition(result);
    setNewUserNicknameCallback;
  }, [userInput]);

  return (
    <>
      <S.InputNickname maxLength={10} onChange={onChange}></S.InputNickname>
      <S.NewNicknamecondition>
        {!checkCondition
          ? '2자 이상 10자 이하의 영문, 한글, 숫자만 입력 가능합니다'
          : '사용 가능한 닉네임입니다'}
      </S.NewNicknamecondition>
    </>
  );
}
