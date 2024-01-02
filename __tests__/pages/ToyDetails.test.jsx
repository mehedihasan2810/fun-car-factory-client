import { ApolloProvider } from "@apollo/client";
import { describe, expect, screen, test } from "../utils/utils";
import { apolloClient } from "../../src/lib/graphql";
import ToyDetails from "../../src/pages/ToyDetails/ToyDetails";
import { render } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import AuthProvider from "../../src/contexts/AuthProvider";
import ContextProvider from "../../src/contexts/ContextProvider";

describe("<ToyDetails />", () => {
  test("should render, fetch single data and match snapshot succesfully", async () => {
    const id = "64671bf3e81294b16783e451";
    const { asFragment } = render(
      <MemoryRouter initialEntries={[`/toy-details/${id}`]}>
        <ContextProvider>
          <AuthProvider>
            <ApolloProvider client={apolloClient}>
              <Routes>
                <Route path="/toy-details/:id" element={<ToyDetails />} />
              </Routes>
            </ApolloProvider>
          </AuthProvider>
        </ContextProvider>
      </MemoryRouter>
    );

    expect(
      screen.getByText("toy-details-loading-skeleton")
    ).toBeInTheDocument();

    expect(asFragment()).toMatchSnapshot();
  });
});
