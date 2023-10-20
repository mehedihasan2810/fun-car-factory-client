import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  from,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";
import { signOut } from "firebase/auth";
import Cookies from "js-cookie";
import { auth } from "../../configs/firebase";

export const cache = new InMemoryCache();

const httpLink = createHttpLink({
  uri: "https://fun-car-factory-server.vercel.app/graphql",
  // uri: "http://localhost:4000/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = Cookies.get("token");

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const errorLink = onError(async ({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    if (graphQLErrors[0]?.message === "User is not authenticated") {
      await signOut(auth);

      Cookies.remove("token");

      apolloClient.clearStore();
    }

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
