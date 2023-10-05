import { ApolloClient, InMemoryCache } from "@apollo/client";

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        getCar(_, { args, toReference }) {
          return toReference({
            __typename: "Car",
            id: args.id,
          });
        },
      },
    },
  },
});

export const apolloClient = new ApolloClient({
  uri: "https://fun-car-factory-server.vercel.app/graphql",
  cache,
});
