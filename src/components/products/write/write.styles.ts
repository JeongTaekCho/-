import styled from "@emotion/styled";
import dynamic from "next/dynamic";

const DynamicReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export const Wrapper = styled.div`
  width: 100%;
`;

export const Container = styled.form`
  width: 968px;
  margin: 0 auto;
`;

export const TitleBox = styled.div`
  width: 100%;
  padding: 3rem 0;
  border-bottom: 1px solid #bdbdbd;
`;

export const Title = styled.h2`
  font-size: 2.4rem;
  font-weight: 600;
  color: #111;
`;

export const ContentBox = styled.div`
  width: 100%;
`;

export const InputBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #bdbdbd;
  padding: 3rem 0;
`;

export const InputLabel = styled.label`
  width: 15%;
  font-size: 2rem;
  font-weight: 400;
  color: #111;
`;

export const PhotoContainer = styled.div`
  width: 85%;
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
`;

export const FileUploadInput = styled.input`
  display: none;
`;

export const PhotoUploadBox = styled.label`
  width: 20rem;
  height: 20rem;
  border: 1px solid #bdbdbd;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const PhotoImg = styled.div`
  width: 20rem;
  height: 20rem;
  border: 1px solid #bdbdbd;
  border-radius: 4px;
  background-size: cover;
  background-position: center;
`;

export const InputContianer = styled.div`
  width: 85%;
`;

export const AddressSelectBox = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 1rem;
`;

export const AddressSelect = styled.button`
  width: 10rem;
  padding: 1rem 0;
  border: 1px solid #bdbdbd;
  background: none;
  cursor: pointer;
  font-size: 1.6rem;
  font-weight: 400;
  color: #111;
`;

export const PriceInputContainer = styled(InputContianer)`
  width: 30%;
`;

export const PriceWon = styled.span`
  font-size: 2rem;
  font-weight: 500;
  color: #111;
  padding-left: 2rem;
`;

export const ProductTextarea = styled.div`
  width: 100%;
`;

export const ReactQuill = styled(DynamicReactQuill)`
  /* height: 3rem; */
`;

export const WriteSubmitBtnBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin: 4rem;
`;

export const FormSubmit = styled.button`
  display: block;
  width: 10rem;
  padding: 1rem 0;
  border: 1px solid #bdbdbd;
  background-color: #ff6f0f;
  cursor: pointer;
  font-size: 1.8rem;
  font-weight: 500;
  color: #fff;
`;

export const WriteCancleBtn = styled(FormSubmit)`
  background-color: #111;
`;
