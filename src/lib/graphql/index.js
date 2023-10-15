import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import fetch from "cross-fetch";

export const cache = new InMemoryCache();
//   {
//   typePolicies: {
//     Query: {
//       fields: {
//         getCar(_, { args, toReference }) {
//           return toReference({
//             __typename: "Car",
//             id: args.id,
//           });
//         },
//       },
//     },
//   },
// }

const link = new HttpLink({
  uri: "https://fun-car-factory-server.vercel.app/graphql",
  fetch: (...args) => fetch(...args),
});

export const apolloClient = new ApolloClient({
  // uri: "https://fun-car-factory-server.vercel.app/graphql",
  link,
  cache,
});
