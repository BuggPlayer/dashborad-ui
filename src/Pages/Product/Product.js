import React, { useState, useEffect, useMemo } from "react";
import { Getproducts } from "../../redux/action/product";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../../Components/common/Loader/Loader";
import ProductForm from "../../Components/common/productForm/ProductForm";
import { ProductCols } from "../../Components/common/Table/Colums";

import ReactTable from "../../Components/common/Table/ReactTable";
import Error from "../../utilities/error/Error";

const Product = () => {
  const dispatch = useDispatch();
  const [tableData, setTableData] = useState([]);
  const [productData, setProductData] = useState(null);
  const product = useSelector((satte) => satte.products.items);

  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState("");
  const [mrp, setMrp] = useState("");
  const [description, setDescription] = useState("");
  const [richeDescription, setRichDescription] = useState("");
  const [unit, setUnit] = useState("");
  const [countInStock, setCountInStock] = useState("");
  const [status, setStatus] = useState("");
  const [categorValue, setCategoryvalue] = useState("");
  const [color, setColor] = useState("");

  const [postImage, setPostImage] = useState({
    myFile:
      "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=dfd2ec5a01006fd8c4d7592a381d3776&auto=format&fit=crop&w=1000&q=80",
  });

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
    setPostImage({ ...postImage, myFile: base64 });
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

    // console.log("data", data);
    API.post('/addproduct', data)
      .then((res) => {
        setPostImage({
          myFile:
            "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=dfd2ec5a01006fd8c4d7592a381d3776&auto=format&fit=crop&w=1000&q=80",
        });
      }).catch((err) => console.log(err));
  };

  useEffect(() => {
    dispatch(Getproducts());
  }, []);
  console.log(product);
  return (
    <>
      <Loader />
      <Error />
      <ProductForm tableData={tableData} />
      <div className="p-5 ">
        <h2 className="py-4 font-bold text-lg">Product Table</h2>
        <ReactTable columns={ProductCols} data={product} />
      </div>
    </>
  );
};

export default Product;

// err loader and response
