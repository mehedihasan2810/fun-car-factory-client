const saveToLocalStorage = (id) => {
  if (localStorage.getItem("cart")) {
    const items = JSON.parse(localStorage.getItem("cart"));
    items.push(id);
    localStorage.setItem("cart", JSON.stringify(items));
  }else{
    localStorage.setItem('cart', JSON.stringify([id]))
  }
};

export default saveToLocalStorage;
