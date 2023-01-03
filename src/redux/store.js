import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import {
  composeWithDevTools,
  devToolsEnhancer,
} from "redux-devtools-extension";
import { ProductReducer } from "./recuder/product";
// import { cartReducer } from "./reducers/cartReducer";
// import { ProductReducers } from "./reducers/ProductReducer";

const reducers = combineReducers({
  products: ProductReducer,
});

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);

export default store;
