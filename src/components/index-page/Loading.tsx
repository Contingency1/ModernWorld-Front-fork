'use client';

import { Token } from '@/app/api/getToken';
import { SSE } from '@/app/api/sse';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export const Loading = () => {
  const params = useSearchParams();
  const router = useRouter();
  const code = params.get('code');

  const getUsersToken = async () => {
    try {
      const response = await Token.getKakaoToken(code);
      const qt = await SSE.qt(4);
      console.log(qt);
      console.log(code);

      localStorage.setItem('ac', response.accessToken);
      localStorage.setItem('rf', response.reFreshToken);
      router.push('/newcharacter');
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUsersToken();
  }, []);

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <img
        style={{ width: '500px', height: '500px' }}
        src={'https://img.mk.co.kr/mkde/ic_loading_img.gif'}></img>
    </div>
  );
};
