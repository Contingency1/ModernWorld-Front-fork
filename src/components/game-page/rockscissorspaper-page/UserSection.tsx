'use client';

import { useState } from 'react';
import * as S from '../styled';
import { GAME } from '@/app/api/game';

const UserSection = () => {
  const [hand, setHand] = useState(3);
  const [clickButton, setClickButton] = useState('');

  const postUsersHand = async () => {
    const response = await GAME.PostUsersHand(hand);
    console.log(response);
    return response;
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
      <S.IconSircle>
        <S.IconBackColor>
          <S.IconImg
            src={
              'https://wang0514.s3.ap-northeast-2.amazonaws.com/items/%EA%B0%80%EC%9C%84%EB%B0%94%EC%9C%84%EB%B3%B4/%EA%B0%80%EC%9C%84.svg'
            }
            onClick={() => setHand(0)}></S.IconImg>
        </S.IconBackColor>
      </S.IconSircle>
      <S.IconSircle>
        <S.IconBackColor>
          <S.IconImg
            src={
              'https://wang0514.s3.ap-northeast-2.amazonaws.com/items/%EA%B0%80%EC%9C%84%EB%B0%94%EC%9C%84%EB%B3%B4/%EB%B0%94%EC%9C%84.svg'
            }
            onClick={() => setHand(1)}></S.IconImg>
        </S.IconBackColor>
      </S.IconSircle>
      <S.IconSircle>
        <S.IconBackColor>
          <S.IconImg
            src={
              'https://wang0514.s3.ap-northeast-2.amazonaws.com/items/%EA%B0%80%EC%9C%84%EB%B0%94%EC%9C%84%EB%B3%B4/%EB%B3%B4.svg'
            }
            onClick={() => setHand(2)}></S.IconImg>
        </S.IconBackColor>
      </S.IconSircle>
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
