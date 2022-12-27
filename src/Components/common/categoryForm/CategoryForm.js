import axios from "axios";
import React, { useState } from "react";
import { useLocation , useNavigate } from "react-router-dom";
import { BASEURL } from "../../../Apis/Apis";

const CategoryForm = () => {
  const uselocation = useLocation();
  const usenavigate= useNavigate()
  console.log(uselocation?.state?.name);
  const [name, setName] = useState(uselocation?.state?.name || "");
  const [color, setColor] = useState(uselocation?.state?.color || "");
  const [postImage, setPostImage] = useState(
    uselocation?.state?.image ||
      "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=dfd2ec5a01006fd8c4d7592a381d3776&auto=format&fit=crop&w=1000&q=80"
  );

  //cover Base64 methode
  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };
  // on change method
  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    setPostImage(base64);
  };

  const submitButton = (e) => {
    e.preventDefault();

    if (uselocation?.state) {
      axios({
        method: "put",
        url: `${BASEURL}updatecategory/${uselocation?.state?._id}`,
        data: {
          name: name,
          color: color,
          image: postImage,
        },
      })
        .then((res) => {
          setName("");
          setColor("");
          setPostImage(
            "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=dfd2ec5a01006fd8c4d7592a381d3776&auto=format&fit=crop&w=1000&q=80"
          );
          usenavigate('/category')
        //   console.log(res);
        })
        .catch((err) => console.log(err));
    } else {
      axios({
        method: "post",
        url: `${BASEURL}addcategory`,
        data: {
          name: name,
          color: color,
          image: postImage,
        },
      })
        .then((res) => {
          setName("");
          setColor("");
          setPostImage(
            "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=dfd2ec5a01006fd8c4d7592a381d3776&auto=format&fit=crop&w=1000&q=80"
          );
        //   console.log(res);
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="w-full m-auto inline-flex  justify-center   ">
      <div className=" p-5 border rounded-md w-1/2 m-10 flex flex-col">
        <form onSubmit={(e) => submitButton(e)}>
          <div className="flex flex-col">
            <lable className="text-gray-500 ">Name</lable>
            <input
              placeholder="Enter category name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              // onBlur={{}}
              className="border p-3 rounded-md outline-none mt-1 w-full"
            />
            {/* {errors.name && touched.name ? (
              <p className="text-red-500 text-xs">{errors.name}</p>
            ) : null} */}
          </div>
          <div className="flex flex-col py-2">
            <lable className="text-gray-500">Color</lable>
            <input
              name="color"
              placeholder="Enter category Color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              // onBlur={{}}
              className="border p-3 rounded-md outline-none mt-1 w-full"
            />
            {/* {errors.color && touched.color ? (
              <p className="text-red-500 text-xs">{errors.color}</p>
            ) : null} */}
          </div>
          <div className="flex flex-col">
            <lable className="text-gray-500">Image</lable>
            <input
              type="file"
              name="image"
              accept=".jpeg, .png, .jpg"
              placeholder="uplaod categoty image"
              onChange={(e) => handleFileUpload(e)}
              // onBlur={{}}
              className="border p-3 rounded-md outline-none mt-1 w-full"
            />
            {/* {errors.image && touched.image ? (
              <p className="text-red-500 text-xs">{errors.image}</p>
            ) : null} */}
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="border py-2 px-4 bg-indigo-100 rounded-md mt-4 font-bold capitalize  "
            >
              {uselocation?.state ? "Update" : "Submite"}
            </button>
          </div>
        </form>

        <div className="w-20">
          <img className="h-20 w-60  border" src={postImage} />
        </div>
      </div>
    </div>
  );
};

export default CategoryForm;
