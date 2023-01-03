import { PRODUCT_LOADING, GET_PRODUCTS, GET_PRODUCTS_FAILED,STOP_PRODUCT_LOADING } from "../Types";

const initState = {
  items: [],
  loading: false,
  errors: {},
};

export const ProductReducer = (state = initState, action) => {
  console.log("action", action);
  switch (action.type) {
    case PRODUCT_LOADING:
      return {
        ...state,
        loading: true,
        errors: null,
      };
      case STOP_PRODUCT_LOADING:
        return {
          ...state,
          loading: false,
          errors: null,
        };
    case GET_PRODUCTS:
      return {
        ...state,
        loading: false,
        items: action.payload,
        errors: null,
      };
    case GET_PRODUCTS_FAILED:
      return {
        ...state,
        loading: false,
        errors: action.errors,
      };

    default:
      return state;
  }
};
