const saveToLocalStorage = (id) => {
  if (localStorage.getItem("cart")) {
    const items = JSON.parse(localStorage.getItem("cart"));
    if (items.includes(id)) {
     throw new Error('Item already exists!')
    } else {
      items.push(id);
      localStorage.setItem("cart", JSON.stringify(items));
    }
  } else {
    localStorage.setItem("cart", JSON.stringify([id]));
  }
};

export default saveToLocalStorage;
