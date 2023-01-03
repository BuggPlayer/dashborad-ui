import axios from "axios";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import CategoryForm from "./Components/common/categoryForm/CategoryForm";
import Header from "./Components/common/Header/Header";
import ProductForm from "./Components/common/productForm/ProductForm";

import Category from "./Pages/Category/Category";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Login from "./Pages/login/Login";
import PageNotFound from "./Pages/PageNotFound/PageNotFound";
import Product from "./Pages/Product/Product";
import User from "./Pages/User/User";

const Routerss = ({}) => {
  const [user, setuser] = useState(false);
  return (
    <BrowserRouter>
      {/* <ScrollToTOP /> */}

      {user ? (
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      ) : (
        <>
          <Header />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/product" element={<Product />} />
            <Route path="/user" element={<User />} />
            <Route path="/category" element={<Category />} />
            <Route path="/categoryForm" element={<CategoryForm />} />
            <Route path="/productForm" element={<ProductForm />} />
            {/* <Route path="/people/:peopleId" element={<PeopleDetail />} /> */}
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </>
      )}
    </BrowserRouter>
  );
};

export default Routerss;
