import ProductInput from "../../commons/Inputs/product-input";
import * as S from "./write.styles";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";

// const DynamicReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const ProductWriteUi = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.TitleBox>
          <S.Title>기본정보</S.Title>
        </S.TitleBox>
        <S.ContentBox>
          <S.InputBox>
            <S.InputLabel>상품이미지</S.InputLabel>
            <S.PhotoContainer>
              <S.FileUploadInput
                type="file"
                multiple
                id="file"
              ></S.FileUploadInput>
              <S.PhotoUploadBox htmlFor="file">이미지 등록 +</S.PhotoUploadBox>
            </S.PhotoContainer>
          </S.InputBox>
          <S.InputBox>
            <S.InputLabel>제목</S.InputLabel>
            <S.InputContianer>
              <ProductInput type="text" placeholder="제목을 입력해주세요." />
            </S.InputContianer>
          </S.InputBox>
          <S.InputBox>
            <S.InputLabel>거래지역</S.InputLabel>
            <S.InputContianer>
              <S.AddressSelectBox>
                <S.AddressSelect type="button">내 위치</S.AddressSelect>
                <S.AddressSelect type="button">주소검색</S.AddressSelect>
              </S.AddressSelectBox>
              <ProductInput
                type="text"
                placeholder="거래지역을 입력해주세요."
              />
            </S.InputContianer>
          </S.InputBox>
          <S.InputBox>
            <S.InputLabel>가격</S.InputLabel>
            <S.PriceInputContainer>
              <ProductInput type="text" placeholder="가격을 입력해주세요." />
            </S.PriceInputContainer>
            <S.PriceWon>원</S.PriceWon>
          </S.InputBox>
          <S.InputBox>
            <S.InputLabel>설명</S.InputLabel>
            <S.InputContianer>
              <S.ProductTextarea>
                <S.ReactQuill />
              </S.ProductTextarea>
            </S.InputContianer>
          </S.InputBox>
          <S.InputBox>
            <S.InputLabel>태그</S.InputLabel>
            <S.InputContianer>
              <ProductInput type="text" placeholder="태그를 입력해주세요." />
            </S.InputContianer>
          </S.InputBox>
        </S.ContentBox>
        <S.WriteSubmitBtnBox>
          <S.FormSubmit type="submit">등록하기</S.FormSubmit>
          <S.WriteCancleBtn type="button">취소하기</S.WriteCancleBtn>
        </S.WriteSubmitBtnBox>
      </S.Container>
    </S.Wrapper>
  );
};

export default ProductWriteUi;
