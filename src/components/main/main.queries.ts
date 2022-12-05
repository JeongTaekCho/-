import { gql } from "@apollo/client";

export const FETCH_BEST_ITEMS = gql`
  query fetchUseditemsOfTheBest {
    fetchUseditemsOfTheBest {
      _id
      name
      remarks
      contents
      price
      images
      pickedCount
      seller {
        _id
        name
      }
      createdAt
    }
  }
`;
