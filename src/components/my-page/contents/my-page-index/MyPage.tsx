'use client';

import { useAtom } from 'jotai';
import * as S from './style';
import {
  isLikeModalAtom,
  isMyPageMenuModalAtom,
  userDataAtom,
} from '@/states/userAtoms';
import { useEffect, useState } from 'react';
import { UserLegendsType } from '@/types/user';
import LEGENDS from '@/app/api/legends';
import USER from '@/app/api/user';
import { useRouter } from 'next/navigation';
import MenuModal from './MenuModal';
import LikeModal from './LikeModal';

export default function MyPageIndex() {
  const router = useRouter();
  const [isEditDescription, setIsEditDescription] = useState(false);
  const [editDescriptionText, setEditDescriptionText] = useState('');
  const [indexUserInfo, setIndexUserInfo] = useAtom(userDataAtom);
  const [isProfileClick, setIsProfileClick] = useState(false);
  const [isMenuModal, setIsMenuModal] = useAtom(isMyPageMenuModalAtom);
  const [userLegends, setUserLegends] = useState<null | UserLegendsType>(null);
  const [isAchievementModal, setIsAchievementModal] = useState(false);
  const [isLikeModal, setIsLikeModal] = useAtom(isLikeModalAtom);

  const handleProfileClick = () => {
    setIsProfileClick(!isProfileClick);
  };

  const profileUpdate = async () => {
    if (!window.confirm('프로필 사진을 업데이트 하시겠습니까?')) {
      return;
    }
    const response = await USER.profileUpdate();
    setIndexUserInfo((prev) => ({
      ...prev,
      image: response.userProfileImage,
    }));
  };

  const getUserLegends = async () => {
    const response = await LEGENDS.getUserLegends();
    setUserLegends(response);
  };

  const editDescription = async () => {
    if (editDescriptionText) {
      await USER.editDescription(editDescriptionText);
      setIndexUserInfo((prev) => ({
        ...prev,
        description: editDescriptionText,
      }));
      setIsEditDescription(false);
    }
  };

  const handleOnClickMenu = () => {
    setIsMenuModal(true);
    setIsLikeModal(false);
  };

  const handleOnClickLike = () => {
    setIsLikeModal(true);
    setIsMenuModal(false);
  };

  useEffect(() => {
    getUserLegends();
  }, [isEditDescription]);

  const handleDescriptionChange = (event: any) => {
    setEditDescriptionText(event.target.value);
  };

  return (
    <>
      {isMenuModal ? <MenuModal /> : <></>}
      {isLikeModal ? <LikeModal /> : <></>}
      <S.Background>
        <S.Font
          $margin="1vh 1vw 0 auto"
          $fontSize="30px"
          color="#A1B1B7"
          cursor="pointer"
          onClick={handleOnClickMenu}>
          ☰
        </S.Font>
        <S.UserInfoSection>
          <S.UserImageContainer
            onClick={handleProfileClick}
            isProfileClick={isProfileClick}>
            <img src={indexUserInfo.image} alt="User Profile" />
            {isProfileClick && (
              <div className="button-container">
                <div onClick={() => profileUpdate()}>이미지 업데이트</div>
                <div onClick={() => router.push('/my-page/service-info')}>
                  서비스 정보
                </div>
              </div>
            )}
          </S.UserImageContainer>
          <S.UserInfoContentSection>
            <S.UserInfoContent
              width="8vw"
              $backColor="#FFDEDE"
              $textAlign="center">
              닉 네 임
            </S.UserInfoContent>
            <S.UserInfoContent width="30vw" $backColor="#FFDEDE">
              {indexUserInfo.nickname ??
                indexUserInfo.socialName ??
                '이름 없음'}
              <S.Font
                $fontSize="16px"
                color="#FF3131"
                $margin="0 0.5vw"
                cursor="pointer"
                onClick={() => router.push('/my-page/achievement-settings')}
                onMouseEnter={() => setIsAchievementModal(true)}
                onMouseLeave={() => setIsAchievementModal(false)}>
                (
                {isAchievementModal
                  ? '업적 설정 페이지 이동'
                  : indexUserInfo.userAchievement[0]?.achievement?.title
                    ? indexUserInfo.userAchievement[0]?.achievement?.title
                    : '업적 없음'}
                )
              </S.Font>
            </S.UserInfoContent>
          </S.UserInfoContentSection>
          <S.UserInfoContentSection $marginTop="16vh">
            <S.UserInfoContent
              width="8vw"
              $backColor="#D7E7FF"
              $textAlign="center">
              자기소개
            </S.UserInfoContent>
            {isEditDescription ? (
              <>
                <S.EditInput
                  defaultValue={
                    indexUserInfo.description
                      ? indexUserInfo.description
                      : '자기소개 없음'
                  }
                  onChange={handleDescriptionChange}
                  width="30vw"
                  $backColor="#D7E7FF"
                />
                <S.EditText
                  onClick={() => {
                    editDescription();
                    setIsEditDescription(false);
                  }}>
                  수정
                </S.EditText>
              </>
            ) : (
              <S.UserInfoContent
                width="30vw"
                $backColor="#D7E7FF"
                onClick={() => setIsEditDescription(true)}>
                {indexUserInfo.description
                  ? indexUserInfo.description
                  : '자기소개 없음'}
              </S.UserInfoContent>
            )}
          </S.UserInfoContentSection>
        </S.UserInfoSection>
        <S.StatSection>
          <S.StatBadge onClick={handleOnClickLike}>
            좋아요
            <S.AccentText>
              {userLegends?.likeCount ? userLegends.likeCount : '0'}
            </S.AccentText>
          </S.StatBadge>
          <S.StatBadge onClick={() => router.push('/my-page/daily-check')}>
            출석
            <S.AccentText>
              {userLegends?.attendanceCount ? userLegends.attendanceCount : '0'}
            </S.AccentText>
          </S.StatBadge>

          <S.StatBadge onClick={() => router.push('/game/rockscissorspaper')}>
            게임
            <S.AccentText>
              {userLegends?.RSPWinCount ? userLegends.RSPWinCount : '0'}
            </S.AccentText>
          </S.StatBadge>
        </S.StatSection>
      </S.Background>
    </>
  );
}
