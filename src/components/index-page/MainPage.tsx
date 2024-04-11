import { MainLogo } from "@/components/index-page/MainLogo";
import { MainLogoText } from "@/components/index-page/MainLogoText";
import { MainPowerBtn } from "@/components/index-page/MainPowerBtn";
import Link from "next/link";
import * as S from "./style";
export default function LoginPage() {
  return (
    <S.BackgroundColor backgroundcolor="#5F6F52">
      <MainLogo grid1={40 + "%"} grid2={30 + "%"} grid3={30 + "%"}>
        <MainLogoText margintop={230} fontSize={5}>
          모던월드
        </MainLogoText>
        <MainLogoText fontSize={2}>님 환영합니다 :)</MainLogoText>
        <Link href="/">
          <MainPowerBtn width={80} height={80}></MainPowerBtn>
        </Link>
      </MainLogo>
    </S.BackgroundColor>
  );
}
