'use client';

import { useEffect, useState } from 'react';
import RockScissorsPaper from './RockScissorsPaper';

const Timer = () => {
  const [timer, setTimer] = useState(3);

  const CountDown = setTimeout(() => {
    setTimer(timer - 1);
  }, 1000);

  useEffect(() => {
    timer === 0 ? clearTimeout(CountDown) : CountDown;
  }, [timer]);

  console.log(timer);

  return <RockScissorsPaper timer={timer}></RockScissorsPaper>;
};

export default Timer;
