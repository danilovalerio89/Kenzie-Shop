import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from "redux";
import thunk from "redux-thunk";
import productsReducer from "./modules/products/reducer";
import cartReducer from "./modules/cart/reducer";

const reducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
