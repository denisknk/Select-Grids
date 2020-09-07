import React from "react";
import "./Table.css";

const TableBlock = ({ el, style }) => {
  return (
    <div className="table_block" style={style}>
      {el}
    </div>
  );
};

export default TableBlock;
