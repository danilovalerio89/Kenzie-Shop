import { ADD_CART, REMOVE_CART } from "./actionType";

export const addToCart = (product) => ({ type: ADD_CART, product });
export const removeFromCart = (list) => ({ type: REMOVE_CART, list });
