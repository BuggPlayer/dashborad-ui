import { Dialog, Transition } from "@headlessui/react";
import axios from "axios";
import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASEURL } from "../../../Apis/Apis";

export default function Modal({ isOpen, closeModal, data }) {
  const navigate = useNavigate();
  console.log("data", data);
  const deletecategory = () => {
    if (data?.color) {
      axios({
        method: "delete",
        url: `${BASEURL}deletecategory/${data?._id}`,
      })
        .then((res) => {
          // console.log("res", res);
          closeModal();
        })

        .catch((err) => console.log("err", err));
    } else {
      axios({
        method: "delete",
        url: `${BASEURL}deleteproduct/${data?._id}`,
      })
        .then((res) => {
          console.log("res", res);
          closeModal();
        })

        .catch((err) => console.log("err", err));
    }
  };

  const editcategory = () => {
    if (data?.color) {
      navigate("/categoryForm", { state: data });
    } else {
      navigate("/productForm", { state: data });
    }
  };
  return (
    <>
      {/* <div className="fixed inset-0 flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Open dialog
        </button>
      </div> */}

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10 " onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto ">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Category
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-400">
                      {data?.color
                        ? "Now you can delete or edit category"
                        : "Now you can delete or edit product"}
                    </p>
                    <h1> {data?.name}</h1>
                  </div>

                  <div className="mt-4 flex justify-between">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-red-400 px-4 py-2 text-sm font-medium text-white hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={deletecategory}
                    >
                      Delete!
                    </button>

                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={editcategory}
                    >
                      Edit !
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

// import React from 'react'

// const Modal = () => {
//   return (
//     <div>

//     </div>
//   )
// }

// export default Modal
