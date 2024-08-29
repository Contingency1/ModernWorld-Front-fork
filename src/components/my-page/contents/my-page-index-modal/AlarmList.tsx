'use client';

import { OneAlarmData } from '@/types/alarm';
import * as S from './style';
import ALARM from '@/app/api/Alarms';
import { useSetAtom } from 'jotai';
import { deleteAlarmAtom, isMyPageMenuModalAtom } from '@/states/userAtoms';
import { getFormattedDate } from '@/utils/date';
import { IMAGE } from '@/utils/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function AlarmList(props: {
  color: string;
  data: OneAlarmData;
}) {
  const getUserNo = () => {
    if (typeof window !== undefined) {
      const number = Number(localStorage.getItem('userNo'));
      setUserNo(number);
    }
  };

  const setDelAlarm = useSetAtom(deleteAlarmAtom);
  const setIsMenuModal = useSetAtom(isMyPageMenuModalAtom);
  const handleDel = async () => {
    const response = await ALARM.delAlarm(props.data.no);
    setDelAlarm(props.data.no);
  };
  const [userNo, setUserNo] = useState(0);
  const ALARMS = {
    방명록: `/previewVillageUsers/${userNo}`,
    게임: '',
    좋아요: `/previewVillageUsers/${userNo}`,
    이웃: '/my-page/neighbor',
    쪽지: '/my-page/mailbox',
    선물: '/my-page/mailbox',
    업적: '/my-page/achievement-settings',
  };

  const alarmLink = ALARMS[props.data.title as keyof typeof ALARMS] || '';

  useEffect(() => {
    getUserNo();
  }, []);

  return (
    <>
      <Link
        style={{ textDecoration: 'none' }}
        href={alarmLink}
        onClick={() => {
          !alarmLink && confirm('알람창을 닫을까요?') && setIsMenuModal(false);
        }}>
        <S.DisplayDiv flex="row" $margin="0.5vw 0">
          <S.AlarmListEleBox
            width="4vw"
            $margin="0 0.5vw 0 0"
            $backColor={props.color}
            cursor="default">
            {props.data.title}
          </S.AlarmListEleBox>
          <S.AlarmListEleBox
            width="13.5vw"
            $margin="0 0.5vw 0 0"
            $backColor={props.color}
            cursor="pointer">
            {props.data.content}
            <S.Font
              position="absolute"
              $fontSize="10px"
              color="#C8C8C8"
              $margin="1.8vw -6.4vw 0 0">
              {getFormattedDate(props.data.createdAt)}
            </S.Font>
          </S.AlarmListEleBox>
          <S.AlarmListEleBox
            width="2vw"
            $backColor={props.color}
            cursor="pointer">
            <S.Img
              src={IMAGE.trashBox}
              width="1.5vw"
              opacity="0.7"
              onClick={handleDel}></S.Img>
          </S.AlarmListEleBox>
        </S.DisplayDiv>
      </Link>
    </>
  );
}
