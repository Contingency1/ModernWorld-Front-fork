import * as S from '@/components/my-page/user/style';
import CharacterInfo from './CharacterInfo';
import PointInfo from './PointInfo';
import Category from './Category';
import USER from '@/app/api/user';
import { useEffect } from 'react';
import { useAtom, useAtomValue } from 'jotai';
import {
  userDataAtom,
  userCharacterChangeAtom,
  userNoAtom,
} from '@/states/userAtoms';

export default function LeftSection() {
  const userNo = useAtomValue(userNoAtom);
  const [userData, setUserData] = useAtom(userDataAtom);
  const [userCharacterChange] = useAtom<boolean>(userCharacterChangeAtom);

  const getUserInfo = async () => {
    const response = await USER.getUserInfo(36); //유저 아이디
    setUserData(response);
  };

  useEffect(() => {
    getUserInfo();
  }, [userCharacterChange]); //캐릭터가 변경될 때마다 요청 보냄

  return (
    <>
      <S.OutLineSection width="48vh" height="82vh">
        <CharacterInfo></CharacterInfo>
        <PointInfo></PointInfo>
        <Category></Category>
      </S.OutLineSection>
    </>
  );
}
