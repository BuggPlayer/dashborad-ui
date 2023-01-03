import React from "react";
import { BriefcaseIcon } from "@heroicons/react/24/outline";

const CardwithIcon = ({ detail }) => {
  return (
    <div className="bg-white shadow-lg flex space-x-5 px-4 py-3 rounded-lg max-w-20">
      <div className="bg-indigo-600 items-center inline-block p-2 rounded-md">
        <BriefcaseIcon className="text-white w-8 h-8" />
      </div>
      <div className=" ">
        <span className="font-inter   text-gray-500 text-sm leading-5 font-medium">
          {detail.title}
        </span>
        <div className="flex space-x-2 items-baseline ">
          <h2 className="font-inter   text-gray-900 text-2xl leading-8 font-semibold">
            {detail.count}
          </h2>
          {detail.percentage && (
            <div className="flex items-center text-greenColor ">
              <img src="/assets/images/up_arrow.svg" alt="up_arrow" />
              <span className="text-sm ml-1 leading-5 text-green-600 font-semibold">
                {detail.percentage}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardwithIcon;
