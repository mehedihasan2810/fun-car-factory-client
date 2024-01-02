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

// Create an in-memory cache
export const cache = new InMemoryCache();

// Create an HTTP link to the GraphQL server
const httpLink = createHttpLink({
  uri: "https://fun-car-factory-server.vercel.app/graphql",
  // uri: "http://localhost:4000/graphql",
});

// Set the authorization context based on the user's token
const authLink = setContext((_, { headers }) => {
  const token = Cookies.get("token");

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

// Handle errors, including authentication errors
const errorLink = onError(async ({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    if (graphQLErrors[0]?.message === "User is not authenticated") {
      // Sign out the user, remove the token, and clear the Apollo Client store
      await signOut(auth);

      Cookies.remove("token");

      apolloClient.clearStore();
    }

    // Log GraphQL errors
    graphQLErrors.forEach(({ message }) =>
      console.error(`[GraphQL error]: Message: ${message}`)
    );
  }
  if (networkError) console.error(`[Network error]: ${networkError}`);
});

// Create the Apollo Client with the configured link and cache
export const apolloClient = new ApolloClient({
  // link: authLink.concat(errorLink, httpLink),
  link: from([authLink, errorLink, httpLink]),
  cache,
});
