import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Category from "./Pages/Category/Category";
import Dashboard from "./Pages/Dashboard/Dashboard";
import PageNotFound from "./Pages/PageNotFound/PageNotFound";
import Product from "./Pages/Product/Product";
import User from "./Pages/User/User";

const Routerss = () => {
  return (
    <BrowserRouter>
      {/* <ScrollToTOP /> */}
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/product" element={<Product />} />
        <Route path="/user" element={<User />} />
        <Route path="/category" element={<Category />} />
        {/* <Route path="/people/:peopleId" element={<PeopleDetail />} /> */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routerss;
