import axios, { AxiosResponse } from 'axios';
import { Token } from './getToken'; // Token 객체 import 확인

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_MODERN_WORLD_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // 쿠키(리프레시 토큰) 전송을 위해 필수
});

instance.interceptors.request.use(
  (config) => {
    const token =
      typeof window !== 'undefined'
        ? localStorage.getItem('accessToken')
        : null;
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

    // 401 에러가 발생했고, 아직 재시도하지 않은 요청인 경우
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true; // 무한 루프 방지 플래그

      try {
        // 1. 리프레시 토큰을 사용하여 새로운 액세스 토큰 요청
        // (백엔드 OAuthController의 GET /auth/new-access-token 엔드포인트 호출)
        const result = await Token.refreshAccessToken();

        // 2. 백엔드 응답에서 새로운 액세스 토큰 추출 (RenewalAccessTokenResponseDTO 구조에 따름)
        const newAccessToken = result.data.accessToken;

        if (newAccessToken) {
          // 3. 로컬 스토리지 갱신
          localStorage.setItem('accessToken', newAccessToken);

          // 4. axios 인스턴스 및 원본 요청의 헤더 갱신
          instance.defaults.headers.common['Authorization'] =
            `Bearer ${newAccessToken}`;
          originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;

          // 5. 원본 요청 재시도
          return instance(originalRequest);
        }
      } catch (refreshError) {
        // 리프레시 토큰도 만료되었거나 갱신 실패 시 로그아웃 처리
        console.error('토큰 갱신 실패:', refreshError);
        localStorage.removeItem('accessToken');
        // 필요 시 로그인 페이지로 리다이렉트
        if (typeof window !== 'undefined') {
          window.location.href = '/loginpage';
        }
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  },
);

export default instance;
