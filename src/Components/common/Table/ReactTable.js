import React, { useMemo, useState } from "react";
import { useTable } from "react-table";
import Modal from "../Modal/Modal";
const ReactTable = (props) => {
  let [isOpen, setIsOpen] = useState(false);
  const [rowData, setRowData] = useState(null);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const data = useMemo(() => props.data, []);
  const columns = useMemo(() => props.columns, []);
  //   console.log("data", data);
  //   console.log("col", columns);

  const initialState = { hiddenColumns: ["_id"] };
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
    initialState,
  });

  const SendData = (cell) => {
    openModal();
    setRowData(cell?.row?.values);
  };
  return (
    <>
     
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => {
                return (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  //   console.log("cell", cell);
                  return (
                    <td {...cell.getCellProps()} onClick={() => SendData(cell)}>
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <Modal isOpen={isOpen} closeModal={closeModal} data={rowData} />
    </>
  );
};

export default ReactTable;
