import { ApolloProvider } from "@apollo/client";
import {
  customRender,
  describe,
  expect,
  screen,
  test,
  userEvent,
} from "../utils/utils";
import { apolloClient } from "../../src/lib/graphql";
import AllToys from "../../src/pages/AllToys/AllToys";
import { waitForElementToBeRemoved } from "@testing-library/react";
import { carsMockData } from "../mocks/handlers";

describe("<AllToys />", () => {
  test("Should render successfully and match snapshot", () => {
    const { asFragment } = customRender(
      <ApolloProvider client={apolloClient}>
        <AllToys />
      </ApolloProvider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
  test("Should fetch all cars on render", async () => {
    customRender(
      <ApolloProvider client={apolloClient}>
        <AllToys />
      </ApolloProvider>
    );

    expect(screen.getByText("all-toys-loading")).toBeInTheDocument();

    await waitForElementToBeRemoved(() => screen.getByText("all-toys-loading"));

    carsMockData.forEach((car) => {
      expect(
        screen.getByRole("heading", { name: car.name, level: 2 })
      ).toBeInTheDocument();
    });
  });

  test("Filter options should toggle perfectly", async () => {
    const user = userEvent.setup();
    customRender(
      <ApolloProvider client={apolloClient}>
        <AllToys />
      </ApolloProvider>
    );

    expect(screen.getByTestId("all-toys-filter-options")).not.toHaveClass(
      "open-toys-filter-options"
    );

    await user.click(screen.getByTestId("all-toys-filter-btn"));

    expect(screen.getByTestId("all-toys-filter-options")).toHaveClass(
      "open-toys-filter-options"
    );

    await user.click(screen.getByTestId("all-toys-filter-btn"));

    expect(screen.getByTestId("all-toys-filter-options")).not.toHaveClass(
      "open-toys-filter-options"
    );
  });

  test("Sortby options should toggle perfectly", async () => {
    const user = userEvent.setup();
    customRender(
      <ApolloProvider client={apolloClient}>
        <AllToys />
      </ApolloProvider>
    );

    expect(screen.getByTestId("all-toys-sortby-options")).not.toHaveClass(
      "open-toys-sortby-options"
    );

    await user.click(screen.getByTestId("all-toys-sortby-btn"));

    expect(screen.getByTestId("all-toys-sortby-options")).toHaveClass(
      "open-toys-sortby-options"
    );

    await user.click(screen.getByTestId("all-toys-sortby-btn"));

    expect(screen.getByTestId("all-toys-sortby-options")).not.toHaveClass(
      "open-toys-sortby-options"
    );
  });
});
