import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { BASEURL } from "../../../Apis/Apis";

const ProductForm = ({ tableData }) => {
  const uselocation = useLocation();
  const usenavigate = useNavigate();

  const [name, setName] = useState(uselocation?.state?.name || "");
  const [brand, setBrand] = useState(uselocation?.state?.brand || "");
  const [price, setPrice] = useState(uselocation?.state?.price || "");
  const [mrp, setMrp] = useState(uselocation?.state?.mrp || "");
  const [description, setDescription] = useState(
    uselocation?.state?.description || ""
  );
  const [richeDescription, setRichDescription] = useState(
    uselocation?.state?.name || ""
  );
  const [unit, setUnit] = useState(uselocation?.state?.unit || "");
  const [countInStock, setCountInStock] = useState(
    uselocation?.state?.countInStock || ""
  );
  const [status, setStatus] = useState(uselocation?.state?.name || "");
  const [categorValue, setCategoryvalue] = useState(
    uselocation?.state?.name || ""
  );

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

    const data = {
      name: name,
      description: description,
      rishDescription: richeDescription,
      mrp: mrp,
      weight: unit,
      image:
        "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=dfd2ec5a01006fd8c4d7592a381d3776&auto=format&fit=crop&w=1000&q=80",
      brand: brand,
      price: price,
      countInStock: countInStock,
      category: categorValue,
      status: "pending",
    };

    if (uselocation?.state) {
      axios({
        method: "put",
        url: `${BASEURL}updateproduct/${uselocation?.state?._id}`,
        data: data,
      })
        .then((res) => {
          setPostImage(
            "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=dfd2ec5a01006fd8c4d7592a381d3776&auto=format&fit=crop&w=1000&q=80"
          );
          console.log("res", res);
          usenavigate("/product");
        })
        .catch((err) => console.log(err));
    } else {
      axios({
        method: "post",
        url: `${BASEURL}addproduct`,
        data: data,
      })
        .then((res) => {
          setPostImage(
            "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=dfd2ec5a01006fd8c4d7592a381d3776&auto=format&fit=crop&w=1000&q=80"
          );
          console.log("res", res);
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
            <lable className="text-gray-500">Brand</lable>
            <input
              name="brand"
              placeholder="Enter Brand"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              // onBlur={{}}
              className="border p-3 rounded-md outline-none mt-1 w-full"
            />
            {/* {errors.color && touched.color ? (
            <p className="text-red-500 text-xs">{errors.color}</p>
          ) : null} */}
          </div>
          <div className="flex flex-col py-2">
            <lable className="text-gray-500">Price</lable>
            <input
              name="price"
              placeholder="Enter price"
              value={price}
              type="number"
              onChange={(e) => setPrice(e.target.value)}
              // onBlur={{}}
              className="border p-3 rounded-md outline-none mt-1 w-full"
            />
            {/* {errors.color && touched.color ? (
            <p className="text-red-500 text-xs">{errors.color}</p>
          ) : null} */}
          </div>
          <div className="flex flex-col py-2">
            <lable className="text-gray-500">Mrp</lable>
            <input
              name="mrp"
              placeholder="Enter Mrp"
              value={mrp}
              type="number"
              onChange={(e) => setMrp(e.target.value)}
              // onBlur={{}}
              className="border p-3 rounded-md outline-none mt-1 w-full"
            />
            {/* {errors.color && touched.color ? (
            <p className="text-red-500 text-xs">{errors.color}</p>
          ) : null} */}
          </div>
          <div className="flex flex-col py-2">
            <lable className="text-gray-500">Description</lable>
            <textarea
              name="color"
              cols="40"
              rows="3"
              placeholder="Enter Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              // onBlur={{}}
              className="border p-3 rounded-md outline-none mt-1 w-full"
            />
            {/* {errors.color && touched.color ? (
            <p className="text-red-500 text-xs">{errors.color}</p>
          ) : null} */}
          </div>
          <div className="flex flex-col py-2">
            <lable className="text-gray-500">RichDescription</lable>
            <textarea
              cols="40"
              rows="3"
              name="RichDescription"
              placeholder="Enter RichDescription"
              value={richeDescription}
              onChange={(e) => setRichDescription(e.target.value)}
              // onBlur={{}}
              className="border p-3 rounded-md outline-none mt-1 w-full"
            />
            {/* {errors.color && touched.color ? (
            <p className="text-red-500 text-xs">{errors.color}</p>
          ) : null} */}
          </div>
          <div className="flex flex-col py-2">
            <lable className="text-gray-500">Unit/Kg</lable>
            <input
              name="unit"
              placeholder="Enter Units"
              value={unit}
              onChange={(e) => setUnit(e.target.value)}
              // onBlur={{}}
              className="border p-3 rounded-md outline-none mt-1 w-full"
            />
            {/* {errors.color && touched.color ? (
            <p className="text-red-500 text-xs">{errors.color}</p>
          ) : null} */}
          </div>

          <div className="flex flex-col py-2">
            <lable className="text-gray-500">CountInStock</lable>
            <input
              name="CountInStock"
              placeholder="Enter CountInStock"
              value={countInStock}
              onChange={(e) => setCountInStock(e.target.value)}
              // onBlur={{}}
              className="border p-3 rounded-md outline-none mt-1 w-full"
            />
            {/* {errors.color && touched.color ? (
            <p className="text-red-500 text-xs">{errors.color}</p>
          ) : null} */}
          </div>
          <div className="flex flex-col py-2">
            <lable className="text-gray-500">Status</lable>
            <input
              name="Status"
              placeholder="Enter status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              // onBlur={{}}
              className="border p-3 rounded-md outline-none mt-1 w-full"
            />
            {/* {errors.color && touched.color ? (
            <p className="text-red-500 text-xs">{errors.color}</p>
          ) : null} */}
          </div>
          <div className="flex flex-col py-2 border px-2">
            <lable className="text-gray-500 text-sm ">Category</lable>
            <select
              className="inline-block w-1/3 bg-gray-100 p-1 rounded-md mt-1 outline-none"
              value={categorValue}
              onChange={(e) => setCategoryvalue(e.target.value)}
            >
              {tableData ? (
                tableData.map((item) => (
                  <option value={item._id}>{item.name}</option>
                ))
              ) : (
                <p>loading...</p>
              )}
            </select>
            {/* <input
                name="category"
                placeholder="select category "
                value={{}}
                onChange={(e) => setCategory(e.target.value)}
                // onBlur={{}}
                className="border p-3 rounded-md outline-none mt-1 w-full"
              /> */}
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
              {uselocation.state ? "Update" : "Submite"}
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

export default ProductForm;
