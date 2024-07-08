import * as S from '@/components/my-page/user/style';
import CharacterInfo from './CharacterInfo';
import PointInfo from './PointInfo';
import Category from './Category';
import USER from '@/app/api/user';
import { useEffect } from 'react';
import { useAtom } from 'jotai';
import { userDataAtom, userCharacterChangeAtom } from '@/states/userAtoms';

export default function LeftSection() {
  const [userData, setUserData] = useAtom(userDataAtom);
  const [userCharacterChange] = useAtom<boolean>(userCharacterChangeAtom);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await USER.getUserInfo(1); //유저 아이디
        setUserData(response);
      } catch (error) {
        console.error('사용자 정보 불러오기 실패:', error);
      }
    };

    getData();
  }, [userCharacterChange]); //페이지 로딩 시 한 번만 요청 보냄.

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
