export const COLUMS = [
  {
    Header: "ID",
    accessor: "_id",
  },
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Color",
    accessor: "color",
  },
  {
    Header: "Image",
    accessor: "image",
    Cell: (tableProps) => (
      <div className="w-10 h-10">
        <img
          onClick={() => console.log("hello")}
          src={tableProps.row.original.image}
        />
      </div>
    ),
  },
];

export const ProductCols = [
  {
    Header: "Id",
    accessor: "_id",
  },
  {
    Header: "Product",
    accessor: "name",
  },

  {
    Header: "Brand",
    accessor: "brand",
  },
  {
    Header: "Price",
    accessor: "price",
  },
  {
    Header: "Desciption",
    accessor: "description",
  },

  {
    Header: "Mrp",
    accessor: "mrp",
  },
  {
    Header: "CountInStock",
    accessor: "countInStock",
  },
  {
    Header: "Image",
    accessor: "image",
    Cell: (tableProps) => (
      <div className="w-10 h-10">
        <img
          onClick={() => console.log("hello")}
          src={tableProps.row.original.image}
        />
      </div>
    ),
  },
  {
    Header: "Category",
    accessor: "category.name",
  },
  {
    Header: "Status",
    accessor: "status",
  },
  {
    Header: "RichDesciption",
    accessor: "rishDescription",
  },
  {
    Header: "Unit",
    accessor: "weight",
  },
];

///////////////

export const columns = [
  {
    Header: "Date",
    accessor: "date",
  },

  {
    Header: "Name",
    accessor: "user",
  },

  {
    Header: "Amount",
    accessor: "amount",
  },

  {
    Header: "Category",
    accessor: "category",
  },

  {
    Header: "Status",
    accessor: "status",
  },
];
