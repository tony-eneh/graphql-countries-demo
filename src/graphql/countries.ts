import { gql } from 'apollo-angular';

export const GET_COUNTRIES = gql`
  query Countries(
    $namePrefix: String
    $currencyCode: String
    # pagination options follow
    $first: Int
    $last: Int
    $after: String
    $before: String
  ) {
    countries(
      namePrefix: $namePrefix
      currencyCode: $currencyCode
      first: $first
      last: $last
      after: $after
      before: $before
    ) {
      totalCount
      pageInfo {
        startCursor
        endCursor
        hasNextPage
        hasPreviousPage
      }
      edges {
        cursor
        node {
          capital
          currencyCodes
          name
          flagImageUri
          code
        }
      }
    }
  }
`;
