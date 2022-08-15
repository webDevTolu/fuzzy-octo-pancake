import { gql } from "@apollo/client";

export const ASA_LIST = gql`
  {
    asalist {
      results {
        assetId
        name
        available
        logo
      }
    }
  }
`;
