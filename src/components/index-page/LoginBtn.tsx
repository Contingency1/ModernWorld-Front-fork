'use client';

import { useState } from 'react';
import * as S from './style';
import Link from 'next/link';

interface LoginBtn {
    src: string;
    alt: string;
    onClickLoginnBtn?: boolean;
}

export default function LoginBtn(props: LoginBtn) {
    const [onCliickLoginBtn, setOnClcickLoginBtn] = useState(false);
    console.log(onCliickLoginBtn);

    return (
        <img
            onClick={() => setOnClcickLoginBtn(onCliickLoginBtn === false ? true : false)}
            src={props.src}
            alt={props.alt}
            style={{ width: '16%', height: '80%', marginTop: '70px', cursor: 'pointer' }}
        ></img>
    );
}
