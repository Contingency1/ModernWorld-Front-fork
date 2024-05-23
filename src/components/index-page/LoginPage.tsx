import Link from 'next/link';
import * as S from './style';
export default function MainPage() {
    return (
        <S.BackgroundColor style={{ backgroundColor: '#5F6F52' }}>
            <S.MainLogo grid1={40 + '%'} grid2={11 + '%'} grid3={11 + '%'} grid4={11 + '%'}>
                <S.MainLogoText margintop={13} fontSize={500}>
                    모던월드
                </S.MainLogoText>
                <S.LoginBtnLink
                    href="newcharacter"
                    color="#03C75A"
                    textcolor="#ffffff"
                    img_width={'35%'}
                    img_height={'100%'}
                    // img_margin_right={'-1%'}
                    img_margin_left=""
                    font={110}
                >
                    <img src="https://wang0514.s3.ap-northeast-2.amazonaws.com/page/%EB%A1%9C%EA%B7%B8%EC%9D%B8+%EC%95%84%EC%9D%B4%EC%BD%98+%EB%A1%9C%EA%B3%A0+%EB%AA%A8%EC%9D%8C/n%EB%A1%9C%EA%B3%A0-removebg-preview.png"></img>
                    네이버 로그인
                </S.LoginBtnLink>
                <S.LoginBtnLink
                    href="villagedog"
                    color="#FEE500"
                    textcolor="#000000"
                    img_width={'25%'}
                    img_height={'80%'}
                    img_margin_right={'6%'}
                    img_margin_left="4%"
                    font={110}
                >
                    <img src="https://wang0514.s3.ap-northeast-2.amazonaws.com/page/%EB%A1%9C%EA%B7%B8%EC%9D%B8+%EC%95%84%EC%9D%B4%EC%BD%98+%EB%A1%9C%EA%B3%A0+%EB%AA%A8%EC%9D%8C/%EC%B9%B4%EC%B9%B4%EC%98%A4%EB%A1%9C%EA%B3%A0-removebg-preview.png"></img>
                    카카오 로그인
                </S.LoginBtnLink>
                <S.LoginBtnLink
                    href="newcharacter"
                    color="#ffffff"
                    textcolor="#000000"
                    img_width={'15%'}
                    img_height={'50%'}
                    img_margin_right={'4%'}
                    img_margin_left="8%"
                    font={80}
                >
                    <img src="https://wang0514.s3.ap-northeast-2.amazonaws.com/page/%EB%A1%9C%EA%B7%B8%EC%9D%B8+%EC%95%84%EC%9D%B4%EC%BD%98+%EB%A1%9C%EA%B3%A0+%EB%AA%A8%EC%9D%8C/%EA%B5%AC%EA%B8%80%EB%A1%9C%EA%B3%A02-removebg-preview.png"></img>
                    Google 계정으로 로그인
                </S.LoginBtnLink>
            </S.MainLogo>
        </S.BackgroundColor>
    );
}
