import * as S from '../styled';
import BotSection from './BotSection';
import MiddleSection from './MiddleSection';
import UserSection from './UserSection';

const RockScissorsPaper = ({ timer }: { timer: any }) => {
  return (
    <S.BackGroundDiv>
      <BotSection></BotSection>
      <MiddleSection timer={timer}></MiddleSection>
      <UserSection></UserSection>
    </S.BackGroundDiv>
  );
};

export default RockScissorsPaper;
