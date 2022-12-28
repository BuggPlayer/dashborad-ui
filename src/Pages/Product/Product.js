import axios from "axios";
import React, { useState, useEffect, useMemo } from "react";
import { BASEURL } from "../../Apis/Apis";
import Loader from "../../Components/common/Loader/Loader";
import ProductForm from "../../Components/common/productForm/ProductForm";
import { ProductCols } from "../../Components/common/Table/Colums";
import CommoneTable from "../../Components/common/Table/CommoneTable";
import ReactTable from "../../Components/common/Table/ReactTable";

const Product = () => {
  const [tableData, setTableData] = useState([]);
  const [productData, setProductData] = useState(null);

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

    console.log("data", data);
    axios({
      method: "post",
      url: "http://localhost:8000/addproduct",
      data: data,
    })
      .then((res) => {
        setPostImage({
          myFile:
            "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=dfd2ec5a01006fd8c4d7592a381d3776&auto=format&fit=crop&w=1000&q=80",
        });
        console.log("res", res);
      })
      .catch((err) => console.log(err));
  };

  const getallcategoryData = () => {
    axios({ method: "get", url: "http://localhost:8000/allcategory" })
      .then((res) => {
        setTableData(res.data);
        // console.log("res", res);
      })
      .catch((err) => console.log("err ", err));
  };
  const getallProductData = () => {
    axios({ method: "get", url: `${BASEURL}allproducts` })
      .then((res) => {
        setProductData(res.data.data);
        // console.log("res", res);
      })
      .catch((err) => console.log("err ", err));
  };
  useEffect(() => {
    getallcategoryData();
    getallProductData();
  }, [tableData]);

  // const columns = useMemo(() => COLUMS, []);

  console.log("tableDatapro", productData);
  return (
    <>
      <ProductForm tableData={tableData} />
      <div className="p-5 ">
        <h2 className="py-10">Product Table</h2>

        {productData ? (
          <ReactTable columns={ProductCols} data={productData} />
        ) : (
          <Loader />
        )}
      </div>
    </>
  );
};

export default Product;
