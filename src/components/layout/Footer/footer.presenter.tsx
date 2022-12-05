import AppStore from "../../commons/svg/appStore";
import Blog from "../../commons/svg/blog";
import Facebook from "../../commons/svg/facebook";
import GooglePlay from "../../commons/svg/googlePlay";
import Instagram from "../../commons/svg/instagram";
import Youtube from "../../commons/svg/youtube";
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
        <S.FooterBottom>
          <S.FooterInfoBox>
            <S.FooterInfo1Box>
              <S.FooterInfo1>
                <span>대표</span> 조일일, 조이이 | <span>사업자번호</span>{" "}
                000-00-00088
              </S.FooterInfo1>
              <S.FooterInfo1>
                <span>직업정보제공사업 신고번호</span> 2022-서울성동-0000
              </S.FooterInfo1>
              <S.FooterInfo1>
                <span>주소</span> 서울특별시 성동구 뚝섬로 3길 6
              </S.FooterInfo1>
              <S.FooterInfo1>
                <span>전화</span> 010-9774-3591 | <span>고객문의</span>{" "}
                cjt3591@gmail.com
              </S.FooterInfo1>
            </S.FooterInfo1Box>
            <S.FooterInfo2Box className="mb16">
              <S.FooterInfoLink>제휴 문의</S.FooterInfoLink>
              <S.FooterInfoLink>광고 문의</S.FooterInfoLink>
              <S.FooterInfoLink>PR 문의</S.FooterInfoLink>
              <S.FooterInfoLink>IR 문의</S.FooterInfoLink>
            </S.FooterInfo2Box>
            <S.FooterInfo2Box>
              <S.FooterInfoLink>이용약관</S.FooterInfoLink>
              <S.FooterInfoLink>개인정보처리방침</S.FooterInfoLink>
              <S.FooterInfoLink>위치기반서비스 이용약관</S.FooterInfoLink>
              <S.FooterInfoLink>이용자보호 비전과 계획</S.FooterInfoLink>
            </S.FooterInfo2Box>
          </S.FooterInfoBox>
          <S.SnsBtnBox>
            <S.SnsBtn>
              <Facebook />
            </S.SnsBtn>
            <S.SnsBtn>
              <Instagram />
            </S.SnsBtn>
            <S.SnsBtn>
              <Youtube />
            </S.SnsBtn>
            <S.SnsBtn>
              <Blog />
            </S.SnsBtn>
          </S.SnsBtnBox>
        </S.FooterBottom>
      </S.Container>
    </S.Wrapper>
  );
};

export default FooterUi;
