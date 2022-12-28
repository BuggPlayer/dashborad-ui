import React, { useState } from "react";
import Cardbtnimg from "../../Components/common/btnImgcard/Cardbtnimg";
// import CommoneTable from "../../Components/common/Table/CommoneTable";
import { dashboardTabelSchema } from "../../utilities/Schema/dashboard/dashboard";
import Login from "../login/Login";

const Dashboard = () => {
  const [dashboradTableinfo, setDashboradTableinfo] =
    useState(dashboardTabelSchema);

  return (
    <div className=" mt-10 px-10">
      <Cardbtnimg />
      <Login />
      {/* <CommoneTable
        tabelInfo={dashboradTableinfo}
        // tabelData={projectData}
        // handleSorting={handleSorting}
        // sortField={projectFilter.sortField}
        // onClickRow={onClickTabelRow}
      /> */}
    </div>
  );
};

export default Dashboard;
