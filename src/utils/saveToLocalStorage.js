const saveToLocalStorage = (key, id) => {
  if (localStorage.getItem(key)) {
    const items = JSON.parse(localStorage.getItem(key));
    if (items.includes(id)) {
      throw new Error("Item already exists!");
    } else {
      items.push(id);
      localStorage.setItem(key, JSON.stringify(items));
    }
  } else {
    localStorage.setItem(key, JSON.stringify([id]));
  }
};

export default saveToLocalStorage;
