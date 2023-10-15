import { createContext, useEffect, useState } from "react";
import saveToLocalStorage from "../../src/utils/saveToLocalStorage";
import { toast } from "react-toastify";

export const AppContext = createContext();

const ContextProvider = ({ children }) => {
  const [totalCartToys, setTotalCartToys] = useState(0);

  const checkTotalCartToys = () => {
    const cartToyList = JSON.parse(localStorage.getItem("cart"));
    setTotalCartToys(cartToyList ? cartToyList.length : 0);
  };

  const addToLocalStorage = (key, id) => {
    try {
      saveToLocalStorage(key, id);

      //   update total cart item in ui
      checkTotalCartToys();

      toast.success("Successfully Added To Cart!", {
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
  }, []);

  return (
    <AppContext.Provider value={{ addToLocalStorage, totalCartToys }}>
      {children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
