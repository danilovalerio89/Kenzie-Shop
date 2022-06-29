import { addToCart, removeFromCart } from "./actions";

export const addToCartThunk = (product) => (dispatch) => {
  const listCart = JSON.parse(localStorage.getItem("cartItens")) || [];
  listCart.push(product);
  localStorage.setItem("cartItens", JSON.stringify(listCart));
  dispatch(addToCart(product));
};

export const removeFromCartThunk = (index) => (dispatch, getStore) => {
  const { cart } = getStore();
  const listCart = cart.splice((index, 1));
  localStorage.setItem("cartItens", JSON.stringify(listCart));
  dispatch(removeFromCart(listCart));
};
