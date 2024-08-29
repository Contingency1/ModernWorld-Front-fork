'use client';

import * as S from '../styled';
import {
  RockSicssorsPaperArray,
  RockSicssorsPaperImgArray,
} from '@/utils/rockScissorsPaper';
import { useAtom } from 'jotai';
import { BotHandAtom, gameResultAtom, StartTimerAtom } from '@/states/gameAtom';
import Image from 'next/image';

const BotSection = () => {
  const [gameResult] = useAtom(gameResultAtom);
  const [bothand, setBotHand] = useAtom(BotHandAtom);
  const [startTimer] = useAtom(StartTimerAtom);
  setBotHand(gameResult.computerChoice);
  return (
    <S.SectionRootDiv>
      <S.ProfileCircle>
        <S.ProfileImg
          src={
            'https://mblogthumb-phinf.pstatic.net/MjAyMDEyMTNfMjY0/MDAxNjA3ODM0MjQzMDk5.SgFYR0v0NDHgoTV0sHfUxFS9FgupVORHLXXrxm5s5aIg.yPHF3-fup-DLH_WdL4gyj4obs_QnSLQ6Z00ysyY5cpIg.GIF.no1yoongoo/1518423358575.gif?type=w800'
          }></S.ProfileImg>
      </S.ProfileCircle>
      <S.UserNameDiv>상대 (봇)</S.UserNameDiv>

      {!startTimer ? (
        RockSicssorsPaperImgArray.map((img, index) => (
          <S.IconSircle
            $cursor=""
            key={img}
            $check={index === RockSicssorsPaperArray.indexOf(bothand)}>
            <S.IconBackColor>
              <S.IconDiv>
                <Image
                  src={img}
                  fill
                  alt={'손'}
                  sizes={'(max-width : 90px) 100vw'}
                />
              </S.IconDiv>
            </S.IconBackColor>
          </S.IconSircle>
        ))
      ) : (
        <S.LoadingDiv>로딩중... </S.LoadingDiv>
      )}
    </S.SectionRootDiv>
  );
};

export default BotSection;
