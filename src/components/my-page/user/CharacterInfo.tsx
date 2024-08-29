'use client';

import * as S from '@/components/my-page/user/style';
import { useAtom } from 'jotai';
import { userDataAtom } from '@/states/userAtoms';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { levelColors } from '@/utils/achievements';

export default function CharacterInfo(props: {
  achievementColor: 'one' | 'two' | 'three' | null;
}) {
  const [data] = useAtom(userDataAtom);
  const router = useRouter();

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
          <S.Font
            color={
              props.achievementColor
                ? levelColors[props.achievementColor]
                : '#FF3030'
            }
            onClick={() => {
              router.push('/my-page/achievement-settings');
            }}>
            {' '}
            ({data.userAchievement?.[0]?.achievement?.title ?? '업적 없음' })
          </S.Font>
        </S.NameSection>
      </S.CharacterInfo>
    </>
  );
}
