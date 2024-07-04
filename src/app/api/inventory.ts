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
  /** 아이템 배치 상태 업데이트 */
  async setItemStatus(itemNo: number, status: boolean): Promise<any> {
    if (status) {
      if (!window.confirm('배치를 취소하시겠습니까?')) {
        return; // 취소 확인을 받지 못하면 함수 종료
      }
    } else {
      if (!window.confirm('아이템을 배치하시겠습니까?')) {
        return; // 배치 확인을 받지 못하면 함수 종료
      }
    }

    const response: AxiosResponse = await instance.patch(
      `${INVENTORY.path}/${itemNo}`,
      {
        status: !status,
      },
    );

    return response.data;
  },
};

export default INVENTORY;
