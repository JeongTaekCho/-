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

export const SellerInfoBox = styled.div``;
