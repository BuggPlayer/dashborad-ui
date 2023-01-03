import axios from "axios";
import React, { useState, useEffect } from "react";
import { BASEURL } from "../../Apis/Apis";
import { useAuthValue } from "../../Context/Authcontext";

const Login = () => {
  const [userName, setUserName] = useState("nadeem@gmail.com");
  const [password, setPassword] = useState("123456");
  const [, dispatch] = useAuthValue();
  // console.log("user", dispatch);
  const getUserLogin = () => {
    dispatch({ type: "SET_ITEM", payload: "singleItem" });
    // axios({
    //   method: "post",
    //   url: "http://localhost:8000/auth/login",
    //   data: { email: userName, password: password },
    // })
    //   .then((res) => {
    //     console.log("res", res.data.token);

    //     dispatch({ type: "TOKEN", payload: "res?.data?.token" });
    //   })
    //   .catch((err) => console.log("err", err));
  };

  return (
    <div className=" flex justify-center  items-center h-screen">
      <div className="border  rounded-md p-5 w-1/3">
        <div className="flex flex-col">
          <lable className="text-gray-500 ">User name</lable>
          <input
            placeholder="Enter category name"
            name="name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            // onBlur={{}}
            className="border p-3 rounded-md outline-none mt-1 w-full"
          />
          {/* {errors.name && touched.name ? (
            <p className="text-red-500 text-xs">{errors.name}</p>
          ) : null} */}
        </div>
        <div className="flex flex-col">
          <lable className="text-gray-500 ">Password</lable>
          <input
            autoComplete="off"
            type="password"
            placeholder="Enter category name"
            name="name"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            // onBlur={{}}
            className="border p-3 rounded-md outline-none mt-1 w-full"
          />
          {/* {errors.name && touched.name ? (
            <p className="text-red-500 text-xs">{errors.name}</p>
          ) : null} */}
        </div>

        <div className="flex justify-end">
          <button
            onClick={getUserLogin}
            type="submit"
            className="border py-2 px-4 bg-indigo-100 rounded-md mt-4 font-bold capitalize  "
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
