'use client';

import { useEffect, useState } from 'react';
import * as S from '../styled';
import { GAME } from '@/app/api/game';
import { RockSicssorsPaperImgArray } from '@/utils/rockScissorsPaper';
import USER from '@/app/api/user';

const UserSection = () => {
  const [hand, setHand] = useState(3);
  const [clickButton, setClickButton] = useState('');

  const postUsersHand = async () => {
    const response = await GAME.PostUsersHand(hand);
    console.log(response);
    return response;
  };

  const getUserNo = async () => {
    const userNo = localStorage.getItem('userNo');
    userNo ? userNo : null;
    const response = await USER.getUserInfo(userNo);
  };

  return (
    <S.SectionRootDiv $right="0">
      <S.ProfileCircle>
        <S.ProfileImg
          src={
            'https://i.pinimg.com/originals/b3/17/ac/b317accc09ff9abbabb699900aafae67.gif'
          }></S.ProfileImg>
      </S.ProfileCircle>
      <S.UserNameDiv>나</S.UserNameDiv>
      {RockSicssorsPaperImgArray.map((img, index) => (
        <S.IconSircle $check={index === hand}>
          <S.IconBackColor>
            <S.IconImg
              src={img}
              onClick={() => {
                setHand(index);
              }}></S.IconImg>
          </S.IconBackColor>
        </S.IconSircle>
      ))}
      <button
        onClick={() => {
          postUsersHand();
        }}>
        시작하기
      </button>
      <div style={{ marginTop: '8%' }}>my point : 2500</div>
    </S.SectionRootDiv>
  );
};

export default UserSection;
