import { MainLogo } from '@/components/atoms/MainLogo';
import { MainLogoText } from '@/components/atoms/MainLogoText';
import { MainPowerBtn } from '@/components/atoms/MainPowerBtn';
import Link from 'next/link';
import { BackgroundColor } from '../globalStyle/BackgroundColor';
export default function LoginPage() {
    return (
        <BackgroundColor backgroundcolor="#5F6F52">
            <MainLogo grid1={40 + '%'} grid2={30 + '%'} grid3={30 + '%'}>
                <MainLogoText margintop={230} fontSize={5}>
                    모던월드
                </MainLogoText>
                <MainLogoText fontSize={2}>님 환영합니다 :)</MainLogoText>
                <Link href="/">
                    <MainPowerBtn width={80} height={80}></MainPowerBtn>
                </Link>
            </MainLogo>
        </BackgroundColor>
    );
}
