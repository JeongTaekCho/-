import * as S from "./detail.styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductDetailUi = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <S.Wrapper>
      <S.Container>
        <S.SlickBox>
          <Slider {...settings}>
            <S.SlickImgBox>
              <S.SlickImg
                src="https://dnvefa72aowie.cloudfront.net/origin/article/202211/ADB79916D1EAC8139B6B9C845E35B23E53DB1998138C669FAAF50197256803B8.jpg?q=95&s=1440x1440&t=inside"
                alt=""
              />
            </S.SlickImgBox>
            <S.SlickImgBox>
              <S.SlickImg
                src="https://dnvefa72aowie.cloudfront.net/origin/article/202211/ADB79916D1EAC8139B6B9C845E35B23E53DB1998138C669FAAF50197256803B8.jpg?q=95&s=1440x1440&t=inside"
                alt=""
              />
            </S.SlickImgBox>
            <S.SlickImgBox>
              <S.SlickImg
                src="https://dnvefa72aowie.cloudfront.net/origin/article/202211/ADB79916D1EAC8139B6B9C845E35B23E53DB1998138C669FAAF50197256803B8.jpg?q=95&s=1440x1440&t=inside"
                alt=""
              />
            </S.SlickImgBox>
          </Slider>
        </S.SlickBox>
        <S.DetailTitleBox>
          <S.SellerInfoBox></S.SellerInfoBox>
        </S.DetailTitleBox>
      </S.Container>
    </S.Wrapper>
  );
};

export default ProductDetailUi;
