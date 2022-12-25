import React from "react";

const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <span className="w-2/5">
        <img
          src={"/assets/images/coming-soon.svg"}
          alt="Coming Soon"
          className="w-full"
        />
      </span>
      <p className="font-inter text-2xl font-semibold leading-8	text-gray-900">
        Page Not Found
      </p>
    </div>
  );
};

export default PageNotFound;
