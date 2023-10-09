import { gql } from "@apollo/client";

export const GET_CARS = gql`
  query GetCars {
    getCars {
      id
      name
      price
      url
      rating
      category
      quantity
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

export const CREATE_CAR = gql`
  mutation CreateCar($carInput: CarInput!) {
    createCar(carInput: $carInput) {
      code
      message
      success
      car {
        id
        category
        description
        email
        name
        price
        quantity
        rating
        sellerName
        url
      }
    }
  }
`;

export const GET_USERS = gql`
  query GetUsers {
    getUsers {
      email
      id
      name
      role
    }
  }
`;

export const GET_USER = gql`
  query GetUser($email: String!) {
    getUser(email: $email) {
      email
      id
      name
      role
    }
  }
`;

export const CREATE_USER = gql`
  mutation CreateUser($input: UserInput!) {
    createUser(input: $input) {
      email
      id
      name
      role
    }
  }
`;
