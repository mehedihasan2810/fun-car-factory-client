import { createContext, useEffect, useState } from "react";
import saveToLocalStorage from "../../src/utils/saveToLocalStorage";
import { toast } from "react-toastify";
import getFromLocalStorage from "../utils/getFromLocalStorage";

export const AppContext = createContext();

const ContextProvider = ({ children }) => {
  const [totalCartToys, setTotalCartToys] = useState(0);
  const [cartIds, setCartIds] = useState([]);
  const [favIds, setFavIds] = useState([]);

  const checkTotalCartToys = () => {
    const cartToyList = JSON.parse(localStorage.getItem("cart"));
    setTotalCartToys(cartToyList ? cartToyList.length : 0);
  };

  const addToLocalStorage = (key, id) => {
    try {
      saveToLocalStorage(key, id);

      //   update total cart item in ui
      checkTotalCartToys();

      setCartIds(getFromLocalStorage("cart"));
      setFavIds(getFromLocalStorage("fav"));

      toast.success("Successfully Added!", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      });
    } catch (error) {
      toast.error(error.message, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      });
    }
  };

  useEffect(() => {
    // check total cart item on initial render
    checkTotalCartToys();

    setCartIds(getFromLocalStorage("cart"));
    setFavIds(getFromLocalStorage("fav"));
  }, []);

  return (
    <AppContext.Provider
      value={{
        addToLocalStorage,
        checkTotalCartToys,
        totalCartToys,
        cartIds,
        favIds,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
