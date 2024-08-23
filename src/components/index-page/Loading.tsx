'use client';

import { Token } from '@/app/api/getToken';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { bouncy } from 'ldrs';
import { useSetAtom } from 'jotai';
import {
  UserAccessTokenAtom,
  UserNoAtom,
  UserRefreshTokenAtom,
} from '@/states/authAtom';

export const Loading = (props: { social: string }) => {
  const params = useSearchParams();
  const router = useRouter();
  const code = params.get('code');
  bouncy.register();
  const setUserNo = useSetAtom(UserNoAtom);
  const setUserAccessToken = useSetAtom(UserAccessTokenAtom);
  const setUserRefreshToken = useSetAtom(UserRefreshTokenAtom);

  const setLocalStorageItem = (key: string, value: string) => {
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

  const getUsersToken = async () => {
    try {
      const response = await Token.getToken(code, props.social);
      setLocalStorageItem('accessToken', response.accessToken);
      setCookieToken('refreshToken', response.refreshToken);
      setLocalStorageItem('userNo', response.userNo);
      setUserNo(response.userNo);
      setUserAccessToken(response.userAccessToken);
      setUserRefreshToken(response.refreshToken);

      if (response.nickname) {
        router.push('/my-page');
      } else {
        routeNewCharacterPage();
      }
    } catch (err) {}
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
      <l-bouncy size="45" speed="1.75" color="black"></l-bouncy>
    </div>
  );
};
