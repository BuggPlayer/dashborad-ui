import React, { useState, useEffect, useMemo } from "react";
// import { useFormik } from "formik";
// import { categorySchema } from "../../utilities/Schema/yup/YupSchema";
import axios from "axios";
import MOCK_DATA from "../../utilities/Schema/MOCK_DATA.json";
import CommoneTable from "../../Components/common/Table/CommoneTable";
import { COLUMS } from "../../Components/common/Table/Colums";
import ReactTable from "../../Components/common/Table/ReactTable";
import { BASEURL } from "../../Apis/Apis";
import CategoryForm from "../../Components/common/categoryForm/CategoryForm";
import Loader from "../../Components/common/Loader/Loader";
const Category = () => {
  // table data
  const [tableData, setTableData] = useState(null);
  //loading
  const [loading, setLoading] = useState(false);
  //error
  const [error, setError] = useState(null);
  //form

  const getallcategoryData = () => {
    axios({ method: "get", url: `${BASEURL}allcategory` })
      .then((res) => {
        setError(null);
        setLoading(true);
        setTableData(res.data);
        // console.log("res", res.data);
      })
      .catch((err) => {
        setError(err);
        console.log("err ", err);
      });
  };
  useEffect(() => {
    getallcategoryData();
  }, []);

  // const columns = useMemo(() => COLUMS, []);

  console.log("tableDatacate", tableData);
  return (
    <>
      <CategoryForm />
      <div className="p-5 ">
        <h2 className="py-10">Category Table</h2>
        {tableData ? (
          <ReactTable columns={COLUMS} data={tableData} />
        ) : (
          <Loader />
        )}

        {/* <CommoneTable columns={columns} row={tableData} /> */}
      </div>
    </>
  );
};

export default Category;
