import { ApolloProvider } from "@apollo/client";
import MyToys from "../../src/pages/MyToys/MyToys";
import {
  customRender,
  describe,
  expect,
  screen,
  test,
  userEvent,
} from "../utils/utils";
import { apolloClient } from "../../src/lib/graphql";
import { waitForElementToBeRemoved } from "@testing-library/react";

describe("<MyToys />", () => {
  test("Should render successfully and match snapshot", async () => {
    const { asFragment } = customRender(
      <ApolloProvider client={apolloClient}>
        <MyToys />
      </ApolloProvider>
    );

    expect(screen.queryByText("my-toys-loading-skeleton")).toBeInTheDocument();

    await waitForElementToBeRemoved(() =>
      screen.getByText("my-toys-loading-skeleton")
    );

    expect(
      screen.queryByText("my-toys-loading-skeleton")
    ).not.toBeInTheDocument();

    expect(asFragment()).toMatchSnapshot();
  });

  test("Should fetch all cars data perfectly", async () => {
    customRender(
      <ApolloProvider client={apolloClient}>
        <MyToys />
      </ApolloProvider>
    );

    screen.getAllByTestId("my-toys-price").forEach((el) => {
      expect(el).toBeInTheDocument();
    });
  });

  test("Search input should work as expected", async () => {
    customRender(
      <ApolloProvider client={apolloClient}>
        <MyToys />
      </ApolloProvider>
    );

    const user = userEvent.setup();

    const searchInput = screen.getByTestId("search-input");

    // const searchBtn = screen.getByTestId("search-btn");

    await user.type(searchInput, "ferrari");

    await user.keyboard("[Enter]");

    screen.getAllByTestId("my-toys-toy-name").forEach((el) => {
      expect(el.textContent.toLowerCase().includes("ferrari")).toBeTruthy();
    });
  });
});
