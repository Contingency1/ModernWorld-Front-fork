'use client';

import { dotPulse } from 'ldrs';
import * as S from '../styled';

const BotSection = () => {
  dotPulse.register();
  return (
    <S.SectionRootDiv>
      <S.ProfileCircle>
        <S.ProfileImg
          src={
            'https://mblogthumb-phinf.pstatic.net/MjAyMDEyMTNfMjY0/MDAxNjA3ODM0MjQzMDk5.SgFYR0v0NDHgoTV0sHfUxFS9FgupVORHLXXrxm5s5aIg.yPHF3-fup-DLH_WdL4gyj4obs_QnSLQ6Z00ysyY5cpIg.GIF.no1yoongoo/1518423358575.gif?type=w800'
          }></S.ProfileImg>
      </S.ProfileCircle>
      <S.UserNameDiv>상대 (봇)</S.UserNameDiv>
      <S.LoadingDiv>
        <l-dot-pulse size="43" speed="1.3" color="black"></l-dot-pulse>
      </S.LoadingDiv>
    </S.SectionRootDiv>
  );
};

export default BotSection;
