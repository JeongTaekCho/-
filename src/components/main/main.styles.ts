import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
`;

export const Section = styled.section`
  width: 100%;
  padding-top: 5rem;
  background-color: #fbf7f2;
`;

export const Container = styled.div`
  width: 1024px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SectionTitle = styled.h2`
  font-size: 4rem;
  font-weight: 600;
  color: #212529;
  line-height: 1.3;
  margin-bottom: 3.2rem;
  letter-spacing: -0.4px;
`;

export const SectionMent = styled.p`
  font-size: 1.6rem;
  line-height: 1.5;
  letter-spacing: -0.3px;
`;

export const SectionTextBox = styled.div``;

export const SectionImage = styled.div`
  width: 70%;
  img {
    width: 100%;
  }
`;

export const SectionDefault = styled.div`
  width: 100%;
`;

export const SectionImage2 = styled(SectionImage)`
  width: 60%;
`;

export const SectionBtnBox = styled.div`
  display: flex;
  gap: 1.6rem;
  margin-top: 3.2rem;
`;

export const SectionBtn = styled.button`
  font-size: 1.8rem;
  background-color: #f1f3f5;
  color: #212529;
  border: none;
  border-radius: 6px;
  text-decoration: none;
  padding: 1.45rem 2.6rem;
  display: inline-block;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    background-color: #e9ecef;
  }
`;

export const Section2 = styled(Section)`
  padding: 6rem 0;
  background-color: #e6f3e6;
`;

export const SectionListBox = styled.ul`
  margin-top: 4rem;
  display: flex;
  justify-content: space-between;
  list-style-type: none;
`;

export const SectionList = styled.li`
  margin-right: 4rem;
  margin-left: 0;
  max-width: 14rem;
`;

export const SectionListBg = styled.div`
  width: 56px;
  height: 56px;
  background-size: 56px 56px;
  background-image: url(https://d1unjqcospf8gs.cloudfront.net/assets/home/main/icon-story-1-9226479b836cdc960291ffda91ace46c90a632f6cc868aa8983b3624e662a924.svg);
`;

export const SectionListBg2 = styled(SectionListBg)`
  background-image: url(https://d1unjqcospf8gs.cloudfront.net/assets/home/main/icon-story-2-208bb88cad31e335b40bc8ac5b7684dcf8a36d77ac50770a497a9c967a3bfc4f.svg);
`;
export const SectionListBg3 = styled(SectionListBg)`
  background-image: url(https://d1unjqcospf8gs.cloudfront.net/assets/home/main/icon-story-3-0a14d64c6101a7271655747d8401b9f71506578f8a4c0640608074e977bbc7c0.svg);
`;

export const SectionListText01 = styled.div`
  margin-top: 1.4rem;
  margin-bottom: 0.8rem;
  font-size: 1.4rem;
  line-height: 1.5;
  font-weight: 600;
`;
export const SectionListText02 = styled.div`
  font-size: 1.2rem;
  line-height: 1.5;
  font-weight: 400;
`;

export const SectionImage3 = styled(SectionImage2)`
  width: 55%;
`;

export const Section3 = styled(Section)`
  padding-top: 6rem;
  background-color: #f8f9fa;
`;

export const Section4Title = styled.h2`
  font-size: 4rem;
  line-height: 1.35;
  margin-bottom: 8rem;
  text-align: center;
  font-weight: 700;
`;

export const ItemContainer = styled.div`
  width: 1024px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 60px 5.7%;
  padding-bottom: 4rem;
`;

export const ItemMoreBtn = styled.button`
  display: block;
  margin: 0 auto;
  font-size: 1.6rem;
  line-height: 1.5;
  letter-spacing: -0.3px;
  cursor: pointer;
  text-decoration: underline;
  color: #212529;
  font-weight: 600;
  border: none;
  background: none;
  padding-bottom: 15rem;
`;
