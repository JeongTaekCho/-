import ItemBox from "../../commons/itemBox";
import * as S from "./list.styles";
import { IProductListUiProps } from "./list.types";
import InfiniteScroll from "react-infinite-scroller";

const ProductListUi = ({
  data,
  infiniteFun,
  onClickToWrite,
}: IProductListUiProps) => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.ListTite>중고거래 인기매물</S.ListTite>
        <S.SearchBox>
          <S.SearchInput type="text" placeholder="검색어를 입력해주세요." />
          <S.ProductWriteBtn onClick={onClickToWrite}>
            물품 등록하기
          </S.ProductWriteBtn>
        </S.SearchBox>
        <InfiniteScroll
          pageStart={0}
          loadMore={infiniteFun}
          hasMore={true || false}
        >
          <S.ListBox>
            {data?.fetchUseditems.map((el) => {
              return <ItemBox el={el} key={el._id} />;
            })}
          </S.ListBox>
        </InfiniteScroll>
      </S.Container>
    </S.Wrapper>
  );
};

export default ProductListUi;
