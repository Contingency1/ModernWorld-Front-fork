import { GetItems } from '@/app/api/GetItems';
import * as S from './style';

export async function MyRoom() {
    const imageSrc = await GetItems();
    return (
        <>
            <S.RootDiv width="100vw" height="100vh">
                <S.BackGroundGrid>
                    <S.WallPaper />
                    <S.Floor />
                </S.BackGroundGrid>
                <S.ItemsGrid>
                    <img src={imageSrc}></img>
                    <img src={imageSrc}></img>
                    <img src={imageSrc}></img>
                    <img src={imageSrc}></img>
                    <img src={imageSrc}></img>
                    <img src={imageSrc}></img>
                </S.ItemsGrid>
            </S.RootDiv>
        </>
    );
}
