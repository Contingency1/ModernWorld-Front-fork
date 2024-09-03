import * as S from './style';
import { useSetAtom } from 'jotai';
import { isModalOpenAtom } from '@/states/shopAtoms';
import { useEffect, useState } from 'react';
import { ShopDataType } from '@/types/shop';
import SHOP from '@/app/api/shop';
import { useDebounce } from '@uidotdev/usehooks';
import { UserSearchResult } from '@/types/user';
import USER from '@/app/api/user';
import { userShoppingAtom } from '@/states/userAtoms';
import INVENTORY from '@/app/api/inventory';
import { SHOP_ERROR_MESSAGES } from '@/utils/errorCode';

export default function ItemClickModal(props: {
  data: ShopDataType;
  type: number;
}) {
  const setIsModal = useSetAtom(isModalOpenAtom);
  const [isGift, setIsGift] = useState(false);
  const [inputText, setInputText] = useState('');
  const [searchResult, setSearchResult] = useState<null | UserSearchResult>(
    null,
  );
  const debouncedSearch = useDebounce(inputText, 1000);
  const setUserShopping = useSetAtom(userShoppingAtom);

  const getUserNo = () => {
    if (typeof window !== undefined) {
      const userNo = Number(localStorage.getItem('userNo'));
      return userNo;
    }
  };

  const handleError = (message: string) => {
    const alertMessage =
      SHOP_ERROR_MESSAGES[message] || '알 수 없는 오류가 발생했습니다.';
    alert(alertMessage);
  };

  const getUser = async () => {
    if (debouncedSearch) {
      const response = await USER.searchUser(debouncedSearch);
      setSearchResult(response);
    } else {
      setSearchResult(null);
    }
  };

  /** 유저가 아이템 보유하고 있는지 검사 */
  const isHasItem = async (userNo: number) => {
    return await INVENTORY.getInventoryItem(
      userNo,
      undefined,
      undefined,
      props.data.name,
    );
  };

  const buyItem = async () => {
    try {
      // const response = await isHasItem(2);

      // if (response.length) {
      //   return alert('이미 보유 중인 아이템입니다!');
      // }
      await SHOP.buyItem(props.data.no);
      setIsModal(false);
      setUserShopping(`${props.data.no} ${props.data.name}`);
    } catch (error: any) {
      handleError(error.response.data.message);
    }
  };

  const buyCharacter = async () => {
    try {
      await SHOP.buyCharacter(props.data.no);
      setUserShopping(`${props.data.no} ${props.data.name}`);
    } catch (error: any) {
      handleError(error.response.data.message);
    }
  };

  const handleBuyClick = async () => {
    if (props.type) {
      buyCharacter();
    } else {
      buyItem();
    }
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const giftItemToUser = async (userNo: number, itemNo: number) => {
    if (userNo === getUserNo()) {
      alert('자기 자신에게는 선물 할 수 없어요!');
      return;
    }
    const response = await isHasItem(userNo);
    if (response.length) {
      if (
        !window.confirm(
          `${searchResult?.data[0]?.nickname}님이 이미 보유 중인 아이템이므로 해당 아이템 포인트의 50% 가 지급됩니다. 동의하십니까?`,
        )
      ) {
        return;
      }
    }
    await SHOP.giftItemToUser(userNo, itemNo);
  };

  const getGiftRecipientText = () => {
    if (inputText && searchResult) {
      return searchResult?.data[0]?.nickname
        ? `${searchResult.data[0].nickname} 님께`
        : '해당 유저를 찾을 수 없습니다';
    }
    return '? 님께';
  };

  useEffect(() => {
    if (debouncedSearch) {
      getUser();
    }
    if (inputText === '') {
      setSearchResult(null);
    }
  }, [debouncedSearch, inputText]);

  return (
    <>
      <S.ItemClickBackground>
        <S.Font
          $fontSize="30px"
          position="fixed"
          $margin="0 -56vw 29vw 0"
          cursor="pointer"
          onClick={() => setIsModal(false)}>
          x
        </S.Font>
        <S.ItemContainer>
          <S.Img src={props.data?.image} width="60%"></S.Img>
        </S.ItemContainer>
        <S.Font $fontSize="26px" $margin="2vw 0 1vw 0">
          {props.data?.name} ({props.data?.price}p)
        </S.Font>
        <S.Font $fontSize="20px">{props.data?.description}</S.Font>
        <S.DisplayDiv
          $flexDirection="row"
          $justifyContent="center"
          $alignItems="center">
          {isGift ? (
            <>
              <S.GiftUiBody>
                <S.Font
                  position="fixed"
                  $margin="0 0 8vw 37vw"
                  cursor="pointer"
                  onClick={() => setIsGift(false)}>
                  x
                </S.Font>
                <S.UserNameSearchBar
                  placeholder="선물할 유저 닉네임을 입력하세요!"
                  onChange={(e) => handleOnChange(e)}
                />
                <S.DisplayDiv $flexDirection="row" $margin="1vw 0 0 0">
                  <S.Font $fontSize="16px" color="#454545" $margin="1vw 0 0 0">
                    {getGiftRecipientText()}
                  </S.Font>
                  <S.Button
                    $backColor="#FFB1B1"
                    $margin="0 0 0 1vw"
                    onClick={() => {
                      searchResult &&
                        giftItemToUser(searchResult?.data[0].no, props.data.no);
                    }}
                    disabled={!searchResult?.data[0]?.no}>
                    선물하기
                  </S.Button>
                </S.DisplayDiv>
              </S.GiftUiBody>
            </>
          ) : (
            <>
              <S.Button $backColor="#FF7070" onClick={() => handleBuyClick()}>
                구매하기
              </S.Button>
              {!props.type && (
                <S.Button $backColor="#FFB1B1" onClick={() => setIsGift(true)}>
                  선물하기
                </S.Button>
              )}
            </>
          )}
        </S.DisplayDiv>
      </S.ItemClickBackground>
    </>
  );
}
