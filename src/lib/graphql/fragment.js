import gql from "graphql-tag";

export const CORE_CARS_FIELD = gql`
  fragment CoreCarsField on Car {
    id
    name
    price
    url
    rating
    category
    quantity
  }
`;
