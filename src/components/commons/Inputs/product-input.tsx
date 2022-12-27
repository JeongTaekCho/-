import styled from "@emotion/styled";

const ProductInputUi = styled.input`
  width: 100%;
  height: 4rem;
  border: 1px solid #bdbdbd;
  outline: none;
  padding: 0 10px;
`;

interface IProductInputProps {
  type?: string;
  placeholder?: string;
  register?: any;
}

const ProductInput = ({ type, placeholder, register }: IProductInputProps) => {
  return (
    <ProductInputUi type={type} placeholder={placeholder} register={register} />
  );
};

export default ProductInput;
