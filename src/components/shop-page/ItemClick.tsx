// 'use client';

// import SHOP from '@/app/api/shop';
// import * as S from '@/components/my-page/contents/inventory/style';
// import {
//   isModalOpenAtom,
//   selectItemTypeAtom,
//   isGiftPageOpenAtom,
// } from '@/states/shopAtoms';
// import { ShopDataType } from '@/types/shop';
// import { useAtom, useAtomValue, useSetAtom } from 'jotai';
// import { useEffect, useState } from 'react';

// export default function ItemClick(props: { no: number }) {
//   const [itemInfo, setItemInfo] = useState<ShopDataType | null>(null);
//   const [characterInfo, setCharacterInfo] = useState<ShopDataType | null>(null);
//   const [isGiftPageOpen, setIsGiftPageOpen] = useAtom(isGiftPageOpenAtom);
//   const [giftUserName, setGiftUserName] = useState('');
//   const selectItemType = useAtomValue(selectItemTypeAtom);
//   const setModalClose = useSetAtom(isModalOpenAtom);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setGiftUserName(e.target.value);
//   };

//   const handleGiftPageOpen = () => {
//     setIsGiftPageOpen(true);
//   };

//   const handleGiftPageClose = () => {
//     setIsGiftPageOpen(false);
//   };

//   const handleModalClose = () => {
//     setModalClose(false);
//   };

//   const getItemInfo = async (no: number) => {
//     const response = await SHOP.getSelectItem(no);
//     setItemInfo(response);
//   };

//   const getCharacterInfo = async (no: number) => {
//     const response = await SHOP.getSelectCharacter(no);
//     setCharacterInfo(response);
//   };

//   const buyItem = async (no: number) => {
//     await SHOP.buyItem(no);
//   };

//   const buyCharacter = async (no: number) => {
//     await SHOP.buyCharacter(no);
//   };

//   const giftItemToUser = async (userNo: any, itemNo: number) => {
//     await SHOP.giftItemToUser(userNo, itemNo);
//   };

//   useEffect(() => {
//     if (selectItemType === 0) {
//       getItemInfo(props.no);
//     } else {
//       getCharacterInfo(props.no);
//     }
//   }, [selectItemType]);

//   if (isGiftPageOpen) {
//     return (
//       <>
//         <S.ModalBody>
//           <S.ModalItemDiv>
//             <S.Img
//               img={
//                 selectItemType === 0
//                   ? itemInfo?.image ?? ''
//                   : characterInfo?.image ?? ''
//               }
//             />
//           </S.ModalItemDiv>
//           <S.ModalFont>
//             {selectItemType === 0
//               ? itemInfo?.name ?? ''
//               : characterInfo?.name ?? ''}
//           </S.ModalFont>
//           <S.ModalFont>
//             {selectItemType === 0
//               ? itemInfo?.description ?? ''
//               : characterInfo?.description ?? ''}
//           </S.ModalFont>
//           <S.ModalFont>
//             {selectItemType === 0
//               ? itemInfo?.price ?? ''
//               : characterInfo?.price ?? ''}
//             원
//           </S.ModalFont>
//           <S.ModalButtonSection>
//             <S.GiftPageUserInput
//               placeholder="선물할 유저 닉네임을 입력하세요!"
//               value={giftUserName}
//               onChange={handleChange}
//             />
//             <S.ModalInButton
//               onClick={() => {
//                 giftItemToUser(
//                   giftUserName,
//                   selectItemType === 0
//                     ? itemInfo?.no ?? 0
//                     : characterInfo?.no ?? 0,
//                 );
//               }}>
//               선물하기
//             </S.ModalInButton>
//           </S.ModalButtonSection>

//           <S.ModalExit
//             img="https://wang0514.s3.ap-northeast-2.amazonaws.com/page/exit.png"
//             onClick={handleGiftPageClose}
//           />
//         </S.ModalBody>
//       </>
//     );
//   }

//   return (
//     <>
//       <S.ModalBackground>
//         <S.ModalBody>
//           <S.ModalItemDiv>
//             <S.Img
//               img={
//                 selectItemType === 0
//                   ? itemInfo?.image ?? ''
//                   : characterInfo?.image ?? ''
//               }
//             />
//           </S.ModalItemDiv>
//           <S.ModalFont>
//             {selectItemType === 0
//               ? itemInfo?.name ?? ''
//               : characterInfo?.name ?? ''}
//           </S.ModalFont>
//           <S.ModalFont>
//             {selectItemType === 0
//               ? itemInfo?.description ?? ''
//               : characterInfo?.description ?? ''}
//           </S.ModalFont>
//           <S.ModalFont>
//             {selectItemType === 0
//               ? itemInfo?.price ?? ''
//               : characterInfo?.price ?? ''}
//             원
//           </S.ModalFont>
//           <S.ModalButtonSection>
//             <S.ModalInButton onClick={handleGiftPageOpen}>
//               선물하기
//             </S.ModalInButton>
//             <S.ModalInButton
//               onClick={() => {
//                 selectItemType === 0
//                   ? buyItem(itemInfo?.no ?? 0)
//                   : buyCharacter(characterInfo?.no ?? 0);
//               }}>
//               구매하기
//             </S.ModalInButton>
//           </S.ModalButtonSection>
//           <S.ModalExit
//             img="https://wang0514.s3.ap-northeast-2.amazonaws.com/page/exit.png"
//             onClick={handleModalClose}
//           />
//         </S.ModalBody>
//       </S.ModalBackground>
//     </>
//   );
// }
