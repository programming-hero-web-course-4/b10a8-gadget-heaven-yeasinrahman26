import { toast } from "react-toastify";

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
    toast.error(`This Gadget is already added to the cart.`);
  } else {
    storedList.push(id);
    const storedListStr = JSON.stringify(storedList);
    localStorage.setItem("cart-list", storedListStr);
    // notify
    toast.success("Gadget Is added To Cart");
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
    toast.error(`This Gadget is already added to the wish list.`);
  } else {
    storedList.push(id);
    const storedListStr = JSON.stringify(storedList);
    localStorage.setItem("wish-list", storedListStr);
    // notify
    toast.success("Gadget Is added To WishList");
  }
};

export { addToCart, addToWish, getStoredCart, getStoredWish };
