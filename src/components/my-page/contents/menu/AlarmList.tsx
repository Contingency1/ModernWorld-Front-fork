import { OneAlarmData } from '@/types/alarm';
import * as S from './style';
import ALARM from '@/app/api/Alarms';
import { useSetAtom } from 'jotai';
import { deleteAlarmAtom } from '@/states/userAtoms';

export default function AlarmList(props: {
  color: string;
  data: OneAlarmData;
}) {
  const setDelAlarm = useSetAtom(deleteAlarmAtom);
  const handleDel = async () => {
    const response = await ALARM.delAlarm(props.data.no);
    setDelAlarm(props.data.no);
  };
  return (
    <>
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
            {props.data.createdAt.replace('T', ' ').slice(0, 19)}
          </S.Font>
        </S.AlarmListEleBox>
        <S.AlarmListEleBox
          width="2vw"
          $backColor={props.color}
          cursor="pointer">
          <S.Img
            src="https://wang0514.s3.ap-northeast-2.amazonaws.com/page/trash.png"
            width="1.5vw"
            opacity="0.7"
            onClick={handleDel}></S.Img>
        </S.AlarmListEleBox>
      </S.DisplayDiv>
    </>
  );
}
