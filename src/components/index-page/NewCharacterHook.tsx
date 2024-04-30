'use client';

import * as S from './style';
import React, { useState, useEffect } from 'react';

const animalsURL = [
    {
        id: 1,
        name: 'dog',
        url: 'https://wang0514.s3.ap-northeast-2.amazonaws.com/items/firstDog.png',
    },
    {
        id: 2,
        name: 'cat',
        url: 'https://wang0514.s3.ap-northeast-2.amazonaws.com/items/firstCat.png',
    },
];

const animalsURLmap = () =>
    animalsURL.map((e) => {
        return e.url;
    });

export default function NewCharacterHook() {
    const [n1, setn1] = useState(0);

    useEffect(() => {}, [n1]);

    const plus = () => {
        n1 >= animalsURL.length - 1 ? setn1(0) : setn1(n1 + 1);
    };

    const minus = () => {
        n1 <= 0 ? setn1(animalsURL.length - 1) : setn1(n1 - 1);
    };
    console.log(n1);
    return (
        <>
            <S.LeftArrow>
                <img src="https://wang0514.s3.ap-northeast-2.amazonaws.com/items/ArrowLeft.png" onClick={minus}></img>
            </S.LeftArrow>
            <S.FirstCat>
                <img src={animalsURLmap()[n1]}></img>
            </S.FirstCat>
            <S.RightArrow>
                <img src="https://wang0514.s3.ap-northeast-2.amazonaws.com/items/ArrowRight.png" onClick={plus}></img>
            </S.RightArrow>
        </>
    );
}
