'use client';

import { useAtom } from 'jotai';
import * as S from './style';
import React, { useState, useEffect } from 'react';
import { newUserCharacterAtom } from '@/states/newUserNickname';
import { IMAGE } from '@/utils/image';

const animalsURL = [
  {
    id: 1,
    name: 'dog',
    url: IMAGE.addFriend,
  },
  {
    id: 2,
    name: 'cat',
    url: IMAGE.comment,
  },
];

const animalsURLmap = () =>
  animalsURL.map((e) => {
    return e.url;
  });

export default function NewCharacterHook() {
  const [n1, setn1] = useState(1);
  const [_, setNewUserCharacter] = useAtom(newUserCharacterAtom);

  useEffect(() => {
    setNewUserCharacter(n1);
  }, [n1]);

  const plus = () => {
    n1 >= animalsURL.length - 1 ? setn1(0) : setn1(n1 + 1);
  };

  const minus = () => {
    n1 <= 0 ? setn1(animalsURL.length - 1) : setn1(n1 - 1);
  };
  return (
    <>
      <S.LeftArrow>
        <img
          src="https://wang0514.s3.ap-northeast-2.amazonaws.com/items/ArrowLeft.png"
          onClick={minus}></img>
      </S.LeftArrow>
      <S.FirstCharacter>
        <img src={animalsURLmap()[n1]}></img>
      </S.FirstCharacter>
      <S.RightArrow>
        <img
          src="https://wang0514.s3.ap-northeast-2.amazonaws.com/items/ArrowRight.png"
          onClick={plus}></img>
      </S.RightArrow>
    </>
  );
}
