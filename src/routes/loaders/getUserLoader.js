import Cookies from "js-cookie";
import { apolloClient } from "../../lib/graphql";
import { GET_USER } from "../../lib/graphql/queryDefs";
import jwt_decode from "jwt-decode";

export const getUserLoader = async () => {
  const token = Cookies.get("token");

  try {
    const decoded = jwt_decode(token);

    const { data } = await apolloClient.query({
      query: GET_USER,
      variables: { email: decoded.email },
    });

    return { getUser: data ? data.getUser : null };
  } catch (error) {
    return { getUser: null };
  }
};
