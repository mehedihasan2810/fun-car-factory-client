import { ApolloProvider } from "@apollo/client";
import { describe, expect, screen, test } from "../utils/utils";
import { apolloClient } from "../../src/lib/graphql";
import ToyDetails from "../../src/pages/ToyDetails/ToyDetails";
import { render, waitForElementToBeRemoved } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import AuthProvider from "../../src/contexts/AuthProvider";
import { carsMockData } from "../mocks/carsMockData";

describe("<ToyDetails />", () => {
  test("should render, fetch single data and match snapshot succesfully", async () => {
    const id = "64671bf3e81294b16783e451";
    const { asFragment } = render(
      <MemoryRouter initialEntries={[`/toy-details/${id}`]}>
        <AuthProvider>
          <ApolloProvider client={apolloClient}>
            <Routes>
              <Route path="/toy-details/:id" element={<ToyDetails />} />
            </Routes>
          </ApolloProvider>
        </AuthProvider>
      </MemoryRouter>
    );

    expect(
      screen.getByText("toy-details-loading-skeleton")
    ).toBeInTheDocument();

    await waitForElementToBeRemoved(() =>
      screen.getByText("toy-details-loading-skeleton")
    );

    const filteredData = carsMockData.find((car) => car.id === id);

    expect(
      screen.getByRole("heading", { name: filteredData.name, level: 4 })
    ).toBeInTheDocument();

    expect(asFragment()).toMatchSnapshot();
  });
});
