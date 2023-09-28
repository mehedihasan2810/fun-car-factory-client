const deleteFromLocalStorage = (key, id) => {
  if (localStorage.getItem(key)) {
    const items = JSON.parse(localStorage.getItem(key));
    const filteredItems = items.filter((item) => id !== item);
    localStorage.setItem(key, JSON.stringify(filteredItems));
  }
};

export default deleteFromLocalStorage;
