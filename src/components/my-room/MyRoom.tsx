// import { GetItems } from '@/app/api/GetItems';
// import * as S from './style';

// export async function MyRoom() {
//     const userItemArray = await GetItems();
//     return (
//         <>
//             <S.RootDiv width="100vw" height="100vh">
//                 <S.BackGroundGrid>
//                     <S.WallPaper />
//                     <S.Floor />
//                 </S.BackGroundGrid>
//                 <S.ItemsGrid>
//                     {userItemArray.map(
//                         (e: {
//                             item: {
//                                 image: string;
//                                 name: string;
//                             };
//                         }) => (
//                             <S.ItemImageSize src={e.item.image} key={e.item.name}></S.ItemImageSize>
//                         )
//                     )}
//                 </S.ItemsGrid>
//             </S.RootDiv>
//         </>
//     );
// }
