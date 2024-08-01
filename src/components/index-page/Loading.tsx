'use client';

import { Token } from '@/app/api/getToken';
import { userNoAtom } from '@/states/userAtoms';
import { useAtom } from 'jotai';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export const Loading = (props: { social: string }) => {
  const params = useSearchParams();
  const router = useRouter();
  const code = params.get('code');
  const [userNo, setUserNo] = useAtom(userNoAtom);

  useEffect(() => {
    const getUsersToken = async () => {
      const setLocalStorageToken = (key: string, value: string) => {
        try {
          localStorage.setItem(key, value);
        } catch (err) {
          console.log(err);
        }
      };

      const setCookieToken = (key: string, value: string) => {
        try {
          document.cookie = `${key}=${encodeURIComponent(value)}`;
        } catch (err) {
          console.log(err);
        }
      };

      const routeNewCharacterPage = () => {
        router.push('/newcharacter');
      };

      try {
        const response = await Token.getToken(code, props.social);
        setLocalStorageToken('accessToken', response.accessToken);
        setCookieToken('refreshToken', response.refreshToken);
        setUserNo(response.userNo);
        if (response.nickName) {
          router.push('/my-page');
        } else {
          routeNewCharacterPage();
        }
      } catch (err) {
        console.log(err);
      }
    };
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
