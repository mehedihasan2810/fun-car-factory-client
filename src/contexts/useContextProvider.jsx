import { useContext } from "react";
import { AppContext } from "./ContextProvider";

const useContextProvider = () => {
  return useContext(AppContext);
};

export default useContextProvider;
