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
      quantity
    }
  }
`;

export const GET_CART_CAR = gql`
  query GetCartCar($cartIds: [String!]!) {
    getCartCar(cartIds: $cartIds) {
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

export const UPDATE_CAR = gql`
  mutation UpdateCar($updateInput: UpdateCarInput!) {
    updateCar(updateInput: $updateInput) {
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
`;

export const DELETE_CAR = gql`
  mutation DeleteCar($deleteCarId: String!) {
    deleteCar(id: $deleteCarId) {
      id
      name
      price
      url
      rating
      category
      quantity

      # id
      # category
      # description
      # email
      # name
      # price
      # quantity
      # rating
      # sellerName
      # url
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
