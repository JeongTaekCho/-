import styled from "@emotion/styled";

export const Wrapper = styled.footer`
  width: 100%;
  padding: 4.8rem 0 10rem;
  border-top: 1px solid #eaebee;
`;

export const Container = styled.div`
  width: 768px;
  margin: 0 auto;
`;

export const FooterTop = styled.div`
  width: 100%;
  padding-bottom: 4.8rem;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #eaebee;
`;

export const FooterNav = styled.nav`
  width: 60%;
  display: flex;
`;

export const FooterUl = styled.ul`
  width: 33.3%;
  display: flex;
  flex-direction: column;
`;

export const FooterLi = styled.li`
  margin-bottom: 1.6rem;
  font-size: 1.4rem;
  color: #212124;
  font-weight: 400;
  cursor: pointer;
`;

export const AppBox = styled.div`
  width: 40%;
`;

export const AppBoxTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  color: #212124;
  margin-bottom: 1rem;
`;

export const DownloadBtnBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DownloadBtn = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  padding: 0;
`;

export const FooterBottom = styled.div`
  width: 100%;
  padding-top: 2.4rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const FooterInfoBox = styled.div``;

export const FooterInfo1Box = styled.div`
  margin-bottom: 1.6rem;
`;

export const FooterInfo1 = styled.p`
  font-size: 1.3rem;
  font-weight: 400;
  color: #868b94;
  line-height: 1.5;
  span {
    font-weight: 600;
  }
`;

export const FooterInfo2Box = styled.div`
  display: flex;
  gap: 1rem;
  &.mb16 {
    margin-bottom: 1.6rem;
  }
`;

export const FooterInfoLink = styled.button`
  font-size: 1.2rem;
  font-weight: 600;
  color: #868b94;
  border: none;
  background: none;
  cursor: pointer;
  padding: 0;
`;

export const SnsBtnBox = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;
`;

export const SnsBtn = styled.button`
  border: none;
  background: none;
  cursor: pointer;
`;
