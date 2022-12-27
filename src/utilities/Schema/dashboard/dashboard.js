export const dashboardTabelSchema = {
  hCell: [
    { title: "PRODUCTS", accessor: "project_name", sortable: false },
    { title: "CATEGORY", accessor: "project_manager", sortable: false },
    { title: "QTY", accessor: "project_type_name", sortable: false },
    { title: "STOCK", accessor: "project_manager", sortable: false },
    { title: "MRP", accessor: "customer_name", sortable: false },
    { title: "DISCOUNT", accessor: "project_start_date", sortable: false },
    // { title: 'END DATE', accessor: 'project_end_date', sortable: false},
    { title: "UNIT", accessor: "is_support", sortable: false },
    { title: "STATUS", accessor: "status", sortable: false },
  ],
  rKeys: [
    { accessor: "project_name", navigate: true, tooltip: true },
    { accessor: "project_type_name" },
    { accessor: "project_manager" },
    { accessor: "customer_name" },

  ],
};
