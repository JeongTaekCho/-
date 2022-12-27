import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  padding: 72px 0;
`;

export const Container = styled.div`
  width: 980px;
  margin: 0 auto;
`;

export const ListTite = styled.h2`
  font-size: 3.2rem;
  font-weight: 600;
  letter-spacing: -0.6px;
  text-align: center;
  color: #212529;
  margin-bottom: 4rem;
`;

export const SearchBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-bottom: 3rem;
`;

export const SearchInput = styled.input`
  width: 250px;
  height: 40px;
  padding: 12px 16px;
  border-radius: 6px;
  -webkit-border-radius: 6px;
  -moz-border-radius: 6px;
  border: solid 1px #e9ecef;
  box-sizing: border-box;
  font-size: 1.7rem;
  letter-spacing: -0.6px;
  outline: none;
`;

export const ListBox = styled.div`
  width: 100%;
  display: flex;
  gap: 6rem 5.7%;
  flex-wrap: wrap;
`;

export const ProductWriteBtn = styled.button`
  padding: 1rem 2rem;
  border: none;
  background-color: #ff6f0f;
  font-size: 1.5rem;
  font-weight: 600;
  color: #fff;
  border-radius: 6px;
  cursor: pointer;
`;
