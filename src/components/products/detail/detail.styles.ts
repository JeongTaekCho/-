import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  padding-top: 94px;
`;

export const Container = styled.div`
  width: 677px;
  margin: 0 auto;
`;

export const SlickBox = styled.div`
  width: 100%;
  .slick-dots {
    position: absolute;
    bottom: 2px;
    display: block;
    width: 100%;
    padding: 0;
    margin: 0;
    list-style: none;
    text-align: center;
    background-image: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0)
    );
    background-blend-mode: multiply;
    padding: 16px 0;
    border-radius: 8px;
  }
  .slick-dots li.slick-active button:before {
    opacity: 1;
    color: #fff;
  }
  .slick-dots li {
    margin: 0;
  }
  .slick-prev:before,
  .slick-next:before {
    color: #fa6616;
  }
`;
export const SlickImgBox = styled.div`
  position: relative;
  width: 677px;
  margin: 0 auto;
  height: 500px;
  border-radius: 8px;
  overflow: hidden;
`;
export const SlickImg = styled.img`
  width: 100%;
  border-radius: 8px;
  position: relative;
  min-width: 100%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: transparent;
`;

export const DetailTitleBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-content: center;
  margin-top: 25px;
  padding-bottom: 23px;
  border-bottom: 1px solid #e9ecef;
`;

export const SellerInfoBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const SellerName = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1.5;
  letter-spacing: -0.6px;
  color: #212529;
`;

export const HeartBox = styled.div`
  cursor: pointer;
`;

export const DetailContent = styled.div`
  width: 100%;
  padding: 3.2rem 0;
  border-bottom: 1px solid #e9ecef;
`;

export const DetailTitle = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  line-height: 1.5;
  letter-spacing: -0.6px;
  color: #111;
`;

export const DetailDate = styled.p`
  margin-top: 0.8rem;
  font-size: 1.3rem;
  letter-spacing: -0.6px;
  color: #868e96;
`;

export const DetailPrice = styled.p`
  margin-top: 1.3rem;
  font-size: 1.8rem;
  font-weight: 600;
  letter-spacing: -0.6px;
`;

export const DetailCon = styled.p`
  font-size: 1.7rem;
  letter-spacing: -0.6px;
  margin: 2rem 0;
  word-break: break-all;
  line-height: 1.4;
`;

export const LikePick = styled.p`
  font-size: 1.3rem;
  letter-spacing: -0.6px;
  color: #868e96;
`;

export const ProductMoreBox = styled.section`
  width: 100%;
`;

export const ProductMoreTitleBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3.2rem 0 3rem;
`;

export const ProductTitle = styled.h2`
  font-size: 1.8rem;
  text-align: left;
  letter-spacing: -0.6px;
  font-weight: 600;
  color: #111;
`;

export const ProductListBtn = styled.button`
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: -0.6px;
  text-decoration: none;
  color: #ff8a3d;
  border: none;
  background: none;
  cursor: pointer;
`;

export const BestProductList = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 6rem 2%;
  .w-32 {
    width: 32%;
  }
`;
