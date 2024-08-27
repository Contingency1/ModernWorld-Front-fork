'use client';

import { useAtom } from 'jotai';
import * as S from './style';
import React, { useState, useEffect } from 'react';
import { newUserCharacterAtom } from '@/states/newUserNickname';
import { IMAGE } from '@/utils/image';
import Image from 'next/image';

const animalsURL = [
  {
    id: 1,
    name: 'dog',
    url: IMAGE.firstDog,
  },
  {
    id: 2,
    name: 'cat',
    url: IMAGE.firstCat,
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
    console.log(n1);
  }, [n1]);

  const plus = () => {
    n1 >= animalsURL.length ? setn1(1) : setn1(n1 + 1);
  };

  const minus = () => {
    n1 <= 1 ? setn1(animalsURL.length) : setn1(n1 - 1);
  };
  return (
    <>
      <S.LeftArrow>
        <Image
          alt={'왼쪽 화살표'}
          sizes={'(max-width : 80px) 100vw'}
          fill
          src={IMAGE.leftArrow}
          onClick={minus}></Image>
      </S.LeftArrow>
      <S.FirstCharacter>
        <Image
          fill
          sizes={'(max-width : 180px) : 100vw'}
          alt={'캐릭터'}
          src={animalsURLmap()[n1 - 1]}></Image>
      </S.FirstCharacter>
      <S.RightArrow>
        <Image
          alt={'오른쪽 화살표'}
          sizes={'(max-width : 80px) 100vw'}
          fill
          src={IMAGE.rightArrow}
          onClick={plus}></Image>
      </S.RightArrow>
    </>
  );
}
