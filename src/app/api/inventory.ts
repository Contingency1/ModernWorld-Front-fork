import { AxiosResponse } from 'axios';
import instance from './axiosInstance';

interface inventory {
  user: number;
  theme: string;
}

const INVENTORY = {
  path: `/inventory`,

  /** 인벤토리 아이템 불러오기 API */
  async getInventoryItem(user: number, theme: string): Promise<any> {
    const result: AxiosResponse = await instance.get(
      `${INVENTORY.path}/users/${user}`,
      {
        params: {
          theme: theme,
        },
      },
    );
    return result.data;
  },
};

export default INVENTORY;
