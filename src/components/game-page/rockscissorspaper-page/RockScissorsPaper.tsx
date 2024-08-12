import * as S from '../styled';
import BotSection from './BotSection';
import MiddleSection from './MiddleSection';
import UserSection from './UserSection';

const RockScissorsPaper = () => {
  return (
    <S.BackGroundDiv>
      <BotSection></BotSection>
      <MiddleSection></MiddleSection>
      <UserSection></UserSection>
    </S.BackGroundDiv>
  );
};

export default RockScissorsPaper;
