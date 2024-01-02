import { ApolloProvider } from "@apollo/client";
import MyToys from "../../src/pages/MyToys/MyToys";
import {
  customRender,
  describe,
  expect,
  screen,
  test,
} from "../utils/utils";
import { apolloClient } from "../../src/lib/graphql";

describe("<MyToys />", () => {
  test("Should render successfully and match snapshot", async () => {
    const { asFragment } = customRender(
      <ApolloProvider client={apolloClient}>
        <MyToys />
      </ApolloProvider>
    );

    expect(screen.queryByText("my-toys-loading-skeleton")).toBeInTheDocument();

    expect(asFragment()).toMatchSnapshot();
  });
});
