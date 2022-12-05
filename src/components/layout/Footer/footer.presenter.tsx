import AppStore from "../../commons/svg/appStore";
import GooglePlay from "../../commons/svg/googlePlay";
import * as S from "./footer.styles";

const FooterUi = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.FooterTop>
          <S.FooterNav>
            <S.FooterUl>
              <S.FooterLi>중고거래</S.FooterLi>
              <S.FooterLi>동네거래</S.FooterLi>
              <S.FooterLi>당근알바</S.FooterLi>
            </S.FooterUl>
            <S.FooterUl>
              <S.FooterLi>당근 비즈니스</S.FooterLi>
              <S.FooterLi>채팅하기</S.FooterLi>
            </S.FooterUl>
            <S.FooterUl>
              <S.FooterLi>자주 묻는 질문</S.FooterLi>
              <S.FooterLi>회사 소개</S.FooterLi>
              <S.FooterLi>인재 채용</S.FooterLi>
            </S.FooterUl>
          </S.FooterNav>
          <S.AppBox>
            <S.AppBoxTitle>당근마켓 앱 다운로드</S.AppBoxTitle>
            <S.DownloadBtnBox>
              <S.DownloadBtn>
                <AppStore />
              </S.DownloadBtn>
              <S.DownloadBtn>
                <GooglePlay />
              </S.DownloadBtn>
            </S.DownloadBtnBox>
          </S.AppBox>
        </S.FooterTop>
      </S.Container>
    </S.Wrapper>
  );
};

export default FooterUi;
