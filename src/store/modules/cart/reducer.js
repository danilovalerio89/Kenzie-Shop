import { ADD_CART, REMOVE_CART } from "./actionType";

const defaultCart = JSON.parse(localStorage.getItem("cartItens")) || [];

const cartReducer = (state = defaultCart, action) => {
  switch (action.type) {
    case ADD_CART:
      const { product } = action;
      return [...state, product];
    case REMOVE_CART:
      const { list } = action;
      return list;
    default:
      return state;
  }
};
export default cartReducer;
