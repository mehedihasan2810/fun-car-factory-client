const deleteFromLocalStorage = (id) => {
  if (localStorage.getItem("cart")) {
    const items = JSON.parse(localStorage.getItem("cart"));
    const filteredItems = items.filter((item) => id !== item);
    localStorage.setItem("cart", JSON.stringify(filteredItems));
  }
};

export default deleteFromLocalStorage;
