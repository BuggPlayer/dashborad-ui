import React from "react";
import { useSelector } from "react-redux";
const Loader = () => {
  const loading = useSelector((state) => state.products.loading);
  console.log("ggggg", loading);
  return (
    <div
    // className="flex h-full w-full grow items-center justify-center absolute"
    // style={{ background: "#80808063", zIndex: 99 }}
    >
      {loading ? (
        <div className="inline-block rounded-full bg-indigo-400 p-5">
          <svg
            className="h-10 w-10 animate-spin text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        </div>
      ) : null}
    </div>
  );
};

export default Loader;
