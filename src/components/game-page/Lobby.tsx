import Link from 'next/link';
import * as S from './styled';
import { IMAGE } from '@/utils/image';
import Image from 'next/image';
import { RockSicssorsPaperImgArray } from '@/utils/rockScissorsPaper';

const Lobby = () => {
  return (
    <S.BackGroundDiv $flexDirection="column">
      <S.TopDiv>
        <S.Flexdiv width={'40vw'} $justifyContent="space-between">
          {RockSicssorsPaperImgArray.map((img) => (
            <S.HandAndShadowDiv $marginTop="23%">
              <S.HandDiv width={'8vw'} height={'20vh'}>
                <Image
                  src={img}
                  alt={'가위바위보 하는 손'}
                  fill
                  sizes="(max-width : 8vw) 100vw"></Image>
              </S.HandDiv>
              <S.ShadowDiv width={'8vw'} height={'6vh'}>
                <Image
                  src={IMAGE.handShdow}
                  fill
                  sizes={'(max-width : 8vw) 100vw'}
                  alt={'손 그림자'}></Image>
              </S.ShadowDiv>
            </S.HandAndShadowDiv>
          ))}
        </S.Flexdiv>
      </S.TopDiv>
      <S.BottomDiv>
        <S.RockSicssorsPapreDiv>가위바위보 게임</S.RockSicssorsPapreDiv>
        <Link href="/game/rockscissorspaper">
          <S.PowerDiv>
            <Image
              src={IMAGE.powerBtn}
              alt={'시작 버튼'}
              fill
              sizes={'(max-width : 80px) 100vw'}
            />
          </S.PowerDiv>
        </Link>
      </S.BottomDiv>
    </S.BackGroundDiv>
  );
};

export default Lobby;
