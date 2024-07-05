import * as S from './style';
import INVENTORY from '@/app/api/inventory';

export async function MyRoom() {
  const userItemArray = await INVENTORY.getInventoryItem(1, undefined, true);
  return (
    <>
      <S.RootDiv width="100vw" height="100vh">
        <S.BackGroundGrid>
          <S.WallPaper />
          <S.Floor />
        </S.BackGroundGrid>
        <S.ItemsGrid>
          {userItemArray.map(
            (e: {
              item: {
                image: string;
                name: string;
              };
            }) => (
              <S.ItemImageSize
                src={e.item.image}
                key={e.item.name}></S.ItemImageSize>
            ),
          )}
        </S.ItemsGrid>
      </S.RootDiv>
    </>
  );
}
