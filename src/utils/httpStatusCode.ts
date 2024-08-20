export const HTTP_STATUS = {
  /**
   * 요청 성공
   */
  OK: 200,
  /**
   * 요청 성공과 함께 새로운 콘텐츠 생성
   */
  CREATED: 201,
  /**
   * 요청은 성공했지만 콘텐츠는 없음
   */
  NO_CONTENT: 204,
  /**
   * 나쁜 요청
   */
  BAD_REQUEST: 400,
  /**
   * 토큰 관련 에러
   */
  UNAUTHORIZED: 401,
  /**
   * 클라이언트가 콘텐츠에 접근할 수 있는 권한이 없음
   */
  FORBIDDEN: 403,
  /**
   * 서버가 요청 받은 리소스를 찾을 수 없음
   */
  NOT_FOUND: 404,
  /**
   * 현재 서버의 상태와 충돌
   */
  CONFLICT: 409,
  /**
   * 서버 측 에러
   */
  SERVER_ERROR: 500,
};
