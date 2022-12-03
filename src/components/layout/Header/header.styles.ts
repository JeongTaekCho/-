import styled from "@emotion/styled";

export const Wrapper = styled.header`
  width: 100%;
  padding: 1.2rem 0;
`;
export const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
  display: flex;
`;

export const Navigation = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 4rem;
`;

export const LogoBox = styled.div`
  cursor: pointer;
`;

export const Menu = styled.ul`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const MenuList = styled.li`
  font-size: 1.8rem;
  font-weight: 500;
  color: #111;
  cursor: pointer;
`;

export const SubMenuBox = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

export const SearchInput = styled.input`
  width: 28.8rem;
  height: 100%;
  padding: 0.9rem 1.2rem;
  border: none;
  border-radius: 0.6rem;
  font-size: 1.6rem;
  color: #111;
  background-color: #eee;
  outline: none;
`;

export const SearchSubmit = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 0.3rem;
  font-size: 1.6rem;
  font-weight: 700;
  color: #111;
  border: 1px solid #ddd;
  background: none;
  cursor: pointer;
`;
