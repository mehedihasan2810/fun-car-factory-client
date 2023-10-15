const getFromLocalStorage = (key) => {
  const items = localStorage.getItem(key);
  return items ? JSON.parse(items) : [];
};

export default getFromLocalStorage;
