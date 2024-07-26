'use client';

import { Token } from '@/app/api/getToken';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export const Loading = (props: { social: string }) => {
  const params = useSearchParams();
  const router = useRouter();
  const code = params.get('code');

  const setLocalStorageToken = (key: string, value: string) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
      console.log(err);
    }
  };

  const setCookieToken = (value: string, key?: string) => {
    try {
      document.cookie = JSON.stringify(value);
    } catch (err) {
      console.log(err);
    }
  };

  console;

  const getUsersToken = async () => {
    try {
      const response = await Token.getToken(code, props.social);
      setLocalStorageToken('AcessToken', response.acessToken);
      // setCookieToken('ads',response.acessToken)
      const routerPush = router.push('/newcharacter');
      // setRc;
      routerPush;
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
