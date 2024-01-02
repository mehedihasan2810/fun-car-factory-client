import { useContext } from "react";
import { AuthContext } from "./AuthProvider";

// Custom hook to access the authentication context
export const useAuthContext = () => {
  return useContext(AuthContext);
};
