import Link from 'next/link';
import * as S from './styled';
import '../../style/globals.css';

export const Not_found = () => {
  return (
    <S.RootDiv>
      <S.Div404>404 NOT FOUND</S.Div404>
      <Link
        href="/"
        style={{ textDecoration: 'none', marginTop: '5vh', color: 'inherit' }}>
        -처음 페이지로 돌아가기-
      </Link>
    </S.RootDiv>
  );
};
