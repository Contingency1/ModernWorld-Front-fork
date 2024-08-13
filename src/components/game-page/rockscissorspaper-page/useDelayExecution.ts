// import { useEffect, useRef, useState } from 'react';

// export const useDelayedExecution = (
//   delay: number,
//   callback: (param: any) => void,
// ) => {
//   // 매개변수를 저장하는 상태 변수
//   const [param, setParam] = useState<any>(null);

//   // 매개변수의 최신 값을 저장하는 ref 객체
//   const latestParam = useRef<any>(param);

//   // 타이머를 저장하는 ref 객체
//   const timeoutRef = useRef<NodeJS.Timeout | null>(null);

//   // 매개변수가 변경될 때마다 최신 매개변수를 ref 객체에 저장
//   useEffect(() => {
//     latestParam.current = param;
//   }, [param]);

//   // 타이머를 시작하는 함수
//   const startTimer = () => {
//     // 기존에 설정된 타이머가 있으면 클리어
//     if (timeoutRef.current) {
//       clearTimeout(timeoutRef.current);
//     }

//     // 새로운 타이머를 설정
//     timeoutRef.current = setTimeout(() => {
//       // 타이머가 종료되면 최신 매개변수로 콜백 실행
//       callback(latestParam.current);
//     }, delay);
//   };

//   // 타이머 시작과 매개변수 설정 함수를 반환
//   return { setParam, startTimer };
// };
