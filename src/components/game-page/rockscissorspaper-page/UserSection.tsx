'use client';

import { useEffect, useState } from 'react';
import * as S from '../styled';
import { RockSicssorsPaperImgArray } from '@/utils/rockScissorsPaper';
import USER from '@/app/api/user';
import { useAtom, useAtomValue } from 'jotai';
import { RefreshResultAtom, userHandAtom } from '@/states/gameAtom';
import Image from 'next/image';

const UserSection = () => {
  const [hand, setHand] = useAtom(userHandAtom);
  const refresh = useAtomValue(RefreshResultAtom);

  // 게임 결과
  const [userInfo, setUserInfo] = useState<{
    image: string;
    chance: number;
    currentPoint: number;
    nickname: string;
  }>();
  // 로컬스토리지에 있는 유저넘버 가져오기
  useEffect(() => {
    const getUserNo = () => {
      const userNo = localStorage.getItem('userNo');
      return Number(userNo);
    };
    // 유저의 정보를 가져옴 @userNo : 유저 넘버
    const getUserInfo = async (userNo: number) => {
      const response = await USER.getUserInfo(userNo);
      setUserInfo(response);
      return;
    };
    getUserInfo(getUserNo());
  }, [refresh]);

  return (
    <S.SectionRootDiv $right="0">
      <S.ProfileCircle>
        <S.ProfileImg src={userInfo?.image}></S.ProfileImg>
      </S.ProfileCircle>
      <S.UserNameDiv>{userInfo?.nickname}</S.UserNameDiv>
      {RockSicssorsPaperImgArray.map((img, index) => (
        <S.IconSircle $cursor={'true'} $check={index === hand} key={img}>
          <S.IconBackColor>
            <S.IconDiv
              onClick={() => {
                setHand(index);
              }}>
              <Image
                src={img}
                fill
                alt={'손'}
                sizes={'(max-width : 90px) 100vw'}
              />
            </S.IconDiv>
          </S.IconBackColor>
        </S.IconSircle>
      ))}
      <div style={{ marginTop: '8%' }}>my point : {userInfo?.currentPoint}</div>
    </S.SectionRootDiv>
  );
};

export default UserSection;
