import NewCharacterHook from './NewCharacterHook';
import NewNicknameCondition from './NewNicknameCondition';
import * as S from './style';

export default function NewCharacter() {
  return (
    <S.BackgroundColor
      backColor="#5F6F52"
      display="flex"
      flexDirection="column"
      alignItems="center">
      <S.CreateCharacterText>캐릭터를 생성하세요!</S.CreateCharacterText>
      <S.InfoNewCharacter>
        <img src="https://wang0514.s3.ap-northeast-2.amazonaws.com/page/warning-icon.svg"></img>
        <br />
        모던월드에서 당신을 투영할 캐릭터를 생성합니다.
        <br /> 기본 캐릭터가 마음에 들지 않는다고 해서 너무 상심하지 마세요.{' '}
        <br />
        상점에서 다른 캐릭터로 변경이 가능합니다. <br />
        모쪼록 생성한 캐릭터와 행복한 시간 보내시길 바랍니다.
      </S.InfoNewCharacter>
      <S.ChoiseCharacterBox>
        <S.InputNicknameBox>
          <S.TextNickname> 닉 네 임 ㅣ </S.TextNickname>
        </S.InputNicknameBox>
        <NewNicknameCondition></NewNicknameCondition>

        <NewCharacterHook></NewCharacterHook>

        <S.ShowFirstCharacterBox display="flex"></S.ShowFirstCharacterBox>
        <S.WarningText>
          동물은 한 번 선택 시 추후에도 동일한 동물 종류로만 캐릭터 변경이
          가능합니다.
        </S.WarningText>

        <S.startButton href="/my-page">시작하기</S.startButton>
      </S.ChoiseCharacterBox>
    </S.BackgroundColor>
  );
}
