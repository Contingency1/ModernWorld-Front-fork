'use client';

import { GetItems } from '@/app/api/GetItems';
import * as S from './style';

export const MyRoom = () => {
    return (
        <>
            <S.Container>
                <S.BackGroundGrid>
                    <S.WallPaper />
                    <S.Floor />
                </S.BackGroundGrid>
                <S.ItemsGrid>
                    <img src={GetItems(1)}></img>
                    <img src={GetItems(2)}></img>
                    <img src={GetItems(3)}></img>
                    <img src={GetItems(4)}></img>
                    <img src={GetItems(5)}></img>
                    <img src={GetItems(6)}></img>
                </S.ItemsGrid>
            </S.Container>
        </>
    );
};
