import * as S from '@/components/my-page/user/style';
import CharacterInfo from './CharacterInfo';
import PointInfo from './PointInfo';
import Category from './Category';
import USER from '@/app/api/user';
import { useEffect, useState } from 'react';
import { useAtom, useAtomValue } from 'jotai';
import {
  userDataAtom,
  userCharacterChangeAtom,
  achievementColorAtom,
} from '@/states/userAtoms';

export default function LeftSection() {
  const userNo = Number(localStorage.getItem('userNo'));
  const [userData, setUserData] = useAtom(userDataAtom);
  const userCharacterChange = useAtomValue(userCharacterChangeAtom);
  const achievementColor = useAtomValue(achievementColorAtom);

  const getUserInfo = async () => {
    const response = await USER.getUserInfo(userNo);
    setUserData(response);
  };

  useEffect(() => {
    getUserInfo();
  }, [userCharacterChange, achievementColor]); //캐릭터가 변경될 때마다 요청 보냄

  return (
    <>
      <S.OutLineSection width="48vh" height="82vh">
        <CharacterInfo
          achievementColor={
            achievementColor ? achievementColor : null
          }></CharacterInfo>
        <PointInfo></PointInfo>
        <Category></Category>
      </S.OutLineSection>
    </>
  );
}
