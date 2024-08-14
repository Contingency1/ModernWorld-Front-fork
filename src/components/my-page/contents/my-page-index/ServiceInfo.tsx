'use client';

import { useAtom } from 'jotai';
import * as S from './style';
import { userDataAtom } from '@/states/userAtoms';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function ServiceInfo() {
  const router = useRouter();
  const [indexUserInfo, setIndexUserInfo] = useAtom(userDataAtom);
  const [isAchievementDescription, setIsAchievementDescription] =
    useState(false);
  const [isServiceDescription, setIsServiceDescription] = useState(false);

  const handleArrow = (type: string) => {
    if (type === 'achievement') {
      setIsAchievementDescription(!isAchievementDescription);
    } else {
      setIsServiceDescription(!isServiceDescription);
    }
  };

  return (
    <>
      <S.Background>
        <S.UserInfoSection>
          <S.UserImageContainer onClick={() => router.push('/my-page')}>
            <img src={indexUserInfo.image} alt="User Profile" />
          </S.UserImageContainer>
          <S.ServiceInfoContainer>
            <S.UserInfoContent width="40vw" $backColor="#FFDEDE">
              업적 설명
              <S.Arrow
                src={
                  isAchievementDescription
                    ? 'https://wang0514.s3.ap-northeast-2.amazonaws.com/page/TopArrow.svg'
                    : 'https://wang0514.s3.ap-northeast-2.amazonaws.com/page/DownArrow.svg'
                }
                onClick={() => {
                  handleArrow('achievement');
                }}
              />
            </S.UserInfoContent>
            {isAchievementDescription ? (
              <S.ServiceDescriptionContainer>
                <S.Font $margin="0.5vw 0 0.5vw 0" color="#FF2525">
                  소통왕
                </S.Font>
                <S.Font $fontSize="16px">
                  - 소통해요: 댓글 10개를 작성하면 달성하며, 2,000 포인트를
                  획득합니다. <br />
                  - 소통완료: 댓글 20개를 작성하면 달성하며, 2,000 포인트를
                  획득합니다. <br />- 댓글부대: 댓글 40개를 작성하면 달성하며,
                  4,000 포인트를 획득합니다.
                </S.Font>
                <S.Font $margin="0.5vw 0 0.5vw 0" color="#FF2525">
                  인기왕
                </S.Font>
                <S.Font $fontSize="16px">
                  - 인싸: 좋아요 10개를 받으면 달성하며, 1,000 포인트를
                  획득합니다. <br />
                  - 인플루언서: 좋아요 20개를 받으면 달성하며, 2,000 포인트를
                  획득합니다. <br />- 연예인: 좋아요 40개를 받으면 달성하며,
                  4,000 포인트를 획득합니다.
                </S.Font>
                <S.Font $margin="0.5vw 0 0.5vw 0" color="#FF2525">
                  출석왕
                </S.Font>
                <S.Font $fontSize="16px">
                  - 성실: 출석을 10회 하면 달성하며, 1,000 포인트를 획득합니다.{' '}
                  <br />- 꾸준: 출석을 20회 하면 달성하며, 2,000 포인트를
                  획득합니다. <br />- 개근: 출석을 40회 하면 달성하며, 4,000
                  포인트를 획득합니다.
                </S.Font>
                <S.Font $margin="0.5vw 0 0.5vw 0" color="#FF2525">
                  수집왕
                </S.Font>
                <S.Font $fontSize="16px">
                  - 돈있음: 아이템 10개를 구매하면 달성하며, 1,000 포인트를
                  획득합니다. <br />
                  - 돈많음: 아이템 20개를 구매하면 달성하며, 2,000 포인트를
                  획득합니다. <br />- 부자: 아이템 40개를 구매하면 달성하며,
                  4,000 포인트를 획득합니다.
                </S.Font>
                <S.Font $margin="0.5vw 0 0.5vw 0" color="#FF2525">
                  선물왕
                </S.Font>
                <S.Font $fontSize="16px">
                  - 착함: 선물을 10번 보내면 달성하며, 10,000 포인트를
                  획득합니다. <br />
                  - 엄청착함: 선물을 20번 보내면 달성하며, 20,000 포인트를
                  획득합니다. <br />- 천사: 선물을 40번 보내면 달성하며, 40,000
                  포인트를 획득합니다.
                </S.Font>
                <S.Font $margin="0.5vw 0 0.5vw 0" color="#FF2525">
                  게임왕
                </S.Font>
                <S.Font $fontSize="16px">
                  - 대단함: 가위바위보 게임에서 10번 승리하면 달성하며, 1,000
                  포인트를 획득합니다. <br />
                  - 멋짐: 가위바위보 게임에서 20번 승리하면 달성하며, 2,000
                  포인트를 획득합니다. <br />- 레전드: 가위바위보 게임에서 40번
                  승리하면 달성하며, 4,000 포인트를 획득합니다.
                </S.Font>
              </S.ServiceDescriptionContainer>
            ) : (
              <></>
            )}
            <S.UserInfoContent
              $margin="1vw 0 0 0"
              width="40vw"
              $backColor="#D7E7FF">
              회원 정보
              <S.Arrow
                src={
                  isServiceDescription
                    ? 'https://wang0514.s3.ap-northeast-2.amazonaws.com/page/TopArrow.svg'
                    : 'https://wang0514.s3.ap-northeast-2.amazonaws.com/page/DownArrow.svg'
                }
                onClick={() => {
                  handleArrow('service');
                }}
              />
            </S.UserInfoContent>

            {isServiceDescription ? (
              <S.ServiceDescriptionContainer>
                <S.Font $margin="0.5vw 0 0.5vw 0" color="#FF2525">
                  닉네임
                </S.Font>
                <S.Font $fontSize="16px">닉네임은 바꿀 수 없습니다.</S.Font>
                <S.Font $margin="0.5vw 0 0.5vw 0" color="#FF2525">
                  회원탈퇴
                </S.Font>
                <S.Font $fontSize="16px">
                  30일 이내에 재가입시 기존 아이디가 복구됩니다. <br />
                  회원탈퇴 하러가기
                </S.Font>
              </S.ServiceDescriptionContainer>
            ) : (
              <></>
            )}
          </S.ServiceInfoContainer>
        </S.UserInfoSection>
      </S.Background>
    </>
  );
}
