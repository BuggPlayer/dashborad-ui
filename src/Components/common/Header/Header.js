import { Fragment, useEffect, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
// import { useLocation, useNavigate } from "react-router-dom";
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/outline";
// import { useAuth } from "../../../App";
// import { Logout } from "../../../utils/Utils";
// import { userIcon } from "../../../../public/assets/images/user";

const hLiClassName =
  "ml-10 flex items-center cursor-pointer border-b-2 border-transparent hover:text-blackColor hover:border-blueColor";

const headers = [
  //   { title: "Dashboard", active: false, path: "/dashboard" },
  //   { title: "Utilization", active: false, path: "/utilization" },
  //   { title: "People", active: false, path: "/people" },
  //   { title: "Projects", active: false, path: "/projects" },
  //   { title: "Revenue", active: false, path: "/revenue" },
  //   { title: "Reports", active: false, path: "/reports" },

  { title: "Dashboard", active: false },
  { title: "Product", active: false },
  { title: "Category", active: false },
  { title: "Users", active: false },
  { title: "Revenue", active: false },
];

const Header = () => {
  //   const location = useLocation();
  //   const navigate = useNavigate();
  //   const { user, setUser } = useAuth();
  const [icons, setIcons] = useState(headers);

  //   useEffect(() => {
  //     setIcons(
  //       headers.map((i) => {
  //         return { ...i, active: location.pathname.includes(i.path) };
  //       })
  //     );
  //   }, [location]);

  const changeHeaderTab = (index) => {
    // navigate(icons[index].path);
  };

  //   const userDetails = JSON.parse(JSON.stringify(user || {}));
  return (
    <div className="  w-full h-16 bg-white shadow-sm shadow-black-500/60 px-10 flex justify-between items-center z-50">
      <div className="flex space-x-2 items-center">
        <a href="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-8 h-8"
          >
            <path d="M19.006 3.705a.75.75 0 00-.512-1.41L6 6.838V3a.75.75 0 00-.75-.75h-1.5A.75.75 0 003 3v4.93l-1.006.365a.75.75 0 00.512 1.41l16.5-6z" />
            <path
              fill-rule="evenodd"
              d="M3.019 11.115L18 5.667V9.09l4.006 1.456a.75.75 0 11-.512 1.41l-.494-.18v8.475h.75a.75.75 0 010 1.5H2.25a.75.75 0 010-1.5H3v-9.129l.019-.006zM18 20.25v-9.565l1.5.545v9.02H18zm-9-6a.75.75 0 00-.75.75v4.5c0 .414.336.75.75.75h3a.75.75 0 00.75-.75V15a.75.75 0 00-.75-.75H9z"
              clip-rule="evenodd"
            />
          </svg>

          {/* <img src={"/assets/images/logo.svg"} alt="logo" /> */}
        </a>
        <ul className="flex h-16 font-medium	 flex-1 ml-10 text-sm font-inter text-lightGrayColor  space-x-6 ">
          {icons.map((item, index) => (
            <li
              key={index}
              className={`${hLiClassName}${
                item.active ? " text-blackColor border-blueColor" : ""
              }`}
              onClick={() => changeHeaderTab(index)}
            >
              {item.title}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-end  items-center flex-1">
        <div className="flex relative mx-4">
          <img
            src={"/assets/images/searchIcon.svg"}
            alt=""
            className="absolute top-0 bottom-0 left-4 w-5 h-5 m-auto"
          />
          <input
            placeholder=""
            className="border  outline-none text-left pl-12 placeholder:mr-3 border-gray-300 w-64 p-2 rounded-md"
          />
        </div>
        <div className="relative w-7 h-7 mr-4 flex items-center space-x-1">
          <img
            src={"/assets/images/Avatar.svg"}
            alt="bellIcon"
            className="w-6 h-6"
          />
          <div className="absolute top-0 right-0 bg-red-500 rounded-full w-4 h-4 text-center">
            <p className="text-xs font-semibold	text-white">5</p>
          </div>
        </div>
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button
              as="div"
              className="w-8 h-8 overflow-hidden rounded-full"
            >
              {/* <img src={'/assets/images/Avatar.svg'} alt="avatar" /> */}
              <img src="/assets/images/user.svg" alt="" />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="z-10 absolute right-0 p-2 m-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="px-1 py-1">
                <Menu.Item disabled={true}>
                  <>
                    <div className="text-lightGrayColor bold capitalize">
                      {/* {userDetails.user?.name || "---"}
                      {` (${userDetails.user?.role})`} */}
                      abc
                    </div>
                    <div className="text-lightGrayColor lowercase">
                      {/* {userDetails.user?.email || "---"} */}
                      abc@gmail.com
                    </div>
                  </>
                </Menu.Item>
              </div>
              <div className="px-1 py-1">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`group flex w-full items-center rounded-md px-2 py-2 text-sm ${
                        active ? "text-blueColor bg-blue-100" : "text-gray-900"
                      } `}
                      //   onClick={() => {
                      //     Logout(setUser);
                      //   }}
                    >
                      <ArrowRightOnRectangleIcon
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                      Logout
                    </button>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
};

export default Header;
