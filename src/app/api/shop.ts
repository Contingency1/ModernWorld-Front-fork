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
};

export default SHOP;
