import * as S from "@/components/my-page/user/style";
import { useAtom } from "jotai";
import { userDataAtom } from "@/state/userAtoms";

export default function CharacterInfo() {
  const [data] = useAtom(userDataAtom);

  const characterImage = data.characterLocker?.[0]?.character?.image;
  const nickname = data.nickname;
  const title = data.userAchievement?.[0]?.achievement?.title;

  return (
    <>
      <S.CharacterInfo color="rgba(255, 255, 255, 0.5)">
        <img src={characterImage} alt="character" width="110vw" />
        <S.NameSection>
          {nickname}
          <> ({title})</>
        </S.NameSection>
      </S.CharacterInfo>
    </>
  );
}
