import { gql } from "@apollo/client";

export const GET_CARS = gql`
  query GetCars {
    getCars {
      name
      price
      url
      rating
    }
  }
`;

export const GET_CAR = gql`
  query GetCar($getCarId: String!) {
    getCar(id: $getCarId) {
      name
      price
      rating
    }
  }
`;
