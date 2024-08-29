'use client';

const getUserNo = () => {
  if (typeof window !== undefined) {
    const userNo = Number(localStorage.getItem('userNo'));
    return userNo;
  }
};

export const ALARMS = {
  방명록: `/previewVillageUsers/${getUserNo()}`,
  게임: '',
  좋아요: `/previewVillageUsers/${getUserNo()}`,
  이웃: '/my-page/neighbor',
  쪽지: '/my-page/mailbox',
  선물: '/my-page/mailbox',
  업적: '/my-page/achievement-settings',
};
