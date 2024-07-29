'use client';

import * as S from '@/components/my-page/user/style';
import { useAtom } from 'jotai';
import { userDataAtom } from '@/states/userAtoms';
import Link from 'next/link';

export default function CharacterInfo() {
  const [data] = useAtom(userDataAtom);

  return (
    <>
      <S.CharacterInfo color="rgba(255, 255, 255, 0.5)">
        <Link href="/my-page">
          <img
            src={data.characterLocker?.[0]?.character?.image}
            alt="character"
            width="110vw"
          />
        </Link>
        <S.NameSection>
          {data.nickname}
          <> ({data.userAchievement?.[0]?.achievement?.title})</>
        </S.NameSection>
      </S.CharacterInfo>
    </>
  );
}
