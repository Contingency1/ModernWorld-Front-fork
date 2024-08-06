'use client';
import * as s from '@/components/my-page/contents/style';
import * as S from '@/components/my-page/contents/neighbor/style';
import NeighborBody from './NeighborBody';
import SideBookMark from './SideBookMark';

export default function Neighbor() {
  return (
    <>
      <s.ContentSection>
        <s.BookMarkBody>
          <NeighborBody></NeighborBody>
          <SideBookMark></SideBookMark>
        </s.BookMarkBody>
      </s.ContentSection>
    </>
  );
}
