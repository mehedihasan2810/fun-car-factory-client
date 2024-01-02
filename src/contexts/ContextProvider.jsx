import { createContext, useEffect, useState } from "react";
import saveToLocalStorage from "../../src/utils/saveToLocalStorage";
import { toast } from "react-toastify";
import getFromLocalStorage from "../utils/getFromLocalStorage";

// Create a context for managing application-wide state
export const AppContext = createContext();

// ContextProvider component for managing app state
const ContextProvider = ({ children }) => {
  // State for tracking the total number of items in the cart
  const [totalCartToys, setTotalCartToys] = useState(0);

  // State for storing cart and favorite item IDs
  const [cartIds, setCartIds] = useState([]);
  const [favIds, setFavIds] = useState([]);

  // Function to check and update the total number of items in the cart
  const checkTotalCartToys = () => {
    const cartToyList = JSON.parse(localStorage.getItem("cart"));
    setTotalCartToys(cartToyList ? cartToyList.length : 0);
  };

  // Function to add an item to local storage and update state
  const addToLocalStorage = (key, id) => {
    try {
      saveToLocalStorage(key, id);

      // Update total cart item count in UI
      checkTotalCartToys();

      // Update cart and favorite IDs
      setCartIds(getFromLocalStorage("cart"));
      setFavIds(getFromLocalStorage("fav"));

      // Show success toast notification
      toast.success("Successfully Added!", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      });
    } catch (error) {
      // Show error toast notification
      toast.error(error.message, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      });
    }
  };

  // useEffect to run initial setup when the component mounts
  useEffect(() => {
    // Check the total cart items on initial render
    checkTotalCartToys();

    // Set initial values for cart and favorite IDs
    setCartIds(getFromLocalStorage("cart"));
    setFavIds(getFromLocalStorage("fav"));
  }, []);

  // Provide the context values to the children components
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
