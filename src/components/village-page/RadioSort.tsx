'use client';

import * as S from '@/components/village-page/style';
import { useState } from 'react';
import GetUserApi from './getUserApi';

export default function RadioSort(prop: any) {
    const [radioTarget, setRadioTarget] = useState('');

    const SortArray = [
        { name: '최신', value: '최신', checkd: true },
        { name: '인기', value: '인기', checkd: false },
        { name: '랭킹', value: '랭킹', checkd: false },
        { name: '하트', value: '하트', checkd: false },
    ];

    return (
        <S.SortDiv>
            {SortArray.map((e) => (
                <>
                    <S.Sort
                        type="radio"
                        name="sort"
                        value={e.value}
                        id={e.name}
                        onChange={() => {
                            setRadioTarget(e.name);
                        }}
                    ></S.Sort>
                    <S.SortLabel htmlFor={e.name}>{e.name}</S.SortLabel>
                </>
            ))}
        </S.SortDiv>
    );
}
