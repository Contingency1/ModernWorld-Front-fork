import { StyledMainLogo } from '@/components/atoms/StyledMainLogo';
import Link from 'next/link';
import { StyledMainLogoText } from '../atoms/StyledMainLogoText';
import { StyledLoginBtn } from '../atoms/StyledLoginBtn';
import { StyledBackgroundColor } from '../atoms/StyledBackgroundColor';
export default function MainPage() {
    return (
        <StyledBackgroundColor backgroundcolor="#5F6F52">
            <StyledMainLogo grid1={40 + '%'} grid2={10 + '%'} grid3={10 + '%'} grid4={10 + '%'}>
                <StyledMainLogoText margintop={230} fontSize={5}>
                    모던월드
                </StyledMainLogoText>
                <StyledLoginBtn
                    url={
                        'https://wang0514.s3.ap-northeast-2.amazonaws.com/page/%EB%A1%9C%EA%B7%B8%EC%9D%B8+%EC%95%84%EC%9D%B4%EC%BD%98+%EB%AA%A8%EC%9D%8C/ko/kakao_login_medium_narrow.png'
                    }
                ></StyledLoginBtn>
                <StyledLoginBtn
                    url={
                        'https://wang0514.s3.ap-northeast-2.amazonaws.com/page/%EB%A1%9C%EA%B7%B8%EC%9D%B8+%EC%95%84%EC%9D%B4%EC%BD%98+%EB%AA%A8%EC%9D%8C/2021_Login_with_naver_guidelines_Kr/btnG_%EC%99%84%EC%84%B1%ED%98%95.png'
                    }
                ></StyledLoginBtn>
                <StyledLoginBtn
                    url={
                        'https://wang0514.s3.ap-northeast-2.amazonaws.com/page/%EB%A1%9C%EA%B7%B8%EC%9D%B8+%EC%95%84%EC%9D%B4%EC%BD%98+%EB%AA%A8%EC%9D%8C/png%401x/light/web_light_sq_SU%401x.png'
                    }
                ></StyledLoginBtn>
                <Link href="/main">로그인 했다 치고</Link>
            </StyledMainLogo>
        </StyledBackgroundColor>
    );
}
