import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import "./tablle.css";

const CommoneTable = ({ columns, row }) => {
  console.log("row", row);
  return (
    <table>
      <thead>
        <tr>
          {columns.map((item) => (
            <th>{item.Header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {row.map((item) => (
          <tr>
            <td>{item.name}</td>
            <td>{item.color}</td>
            <td>
              <img
                style={{ height: 50, width: 50 }}
                src={item.image}
                alt="noimage"
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CommoneTable;
