import React from "react";

const TableHeader = ({ totalData }) => (
  <div className="table-header">
    <div className="table-cell">Event Count: {totalData}</div>
    <div className="table-cell">Yorumlar</div>
    <div className="table-cell"></div>
    {["1", "X", "2", "Alt", "Üst", "H1", "1", "X", "2", "H2", "1-X", "1-2", "X-2", "Var", "Yok", "+99"].map(
      (header, index) => (
        <div className="table-cell" key={index}>
          {header}
        </div>
      )
    )}
  </div>
);

export default TableHeader;
