import { MyRoomDataType } from '@/types/myroom';
import * as S from './style';
import INVENTORY from '@/app/api/inventory';

export async function MyRoom() {
  // const userItemArray = await INVENTORY.getInventoryItem(1, undefined, true);
  // console.log(userItemArray);
  return (
    <>
      <S.RootDiv width="100vw" height="100vh">
        <S.BackGroundGrid>
          <S.WallPaper />
          <S.Floor />
        </S.BackGroundGrid>
        <S.ItemsGrid>
          <S.Place_2>
            <S.ItemImageSize>12</S.ItemImageSize>
          </S.Place_2>
          <S.Place_1_4_5>
            <S.DivElement width="100%" height="50%" id="Place_1">
              1
            </S.DivElement>
            <S.Place_4_5>
              <S.DivElement width="50%" height="100%" id="Place_4">
                4
              </S.DivElement>
              <S.DivElement width="50%" height="100%" id="Place_5">
                5
              </S.DivElement>
            </S.Place_4_5>
          </S.Place_1_4_5>
          <S.ItemImageSize>3</S.ItemImageSize>
        </S.ItemsGrid>
      </S.RootDiv>
    </>
  );
}
