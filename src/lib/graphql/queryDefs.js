import { gql } from "@apollo/client";

export const GET_CARS = gql`
  query GetCars {
    getCars {
      id
      name
      price
      url
      rating
    }
  }
`;

export const GET_CAR = gql`
  query GetCar($id: String!) {
    getCar(id: $id) {
      id
      name
      price
      rating
      url
      sellerName
      email
      category
      description
    }
  }
`;
