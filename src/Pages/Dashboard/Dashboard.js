import React, { useState } from "react";
import Cardbtnimg from "../../Components/common/btnImgcard/Cardbtnimg";
import CardwithIcon from "../../Components/common/CardwithIcon";
// import CommoneTable from "../../Components/common/Table/CommoneTable";
import { dashboardTabelSchema } from "../../utilities/Schema/dashboard/dashboard";
import { useSelector } from "react-redux";
const Dashboard = () => {
  const totalProduct = useSelector((state) => state?.products?.items?.length);
  const dashInfoSchema = [
    {
      title: "Total Products",
      count: totalProduct,
      percentage: null,
      order: null,
    },
    { title: "Total Category", count: "4", percentage: null, order: null },
    {
      title: "Total Users",
      count: "582",
      percentage: null,
      order: null,
    },
    { title: "Revenues", count: "1", percentage: null, order: null },
    { title: "Revenues", count: "1", percentage: null, order: null },
  ];
 

  return (
    <div className=" mt-10 px-10">
      <Cardbtnimg />
      <div className="mt-14  gap-4 flex justify-between">
        {dashInfoSchema.map((item, index) => (
          <CardwithIcon key={index} detail={item} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
