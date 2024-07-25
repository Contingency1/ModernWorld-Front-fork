'use client';

import { Token } from '@/app/api/getToken';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export const Loading = (props: { social: string }) => {
  const params = useSearchParams();
  const router = useRouter();
  const code = params.get('code');

  const getUsersToken = async () => {
    try {
      const response = await Token.getToken(code, props.social);
      const setAc = localStorage.setItem('AT', response.accessToken);
      // const setRc = localStorage.setItem('RT', response.refreshToken);
      const routerPush = router.push('/newcharacter');
      setAc;
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
