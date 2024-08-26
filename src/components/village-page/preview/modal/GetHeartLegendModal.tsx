import * as S from '@/components/village-page/preview/modal/styled';
import GetUsersNickname from './GetUsersNickname';

const GetHearLegendtModal = ({
  userNo,
  isModal,
  closeModal,
}: {
  userNo: number;
  isModal: boolean;
  closeModal: () => void;
}) => {
  const handleModalClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  return (
    <>
      {isModal && (
        <S.RootDiv onClick={closeModal}>
          <S.ModalRootDiv onClick={handleModalClick}>
            <S.TitleDiv>좋아요</S.TitleDiv>
            <S.CloseButton onClick={closeModal}>x</S.CloseButton>
            <S.LikeListRootDiv>
              <GetUsersNickname userNo={userNo}></GetUsersNickname>
            </S.LikeListRootDiv>
          </S.ModalRootDiv>
        </S.RootDiv>
      )}
    </>
  );
};

export default GetHearLegendtModal;
