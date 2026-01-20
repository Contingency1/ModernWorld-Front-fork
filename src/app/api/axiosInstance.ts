import axios, { AxiosResponse } from 'axios';
import { Token } from './getToken'; // Token 객체 import 확인

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_MODERN_WORLD_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // 쿠키(리프레시 토큰) 전송을 위해 필수
});

const getAccessToken = () => {
  if (typeof window !== 'undefined') {
    // 'undefined' 문자열 체크로 수정
    return localStorage.getItem('accessToken');
  }
  return null;
};

instance.interceptors.request.use(
  (config) => {
    const token = getAccessToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// 응답 인터셉터 (주석 해제 및 로직 구현)
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    // 401 에러 발생 시 && 아직 재시도하지 않았을 때
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true; // 무한 루프 방지용 플래그

      try {
        // 1. 토큰 갱신 요청 (이제 순수 axios를 쓰므로 인터셉터 안 거침)
        const result = await Token.refreshAccessToken();

        // 2. 새 토큰 저장 (백엔드 응답 구조에 맞춰 수정 필요: result.accessToken 등)
        const newAccessToken = result.accessToken;

        if (newAccessToken) {
          localStorage.setItem('accessToken', newAccessToken);

          // 3. 헤더 갱신 후 재요청
          instance.defaults.headers.common['Authorization'] =
            `Bearer ${newAccessToken}`;
          originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;

          return instance(originalRequest);
        }
      } catch (refreshError) {
        // 갱신 실패 시 (리프레시 토큰 만료 등) -> 강제 로그아웃
        console.error('토큰 갱신 실패, 로그아웃 처리');
        localStorage.removeItem('accessToken');
        window.location.href = '/loginpage'; // 로그인 페이지로 튕겨내기
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  },
);

export default instance;
