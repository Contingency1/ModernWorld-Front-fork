import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_MODERN_WORLD_BASE_URL,
  timeout: 10000,
  withCredentials: true, //자격 증명(쿠키) 전송
  headers: {
    'X-Custom-Header': 'foobar',
    Accept: 'application/json',
  },
});

const getAccessToken = () => {
  if (typeof window !== undefined) {
    return localStorage.getItem('accessToken');
  }
};

// 요청 인터셉터 추가하기 (우선은 필요 없을 것 같아서 주석처리했습니다.)
instance.interceptors.request.use(
  // 요청이 전달되기 전에 작업 수행
  (config) => {
    config.headers['Authorization'] = `Bearer ${getAccessToken()}`;
    return config;
  },
  // 요청 오류가 있는 작업 수행
  (error) => {
    console.log(error);
    return Promise.reject(error);
  },
);

// 응답 인터셉터 추가하기
// instance.interceptors.response.use(
//   (response) => {
//     // 2xx 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
//     // 응답 데이터가 있는 작업 수행
//     return response;
//   },
//   function (error) {
//     // 2xx 외의 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
//     // 응답 오류가 있는 작업 수행
//     return Promise.reject(error);
//   },
// );

export default instance;
