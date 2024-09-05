'use client';
import { useAtomValue, useSetAtom } from 'jotai';
import * as S from './style';
import { deleteAlarmAtom, isAlarmModalAtom } from '@/states/userAtoms';
import AlarmList from './AlarmList';
import ALARM from '@/app/api/Alarms';
import { useEffect, useState } from 'react';
import { AlarmsData, AlarmsMetaData } from '@/types/alarm';
import { IMAGE } from '@/utils/image';

export default function AlarmModal() {
  const setIsAlarmModal = useSetAtom(isAlarmModalAtom);
  const [page, setPage] = useState(1);
  const [alarmData, setAlarmData] = useState<AlarmsData[] | null>(null);
  const [metaData, setMetaData] = useState<AlarmsMetaData | null>(null);
  const delAlarm = useAtomValue(deleteAlarmAtom);

  const getAlarms = async () => {
    const response = await ALARM.getAlarm(page);
    setAlarmData(response.data);
    setMetaData(response.meta);
  };

  useEffect(() => {
    getAlarms();
  }, [page, delAlarm]);

  const handlePagination = (direction: 'prev' | 'next') => {
    if (direction === 'prev' && page > 1) {
      setPage(page - 1);
    } else if (direction === 'next' && metaData && page < metaData.totalPage) {
      setPage(page + 1);
    }
  };

  return (
    <S.MenuModalBody $margin="0 0 0 1vw">
      <S.RightModalExit onClick={() => setIsAlarmModal(false)}>
        x
      </S.RightModalExit>
      <S.DisplayDiv
        $justifyContent="center"
        $alignItems="center"
        $flexDirection="column">
        <S.ButtonUi $defaultOpacity="1" $margin="1.5vw 0 0 0" $cursor="default">
          <S.UiImg src={IMAGE.alarm} />
          알람 목록 확인하기
        </S.ButtonUi>
        <S.ContentContainer>
          <S.Margin $margin="-2vw 0 0 0">
            {alarmData && alarmData.length !== 0 ? (
              alarmData.map((item, index) => (
                <AlarmList
                  key={item.no}
                  color={index % 2 === 0 ? '#fff' : '#EFEFEF'}
                  data={item}
                />
              ))
            ) : (
              <S.Font color="#747778">알람 목록이 비어있습니다.</S.Font>
            )}
          </S.Margin>
          <S.DisplayDiv flex="row" $margin="18.7vw 0 0 0" position="fixed">
            <S.Img
              src={IMAGE.leftArrow}
              alt="<"
              width="1vw"
              $margin="0 8vw 0 0"
              opacity="0.5"
              cursor="pointer"
              onClick={() => handlePagination('prev')}
            />
            <S.Font $fontSize="18px" color="#7F7F7F">
              {page} / {metaData?.totalPage}
            </S.Font>
            <S.Img
              src={IMAGE.rightArrow}
              alt=">"
              width="1vw"
              $margin="0 0 0 8vw"
              opacity="0.5"
              cursor="pointer"
              onClick={() => handlePagination('next')}
            />
          </S.DisplayDiv>
        </S.ContentContainer>
      </S.DisplayDiv>
    </S.MenuModalBody>
  );
}
