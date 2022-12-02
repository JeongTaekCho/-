import styled from "@emotion/styled";

const Wrapper = styled.div`
  width: 20.7%;
`;

const ImageBox = styled.div`
  width: 100%;
  padding-bottom: 100%;
  border-radius: 12px;
  border: 1px solid transparent;
  background-position: center;
  background-size: cover;
  margin-bottom: 1rem;
`;

const ItemTitle = styled.h3`
  font-size: 1.6rem;
  letter-spacing: -0.02px;
  color: #212529;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-bottom: 0.4rem;
  line-height: 1.5;
  font-weight: 400;
`;

const ItemPrice = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.5;
  margin-bottom: 0.4rem;
`;

const ItemAddress = styled.p`
  font-size: 1.3rem;
  color: #212529;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-bottom: 0.4rem;
  line-height: 1.5;
`;

const ItemLike = styled.p`
  color: #868e96;
  font-size: 1.3rem;
`;

const ItemBox = ({ el }: any) => {
  return (
    <Wrapper>
      <ImageBox
        style={{
          backgroundImage: `url(https://storage.googleapis.com/${el.images[0]})`,
        }}
      ></ImageBox>
      <ItemTitle>{el.name}</ItemTitle>
      <ItemPrice>
        {String(el.price).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원
      </ItemPrice>
      <ItemAddress>{el.createdAt}</ItemAddress>
      <ItemLike>좋아요 {el.pickedCount}</ItemLike>
    </Wrapper>
  );
};

export default ItemBox;
