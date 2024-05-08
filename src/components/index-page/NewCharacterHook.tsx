'use client';

import * as S from './style';
import React, { useState, useEffect } from 'react';

const animals = ['cat', 'dog'];

export default function NewCharacterHook() {
    const [n1, setn1] = useState(0);

    useEffect(() => {}, [n1]);

    const plus = () => {
        n1 >= animals.length - 1 ? setn1(0) : setn1(n1 + 1);
    };

    const minus = () => {
        n1 <= 0 ? setn1(animals.length - 1) : setn1(n1 - 1);
    };

    const confirmCharacter = () => {};

    return (
        <>
            <S.LeftArrow>
                <img src="https://wang0514.s3.ap-northeast-2.amazonaws.com/items/ArrowLeft.png" onClick={minus}></img>
            </S.LeftArrow>
            <S.FirstCat display={n1 === 0 ? '' : 'none'}>
                <img src="https://wang0514.s3.ap-northeast-2.amazonaws.com/items/firstCat.png"></img>
            </S.FirstCat>
            <S.FirstDog display={n1 === 1 ? '' : 'none'}>
                <img src="https://wang0514.s3.ap-northeast-2.amazonaws.com/items/firstDog.png"></img>
            </S.FirstDog>
            <S.RightArrow>
                <img src="https://wang0514.s3.ap-northeast-2.amazonaws.com/items/ArrowRight.png" onClick={plus}></img>
            </S.RightArrow>
        </>
    );
}
