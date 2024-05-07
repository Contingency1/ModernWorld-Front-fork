'use client';

import * as S from './style';
import React, { useState, useEffect } from 'react';

interface NewNicknameCondition {
    props: string;
    userInput: string;
}

export default function NewNicknameCondition() {
    const [userInput, setUserInput] = useState('');
    const [checkCondition, setCheckCondition] = useState(false);

    interface onChange {
        e: string | number;
        target: string | number;
        value: string | number;
    }

    function onChange(e: onchange) {
        setUserInput(e.target.value);
    }

    useEffect(() => {
        const REGEX_NICKNAME = /^[a-zA-Z가-힣0-9]{1,10}$/;
        const result = REGEX_NICKNAME.test(userInput);
        setCheckCondition(result);
    }, [userInput]);

    return (
        <>
            <S.InputNickname maxLength={10} onChange={onChange}></S.InputNickname>
            <S.NewNicknamecondition>
                {!checkCondition ? '10자 이하의 영문, 한글, 숫자만 입력 가능합니다' : '사용 가능한 닉네임입니다'}
            </S.NewNicknamecondition>
        </>
    );
}
