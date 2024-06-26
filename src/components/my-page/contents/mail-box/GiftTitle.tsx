import * as S from '@/components/my-page/contents/mail-box/style';

export default function GiftTitle(props: { title: string }) {
    return (
        <>
            <S.MarginDiv margin="0.5vh 0 1vh 0" fontSize="28px">
                {props.title} 선물 (3)
            </S.MarginDiv>
            <S.UserInfo>
                <img
                    src="https://wang0514.s3.ap-northeast-2.amazonaws.com/page/gift-icon.png"
                    alt="gift"
                    width="20vw"
                />
                <S.MarginDiv margin="1vw">재진 님에게 보냈습니다.</S.MarginDiv>
            </S.UserInfo>
        </>
    );
}
