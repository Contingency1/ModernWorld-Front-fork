import * as S from './style';

export default function NewCharacter() {
    return (
        <S.BackgroundColor backgroundcolor="#5F6F52" display="flex" flexdirection="column" alignitems="center">
            <S.CreateCharacterText>캐릭터를 생성하세요!</S.CreateCharacterText>
            <S.InfoNewCharacter>
                <img src="https://wang0514.s3.ap-northeast-2.amazonaws.com/page/warning-icon.svg"></img>
                <br />
                모모던월드에서 당신을 투영할 캐릭터를 생성합니다.
                <br /> 기본 캐릭터가 마음에 들지 않는다고 해서 너무 상심하지 마세요. <br />
                상점에서 다른 캐릭터로 변경이 가능합니다. <br />
                모쪼록 생성한 캐릭터와 행복한 시간 보내시길 바랍니다.
            </S.InfoNewCharacter>
            <S.ChoiseCharacterBox display="flex" flexdirection="column" alignitems="center">
                <S.InputNicknameBox> 닉 네 임</S.InputNicknameBox>
                <S.ShowFirstCharacterBox display="flex">
                    <S.LeftArrow>
                        <img src="https://wang0514.s3.ap-northeast-2.amazonaws.com/items/ArrowLeft.png"></img>
                    </S.LeftArrow>
                    <img src="https://wang0514.s3.ap-northeast-2.amazonaws.com/items/firstCat.png"></img>
                    <img src="https://wang0514.s3.ap-northeast-2.amazonaws.com/items/firstDog.png"></img>
                    <S.RightArrow>
                        <img src="https://wang0514.s3.ap-northeast-2.amazonaws.com/items/ArrowRight.png"></img>
                    </S.RightArrow>
                </S.ShowFirstCharacterBox>
            </S.ChoiseCharacterBox>
        </S.BackgroundColor>
    );
}
