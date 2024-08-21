import { AxiosResponse } from 'axios';
import instance from './axiosInstance';
import { HTTP_STATUS } from '@/utils/httpStatusCode';
import { ErrorType } from '@/types/error';

export const COMMENT = {
  path: 'comments',
  async getComments(
    userNo: number,
    page?: number,
    take?: number,
    orderBy?: string,
    type?: string,
  ): Promise<any> {
    const result: AxiosResponse = await instance.get(
      `/users/${userNo}/${this.path}`,
      {
        params: {
          page: page,
          take: take,
          orderBy: orderBy,
          type: type,
        },
      },
    );
    return result.data;
  },
  async postComments(userNo: number, content: string) {
    try {
      const result: AxiosResponse = await instance.post(
        `/users/${userNo}/${this.path}`,
        {
          content: content,
        },
      );
      alert('성공적으로 작성되었습니다');
      return result;
    } catch (err) {
      const Error = err as ErrorType;
      if (Error.response?.status === HTTP_STATUS.BAD_REQUEST) {
        alert('댓글은 1자 이상 100자 이하로 입력해야 합니다');
      }
    }
  },

  async deleteComments(no: number) {
    try {
      const result: AxiosResponse = await instance.delete(
        `/users/my/${this.path}/${no}`,
      );
      alert('성공적으로 삭제되었습니다');
      return result;
    } catch (err) {
      const Error = err as ErrorType;
      if (Error.response?.status === HTTP_STATUS.FORBIDDEN) {
        alert('작성자만 삭제할 수 있습니다');
      } else if (Error.response?.status === HTTP_STATUS.NOT_FOUND) {
        alert('이미 삭제되었거나 존재하지 않는 댓글입니다');
      } else {
        alert('유효하지 않은 요청입니다');
      }
    }
  },

  async editCooments(no: number, content: string) {
    try {
      if (confirm('수정하시겠습니까?')) {
        const result: AxiosResponse = await instance.patch(
          `users/my/${this.path}/${no}`,
          {
            content: content,
          },
        );
        return result;
      }
    } catch (err) {
      const Error = err as ErrorType;
      switch (Error.response?.status) {
        case HTTP_STATUS.BAD_REQUEST:
          alert('1글자 이상 100글자 이하로 입력해주세요');
          break;

        case HTTP_STATUS.FORBIDDEN:
          alert('본인의 댓글만 수정 가능합니다');
          break;

        case HTTP_STATUS.NOT_FOUND:
          alert('유효하지 않은 요청입니다');
          break;
      }
    }
  },
};
