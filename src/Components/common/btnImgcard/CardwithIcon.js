import React from "react";
import { useNavigate } from "react-router-dom";

const CardwithIcon = ({ item }) => {
  const navigate = useNavigate();
  const routerHandler = () => {
    navigate(item.path);
  };
  return (
    <button
      onClick={routerHandler}
      className="bg-indigo-600 flex items-center justify-center space-x-2 font-medium p-2 w-36 text-white rounded-md"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 h-5 font-medium"
      >
        <path
          fill-rule="evenodd"
          d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"
          clip-rule="evenodd"
        />
      </svg>
      <span>{item.name}</span>
    </button>
  );
};

export default CardwithIcon;
