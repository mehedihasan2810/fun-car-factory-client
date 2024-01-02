import { ApolloProvider } from "@apollo/client";
import {
  customRender,
  describe,
  expect,
  test,
} from "../utils/utils";
import { apolloClient } from "../../src/lib/graphql";
import AllToys from "../../src/pages/AllToys/AllToys";

describe("<AllToys />", () => {
  test("Should render successfully", async () => {
    // ARRANGE
    customRender(
      <ApolloProvider client={apolloClient}>
        <AllToys />
      </ApolloProvider>
    );
  });

  test("Should fetch all cars on render and match snapshot", async () => {
    // ARRANGE
    const { asFragment } = customRender(
      <ApolloProvider client={apolloClient}>
        <AllToys />
      </ApolloProvider>
    );

    // ASSERT
    expect(asFragment()).toMatchSnapshot();
  });
});
