import Logo from "../../svg/logo";
import * as S from "./header.styles";

export const HeaderUi = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <Logo />
        <S.Navigation>
          <S.Menu>
            <S.MenuList>중고거래</S.MenuList>
            <S.MenuList>커뮤니티</S.MenuList>
          </S.Menu>
          <S.SubMenuBox>
            <S.SearchInput type="text" placeholder="물품명을 입력해주세요." />
            <S.SearchSubmit>검색하기</S.SearchSubmit>
          </S.SubMenuBox>
        </S.Navigation>
      </S.Container>
    </S.Wrapper>
  );
};

export default HeaderUi;
