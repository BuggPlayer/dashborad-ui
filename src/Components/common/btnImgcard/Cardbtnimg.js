import React from "react";
import CardwithIcon from "./CardwithIcon";

const Cardbtnimg = () => {
  
  return (
    <div className="">
      <div className="flex justify-between items-center">
        <h2 className="font-inter text-2xl font-semibold leading-8	text-gray-900">
          Hello , faizan
        </h2>
        <div className=" flex space-x-4">
          {[
            { name: "Category", path: "/category" },
            { name: "Product", path: "/product" },
          ].map((item) => (
            <CardwithIcon item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cardbtnimg;
