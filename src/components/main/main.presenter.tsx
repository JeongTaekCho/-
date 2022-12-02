import ItemBox from "../commons/itemBox";
import * as S from "./main.styles";
import { IMainUiProps } from "./main.types";

const MainUi = ({ data }: IMainUiProps) => {
  return (
    <S.Wrapper>
      <S.Section>
        <S.Container>
          <S.SectionTextBox>
            <S.SectionTitle>
              당신 근처의
              <br />
              당근마켓
            </S.SectionTitle>
            <S.SectionMent>
              중고 거래부터 동네 정보까지, 이웃과 함께해요.
              <br />
              가깝고 따뜻한 당신의 근처를 만들어요.
            </S.SectionMent>
          </S.SectionTextBox>
          <S.SectionImage>
            <img
              src="https://d1unjqcospf8gs.cloudfront.net/assets/home/main/3x/image-top-d6869a79bc4cb58ea59aa5a408decfdf4a4ba60ac639837081da12861083cdbb.webp "
              alt="당근마켓 홈 화면 이미지"
            />
          </S.SectionImage>
        </S.Container>
      </S.Section>
      <S.SectionDefault>
        <S.Container>
          <S.SectionImage2>
            <img
              src="https://d1unjqcospf8gs.cloudfront.net/assets/home/main/3x/image-1-cc678e9a217b96f5cb459f7f0684f5ba67706f9889801618b8cf879fbc2c0ea7.webp "
              alt="당근마켓 홈 화면 이미지"
            />
          </S.SectionImage2>
          <S.SectionTextBox>
            <S.SectionTitle>
              우리 동네
              <br />
              중고 직거래 마켓
            </S.SectionTitle>
            <S.SectionMent>
              동네 주민들과 가깝고 따뜻한 거래를 지금 경험해보세요.
            </S.SectionMent>
            <S.SectionBtnBox>
              <S.SectionBtn type="button">인기매물 보기</S.SectionBtn>
              <S.SectionBtn type="button">믿을 수 있는 중고거래</S.SectionBtn>
            </S.SectionBtnBox>
          </S.SectionTextBox>
        </S.Container>
      </S.SectionDefault>
      <S.Section2>
        <S.Container>
          <S.SectionTextBox>
            <S.SectionTitle>
              이웃과 함께 하는
              <br />
              동네생활
            </S.SectionTitle>
            <S.SectionMent>
              우리 동네의 다양한 이야기를 이웃과 함께 나누어요.
            </S.SectionMent>
            <S.SectionListBox>
              <S.SectionList>
                <S.SectionListBg></S.SectionListBg>
                <S.SectionListText01>우리동네질문</S.SectionListText01>
                <S.SectionListText02>
                  궁금한 게 있을 땐 <br />
                  이웃에게 물어보세요.
                </S.SectionListText02>
              </S.SectionList>
              <S.SectionList>
                <S.SectionListBg2></S.SectionListBg2>
                <S.SectionListText01>동네분실센터</S.SectionListText01>
                <S.SectionListText02>
                  무언가를 잃어버렸을 때,
                  <br /> 함께 찾을 수 있어요.
                </S.SectionListText02>
              </S.SectionList>
              <S.SectionList>
                <S.SectionListBg3></S.SectionListBg3>
                <S.SectionListText01>동네모임</S.SectionListText01>
                <S.SectionListText02>
                  관심사가 비슷한 이웃과 <br /> 온오프라인으로 만나요.
                </S.SectionListText02>
              </S.SectionList>
            </S.SectionListBox>
          </S.SectionTextBox>
          <S.SectionImage3>
            <img
              src="https://d1unjqcospf8gs.cloudfront.net/assets/home/main/3x/image-2-91a2286453bdf82dea16a7f0ee4ceb9dd325eae0e5a2a9967ba72c344bf8f2fc.webp "
              alt="당근마켓 홈 화면 이미지"
            />
          </S.SectionImage3>
        </S.Container>
      </S.Section2>
      <S.SectionDefault>
        <S.Container>
          <S.SectionImage2>
            <img
              src="https://d1unjqcospf8gs.cloudfront.net/assets/home/main/3x/image-3-5fd6fb61d603ab919a45566b2ea6b505c83a93ec218f34ddcd5cb482543e2317.webp  "
              alt="당근마켓 홈 화면 이미지"
            />
          </S.SectionImage2>
          <S.SectionTextBox>
            <S.SectionTitle>
              내 근처에서 찾는
              <br />
              동네가게
            </S.SectionTitle>
            <S.SectionMent>
              우리 동네 가게를 찾고 있나요?
              <br />
              동네 주민이 남긴 진짜 후기를 함께 확인해보세요!
            </S.SectionMent>
            <S.SectionBtnBox>
              <S.SectionBtn type="button">당근마켓 동네가게 찾기</S.SectionBtn>
            </S.SectionBtnBox>
          </S.SectionTextBox>
        </S.Container>
      </S.SectionDefault>
      <S.Section3>
        <S.Section4Title>중고거래 인기매물</S.Section4Title>
        <S.ItemContainer>
          {data?.fetchUseditemsOfTheBest.map((el) => {
            return <ItemBox key={el._id} el={el} />;
          })}
        </S.ItemContainer>
        <S.ItemMoreBtn>인기매물 더 보기</S.ItemMoreBtn>
      </S.Section3>
    </S.Wrapper>
  );
};

export default MainUi;
