import { useContext } from "react";
import { AppContext } from "./ContextProvider";

// Custom hook to access the application context
const useContextProvider = () => {
  return useContext(AppContext);
};

export default useContextProvider;
