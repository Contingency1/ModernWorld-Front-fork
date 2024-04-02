import { StyledMainLogo } from '@/components/atoms/StyledMainLogo';
import { StyledMainLogoText } from '@/components/atoms/StyledMainLogoText';
import { StyledMainPowerBtn } from '@/components/atoms/StyledMainPowerBtn';
import Link from 'next/link';
import { StyledBackgroundColor } from '../atoms/StyledBackgroundColor';
export default function LoginPage() {
    return (
        <StyledBackgroundColor backgroundcolor="#5F6F52">
            <StyledMainLogo grid1={33 + '%'} grid2={30 + '%'} grid3={50 + '%'}>
                <StyledMainLogoText margintop={230} fontSize={5}>
                    모던월드
                </StyledMainLogoText>
                <StyledMainLogoText fontSize={2}>님 환영합니다 :)</StyledMainLogoText>
                <Link href="/">
                    <StyledMainPowerBtn width={150} height={150}></StyledMainPowerBtn>
                </Link>
            </StyledMainLogo>
        </StyledBackgroundColor>
    );
}
