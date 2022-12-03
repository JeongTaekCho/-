import ItemBox from "../../commons/itemBox";
import * as S from "./list.styles";
import { IProductListUiProps } from "./list.types";

const ProductListUi = ({ data }: IProductListUiProps) => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.ListTite>중고거래 인기매물</S.ListTite>
        <S.SearchBox>
          <S.SearchInput type="text" placeholder="검색어를 입력해주세요." />
        </S.SearchBox>
        <S.ListBox>
          {data?.fetchUseditems.map((el) => {
            return <ItemBox el={el} key={el._id} />;
          })}
        </S.ListBox>
      </S.Container>
    </S.Wrapper>
  );
};

export default ProductListUi;
