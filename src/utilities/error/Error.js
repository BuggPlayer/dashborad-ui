import React from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";

const Error = () => {
  const errors = useSelector((state) => state.products.errors);
  console.log("errors", errors);

  return <div>hello</div>;
};

export default Error;
