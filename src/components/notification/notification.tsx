'use client';

import { useEffect, useState } from 'react';
import * as S from './style';

const Notification = (props: { message: any }) => {
  const [modalTimeOut, setModalTimeOut] = useState<boolean>(true);

  useEffect(() => {
    setModalTimeOut(true);
    const timeOutId = setTimeout(function () {
      setModalTimeOut(false);
    }, 3000);
    return () => clearTimeout(timeOutId);
  }, [props.message]);

  return (
    <S.NotificationDiv display={true}>
      알람이 왔어용 : {modalTimeOut ? props.message : null}
    </S.NotificationDiv>
  );
};

export default Notification;
