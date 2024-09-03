import { AxiosResponse } from 'axios';
import instance from './axiosInstance';

const SHOP = {
  path: `/items`,

  /** 아이템 전부 불러오기 API */
  async getItems(theme: string): Promise<any> {
    const result: AxiosResponse = await instance.get(`${SHOP.path}`, {
      params: {
        theme: theme,
      },
    });
    return result.data;
  },

  /** 특정 아이템 불러오기 API */
  async getSelectItem(no: number): Promise<any> {
    const result: AxiosResponse = await instance.get(`${SHOP.path}/${no}`);
    return result.data;
  },

  /** 캐릭터 불러오기 API */
  async getCharacters(species: string): Promise<any> {
    const result: AxiosResponse = await instance.get(`/characters`, {
      params: {
        species: species,
      },
    });
    return result.data;
  },

  /** 특정 캐릭터 불러오기 API */
  async getSelectCharacter(no: number): Promise<any> {
    const result: AxiosResponse = await instance.get(`/characters/${no}`);
    return result.data;
  },

  /** 캐릭터 구매 API */
  async buyCharacter(no: number): Promise<any> {
    if (!window.confirm('구매하시겠습니까?')) {
      return; // 확인을 받지 못하면 함수 종료
    }
    try {
      const result: AxiosResponse = await instance.post(
        `/users/my/characters`,
        {
          characterNo: no,
        },
      );
      alert('성공했습니다.');
      return result.data;
    } catch (error: any) {
      console.error('실패하였습니다.', error);

      throw error;
    }
  },

  /** 아이템 구매 API */
  async buyItem(no: number): Promise<any> {
    if (!window.confirm('구매하시겠습니까?')) {
      return; // 확인을 받지 못하면 함수 종료
    }
    try {
      const result: AxiosResponse = await instance.post(`/users/my/items`, {
        itemNo: no,
      });
      alert('성공했습니다.');
      return result.data;
    } catch (error: any) {
      console.error('실패하였습니다.', error);
      throw error;
    }
  },

  /** 특정 유저에게 아이템 선물하기 API */
  async giftItemToUser(userNo: number, itemNo: number): Promise<any> {
    if (!window.confirm('선물하시겠습니까?')) {
      return; // 확인을 받지 못하면 함수 종료
    }
    try {
      const result: AxiosResponse = await instance.post(
        `/users/${userNo}/presents`,
        {
          itemNo: itemNo,
        },
      );
      alert('성공했습니다.');
      return result.data;
    } catch (error: any) {
      console.error('실패하였습니다.', error);
      throw error;
    }
  },
};

export default SHOP;
