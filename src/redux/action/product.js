import axios from "axios";
import { BASEURL } from "../../Apis/Apis";
import handleError from "../../utilities/handleError";
import {
  PRODUCT_LOADING,
  GET_PRODUCTS,
  GET_PRODUCTS_FAILED,
  STOP_PRODUCT_LOADING,
} from "../Types";

export const Getproducts = () => {
  return (dispatch) => {
    dispatch(setProductLoading());
    axios({ method: "get", url: `${BASEURL}allproductss` })
      .then((res) => {
        // console.log(res.data);
        dispatch({ type: GET_PRODUCTS, payload: res?.data?.data });
        dispatch(setStopProductLoading());
      })
      .catch((err) => {
        console.log("err", err);
        dispatch({ type: GET_PRODUCTS_FAILED, errors: err });
        // dispatch(handleError(err));
        dispatch(setStopProductLoading());
      });
  };
};

export const setProductLoading = () => {
  return {
    type: PRODUCT_LOADING,
  };
};
export const setStopProductLoading = () => {
  return {
    type: STOP_PRODUCT_LOADING,
  };
};
