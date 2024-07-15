import { AxiosResponse } from 'axios';
import instance from './axiosInstance';
import { InventoryApiType } from '@/types/inventory';

const INVENTORY = {
  path: `/inventory`,
  /** 인벤토리 아이템 불러오기 API */
  async getInventoryItem(
    user: number,
    theme?: string,
    status?: boolean,
  ): Promise<any> {
    const result: AxiosResponse = await instance.get(
      `${INVENTORY.path}/users/${user}`,
      {
        params: {
          theme: theme,
          status: status,
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
  /** 인벤토리에 캐릭터 불러오기 API */
  async getInventoryCharacter(user: number, type?: string): Promise<any> {
    const result: AxiosResponse = await instance.get(
      `/character-locker/users/${user}`,
      {
        params: {
          species: type,
        },
      },
    );
    return result.data;
  },
  /** 캐릭터 착용하기 API */
  async setCharacterStatus(characterNo: number, status: boolean): Promise<any> {
    if (!status) {
      if (!window.confirm('캐릭터를 착용하시겠습니까?')) {
        return; // 확인을 받지 못하면 함수 종료
      }
    } else {
      return;
    }
    const response: AxiosResponse = await instance.patch(
      `/character-locker/${characterNo}`,
      {
        status: true,
      },
    );

    return response.data;
  },
};

export default INVENTORY;
