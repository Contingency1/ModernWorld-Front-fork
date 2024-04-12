import * as S from './style';

export default function NewCharacter() {
    return (
        <S.BackgroundColor backgroundcolor="#5F6F52">
            <S.CreateCharacterText>캐릭터를 생성하세요!</S.CreateCharacterText>
            <S.InfoNewCharacter>
                <img src="https://wang0514.s3.ap-northeast-2.amazonaws.com/page/warning-icon.svg"></img>
                <br />
                모모던월드에서 당신을 투영할 캐릭터를 생성합니다.
                <br /> 기본 캐릭터가 마음에 들지 않는다고 해서 너무 상심하지 마세요. <br />
                상점에서 다른 캐릭터로 변경이 가능합니다. <br />
                모쪼록 생성한 캐릭터와 행복한 시간 보내시길 바랍니다.
            </S.InfoNewCharacter>
            <S.ChoiseCharacterBox></S.ChoiseCharacterBox>
        </S.BackgroundColor>
    );
}
