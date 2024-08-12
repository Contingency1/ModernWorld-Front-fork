'use client';

import { StyleType } from '@/types/style';
import styled from 'styled-components';

const IconSircleShadowValue = 'inset 1px 1.5px 4px rgba(0, 0, 0, 0.5)';

export const BackGroundDiv = styled.div<StyleType>`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: ${(props) => props.$flexDirection};
`;

export const TopDiv = styled.div`
  width: 100vw;
  height: 50vh;
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const BottomDiv = styled.div`
  width: 100vw;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #d9d9d9;
  flex-direction: column;
`;

export const HandAndShadowDiv = styled.div<StyleType>`
  margin-top: ${(props) => props.$marginTop};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 1000;
`;

export const HandImg = styled.img`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

export const ShadowImg = styled.img`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin-bottom: 60%;
`;

export const Flexdiv = styled.div<StyleType>`
  margin-top: ${(props) => props.$marginTop};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: ${(props) => props.$justifyContent};
`;

export const RockSicssorsPapreDiv = styled.div`
  width: 50%;
  height: 25%;
  text-align: center;
  font-size: 6.5cap;
  margin-bottom: 6%;
`;

export const PowerImg = styled.img`
  width: 80px;
  height: 80px;
  margin-bottom: 3%;
  filter: drop-shadow(4px 3px 0.3px #a9a9a9);
  cursor: pointer;
`;

/**
 * 게임페이지
 */

export const SectionRootDiv = styled.div<StyleType>`
  width: 20vw;
  height: 100vh;
  background-color: #ececec;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  right: ${(props) => props.$right};
`;

export const ProfileCircle = styled.div`
  width: 11vw;
  height: 11vw;
  background-color: #ffffff;
  border-radius: 50%;
  margin-top: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: inset 1px 1.5px 4px rgba(0, 0, 0, 0.5);
`;

export const ProfileImg = styled.img`
  width: 9vw;
  height: 9vw;
  border-radius: 50%;
`;

export const UserNameDiv = styled.div`
  width: 13vw;
  height: 6.4vh;
  background-color: #d9d9d9;
  margin-top: 7%;
  font-size: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: inset 0px 1.5px 2px rgba(0, 0, 0, 0.5);
`;

export const LoadingDiv = styled.div`
  margin-top: 50%;
`;

export const IconSircle = styled.div<StyleType>`
  width: 6vw;
  height: 6vw;
  border-radius: 50%;
  background-color: ${(props) => (props.$check ? '#D9D9D9' : '#ffffff')};
  box-shadow: ${(props) => (props.$check ? IconSircleShadowValue : 'none')};
  margin-top: 9%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  filter: drop-shadow(0px 3px 0.3px #a9a9a9);
  /* &:hover {
    background-color: #d9d9d9;
    box-shadow: inset 1px 1.5px 4px rgba(0, 0, 0, 0.5);
  } */
`;

export const IconBackColor = styled.div`
  width: 80%;
  height: 80%;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ececec;
`;

export const IconImg = styled.img`
  width: 5vw;
  height: 5vw;
  border-radius: 50%;
`;

/**
 * 게임 정보 섹션
 */
export const GameInfoRootDiv = styled.div<StyleType>`
  pointer-events: ${(props) => (!props.$pointerClick ? 'auto' : 'none')};
  width: 60vw;
  height: 100vh;
`;

export const GameInfoHeader = styled.div`
  margin-left: 20vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 60vw;
  height: 19vh;
  background-color: #d9d9d9;
`;

export const GameInfoBody = styled.div<StyleType>`
  margin-left: 20vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 60vw;
  height: 81vh;
  pointer-events: ${(props) => (!props.$pointerClick ? null : 'none')};
`;

export const CountText = styled.div`
  width: 3vw;
  height: 12vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #464646;
  font-size: 4em;
  margin-bottom: 5vh;
`;

export const IfYouDontPlayText = styled.div`
  width: 42vw;
  height: 6vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ff5454;
  font-size: 4cap;
  margin-bottom: 10vh;
`;

export const ShowRecordText = styled.div`
  position: absolute;
  cursor: pointer;
  bottom: 30%;
  right: 30%;
  color: #2e53b8;
`;

export const ChanceText = styled.div`
  position: absolute;
  left: 22%;
  bottom: 4.5%;
  width: 13vw;
  height: 3vh;
`;

export const ExistImg = styled.img<StyleType>`
  position: absolute;
  bottom: 1.5%;
  right: 21%;
  width: 3vw;
  height: 5vh;
  ${(props) => (!props.$pointerClick ? 'auto' : 'none')};
`;

/**
 * 전적 컴포넌트
 */

export const RecordRootDiv = styled.div<StyleType>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 43.5vw;
  height: 48.9vh;
  filter: drop-shadow(2px 2px 2px #a9a9a9);
  background-color: #fffff9;
  border-radius: 15px;
  margin-bottom: 5%;
`;

export const RecordHeader = styled.div`
  width: 43vw;
  height: 8.4vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #d9d9d9;
  border-radius: 15px 15px 0 0;
`;

export const InputDateTodayMatchDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 15vw;
`;

export const TodayMatch = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 40%;
  font-size: 1.5em;
`;

export const InputDate = styled.input<StyleType>`
  border-radius: 10px;
  box-shadow: inset 0px 3px 3px rgba(100, 100, 100, 0.5);
  width: 4vw;
  height: 5vh;
  outline: none;
  border-width: 0;
  text-align: center;
  margin-right: 10px;
  pointer-events: ${(props) => (!props.$pointerClick ? 'auto' : 'none')};
  &::placeholder {
    color: #000000;
    font-size: 16px;
  }
`;

export const RetryText = styled.div<StyleType>`
  width: 10%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10vw;
  color: #2e53b8;
  font-size: 0.7em;
  pointer-events: ${(props) => (!props.$pointerClick ? 'auto' : 'none')};
  cursor: pointer;
`;

export const RecordBody = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 1%;
  width: 43vw;
  height: 38.6vh;
  background-color: #d9d9d9;
  border-radius: 0 0 15px 15px;
`;

export const RecordText = styled.span`
  font-size: 1.1em;
  color: ${(props) => props.color};
`;

export const ArrowImg = styled.img`
  width: 2vw;
  height: 2vw;
  cursor: pointer;
`;

export const UserAndBotText = styled.div`
  width: 2vw;
  height: 2vw;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1em;
`;

export const Line = styled.div`
  border-left: 0.33vw solid #000000;
  height: 34vh;
`;

export const RecordLegendDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  line-height: 3.7vh;
  width: 3vw;
  height: 37vh;
  font-size: 0.7em;
`;

export const BotAndUserRecordDiv = styled.div`
  width: 10vw;
  height: 37vh;
  display: grid;
  place-items: center;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
`;

export const ScoreDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 23vw;
  height: 37vh;
`;
