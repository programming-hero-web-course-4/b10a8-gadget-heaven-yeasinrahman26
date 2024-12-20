const getStoredCart = () => {
  // Get the stored cart list from localStorage
  const storedListStr = localStorage.getItem("cart-list");
  if (storedListStr) {
    const storedList = JSON.parse(storedListStr);
    return storedList;
  } else {
    return [];
  }
};

const addToCart = (id) => {
  const storedList = getStoredCart();
  if (storedList.includes(id)) {
    alert(`${id} is already added to the cart.`);
  } else {
    storedList.push(id);
    const storedListStr = JSON.stringify(storedList);
    localStorage.setItem("cart-list", storedListStr);
  }
};

const getStoredWish = () => {
  // Get the stored wish list from localStorage
  const storedListStr = localStorage.getItem("wish-list");
  if (storedListStr) {
    const storedList = JSON.parse(storedListStr);
    return storedList;
  } else {
    return [];
  }
};

const addToWish = (id) => {
  const storedList = getStoredWish();
  if (storedList.includes(id)) {
    alert(`${id} is already added to the wish list.`);
  } else {
    storedList.push(id);
    const storedListStr = JSON.stringify(storedList);
    localStorage.setItem("wish-list", storedListStr);
  }
};

export { addToCart, addToWish, getStoredCart };
