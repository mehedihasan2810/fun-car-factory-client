import { ApolloClient, InMemoryCache } from "@apollo/client";

const cache = new InMemoryCache();

export const apolloClient = new ApolloClient({
  uri: "https://fun-car-factory-server.vercel.app/graphql",
  cache,
});
