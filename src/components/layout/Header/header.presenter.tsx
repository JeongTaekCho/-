import Logo from "../../commons/svg/logo";
import * as S from "./header.styles";
import { IHeaderUiProps } from "./header.types";

export const HeaderUi = ({
  onClickToProducts,
  onClickToComunity,
  onClickToMain,
  onClickSearch,
}: IHeaderUiProps) => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.LogoBox onClick={onClickToMain}>
          <Logo />
        </S.LogoBox>
        <S.Navigation>
          <S.Menu>
            <S.MenuList onClick={onClickToProducts}>중고거래</S.MenuList>
            <S.MenuList onClick={onClickToComunity}>커뮤니티</S.MenuList>
          </S.Menu>
          <S.SubMenuBox>
            <S.SearchInput type="text" placeholder="물품명을 입력해주세요." />
            <S.SearchSubmit onClick={onClickSearch}>검색하기</S.SearchSubmit>
          </S.SubMenuBox>
        </S.Navigation>
      </S.Container>
    </S.Wrapper>
  );
};

export default HeaderUi;
