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
import { waitForElementToBeRemoved, within } from "@testing-library/react";
import { carsMockData } from "../mocks/carsMockData";

describe("<AllToys />", () => {
  test("Should render successfully", async () => {
    customRender(
      <ApolloProvider client={apolloClient}>
        <AllToys />
      </ApolloProvider>
    );
  });

  test("Should fetch all cars on render and match snapshot", async () => {
    const { asFragment } = customRender(
      <ApolloProvider client={apolloClient}>
        <AllToys />
      </ApolloProvider>
    );

    expect(screen.getByText("all-toys-loading")).toBeInTheDocument();

    await waitForElementToBeRemoved(() => screen.getByText("all-toys-loading"));

    carsMockData.forEach((car) => {
      expect(
        screen.queryAllByRole("heading", { name: car.name, level: 2 })[0]
      ).toBeInTheDocument();
    });

    expect(asFragment()).toMatchSnapshot();
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

  test("Should filter cars in according to car ferrari, bus, truck", async () => {
    const user = userEvent.setup();

    customRender(
      <ApolloProvider client={apolloClient}>
        <AllToys />
      </ApolloProvider>
    );

    const filterOptions = screen.getByTestId("all-toys-filter-options");

    const ferrariBtn = within(filterOptions).getByRole("button", {
      name: "Ferrari",
    });
    const busBtn = within(filterOptions).getByRole("button", {
      name: "Bus",
    });
    const truckBtn = within(filterOptions).getByRole("button", {
      name: "Truck",
    });

    async function carsFilterTest(btn, filterTerm) {
      await user.click(btn);

      const filteredCars = carsMockData.filter((car) =>
        car.name.toLowerCase().includes(filterTerm)
      );

      filteredCars.forEach((car) => {
        expect(
          screen.queryAllByRole("heading", { name: car.name, level: 2 })[0]
        ).toBeInTheDocument();
      });
    }

    await carsFilterTest(ferrariBtn, "ferrari");
    await carsFilterTest(busBtn, "bus");
    await carsFilterTest(truckBtn, "truck");
  });
  test("Should sort cars in according to price low to high and high to low", async () => {
    const user = userEvent.setup();

    customRender(
      <ApolloProvider client={apolloClient}>
        <AllToys />
      </ApolloProvider>
    );

    const SortbyOptions = screen.getByTestId("all-toys-sortby-options");

    const ascendingBtn = within(SortbyOptions).getByRole("button", {
      name: "Price: Low To High",
    });
    const descendingBtn = within(SortbyOptions).getByRole("button", {
      name: "Price: High To Low",
    });

    function arraysHaveSameOrder(arr1, arr2) {
      const length = arr1.length < arr2.length ? arr1.length : arr2.length;

      for (let i = 0; i < length; i++) {
        if (arr1[i] !== arr2[i]) {
          return false;
        }
      }

      return true;
    }

    async function sortCars(btn, sortTerm) {
      await user.click(btn);

      const sortedCarsPrice = carsMockData
        .slice()
        .sort((toy1, toy2) => {
          const price1 = +toy1.price;
          const price2 = +toy2.price;

          if (sortTerm === "ascending") {
            return price1 > price2 ? 1 : price1 < price2 ? -1 : 0;
          }
          if (sortTerm === "descending") {
            return price1 < price2 ? 1 : price1 > price2 ? -1 : 0;
          }
        })
        .map((car) => car.price);

      const carsPrice = screen
        .getAllByTestId("all-toys-price")
        .map((el) => +el.textContent.replace("$", ""));

      expect(arraysHaveSameOrder(sortedCarsPrice, carsPrice)).toBeTruthy();
    }

    await sortCars(ascendingBtn, "ascending");
    await sortCars(descendingBtn, "descending");
  });

  test("Should search specific toy based on search input", async () => {
    const user = userEvent.setup();

    customRender(
      <ApolloProvider client={apolloClient}>
        <AllToys />
      </ApolloProvider>
    );

    const searchInput = screen.getByTestId("search-input");
    const searchBtn = screen.getByRole("button", { name: "Search" });

    expect(searchInput).toBeInTheDocument();
    expect(searchBtn).toBeInTheDocument();

    await user.type(searchInput, "ferrari");

    await user.click(searchBtn);

    screen.getAllByRole("heading", { level: 2 }).map((el) => {
      expect(el.textContent.toLowerCase().includes("ferrari")).toBeTruthy();
    });

    await user.clear(searchInput);

    await user.type(searchInput, "bus");

    await user.click(searchBtn);

    screen.getAllByRole("heading", { level: 2 }).map((el) => {
      expect(el.textContent.toLowerCase().includes("bus")).toBeTruthy();
    });
  });
});
