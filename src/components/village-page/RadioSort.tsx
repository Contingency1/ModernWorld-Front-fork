'use client';

import * as S from '@/components/village-page/style';
import { atom, useAtom } from 'jotai';
import { useState } from 'react';

export default function RadioSort() {
    const [radioTarget, setRadioTarget] = useAtom(RadioStateAtom);

    const [selectRadio, setSelectRadio] = useState('');

    const handlechange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectRadio(event.target.value);
    };

    const SortArray = [{ name: '최신', checkd: true }, { name: '인기' }, { name: '랭킹' }, { name: '하트' }];

    return (
        <S.SortDiv>
            {SortArray.map((e) => (
                <>
                    <S.SortElementalDiv>
                        <S.Sort
                            type="radio"
                            name="sort"
                            value={e.name}
                            id={e.name}
                            onChange={() => {
                                setRadioTarget(e.name);
                            }}
                            checked={selectRadio === e.name ? false : true}
                        ></S.Sort>
                        <S.SortLabel htmlFor={e.name}>{e.name}</S.SortLabel>
                    </S.SortElementalDiv>
                </>
            ))}
        </S.SortDiv>
    );
}

export const RadioStateAtom = atom('');
