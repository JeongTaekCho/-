import * as S from "./detail.styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Avatar } from "@mui/material";
import Heart from "../../commons/svg/heart";
import { IProductDetailUiProps } from "./detail.types";
import DOMPurify from "dompurify";

const ProductDetailUi = ({ data }: IProductDetailUiProps) => {
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
            {data?.fetchUseditem.images.map((el, index) => {
              return (
                <S.SlickImgBox key={index}>
                  <S.SlickImg
                    src={`https://storage.googleapis.com/${el}`}
                    alt=""
                  />
                </S.SlickImgBox>
              );
            })}
          </Slider>
        </S.SlickBox>
        <S.DetailTitleBox>
          <S.SellerInfoBox>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <S.SellerName>{data?.fetchUseditem.seller.name}</S.SellerName>
          </S.SellerInfoBox>
          <S.HeartBox>
            <Heart />
          </S.HeartBox>
        </S.DetailTitleBox>
        <S.DetailContent>
          <S.DetailTitle>{data?.fetchUseditem.name}</S.DetailTitle>
          <S.DetailDate>
            {data?.fetchUseditem.createdAt.slice(0, 10)}
          </S.DetailDate>
          <S.DetailPrice>{data?.fetchUseditem.price}원</S.DetailPrice>
          {process.browser ? (
            <S.DetailCon
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(data?.fetchUseditem.contents),
              }}
            ></S.DetailCon>
          ) : (
            <S.DetailCon></S.DetailCon>
          )}

          <S.LikePick>
            좋아요 8 ∙ 찜 {data?.fetchUseditem.pickedCount}
          </S.LikePick>
        </S.DetailContent>
      </S.Container>
    </S.Wrapper>
  );
};

export default ProductDetailUi;
