import {
  ApolloClient,
  InMemoryCache,
  // HttpLink,
  createHttpLink,
  from,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";
// import fetch from "cross-fetch";

export const cache = new InMemoryCache();

const httpLink = createHttpLink({
  // uri: "https://fun-car-factory-server.vercel.app/graphql",
  uri: "http://localhost:4000/graphql",
  // fetch: (...args) => fetch(...args),
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("token");

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    console.log(graphQLErrors);
    graphQLErrors.forEach(({ message }) =>
      console.error(`[GraphQL error]: Message: ${message}`)
    );
  }
  if (networkError) console.error(`[Network error]: ${networkError}`);
});

export const apolloClient = new ApolloClient({
  // link: authLink.concat(errorLink, httpLink),
  link: from([authLink, errorLink, httpLink]),
  cache,
});
