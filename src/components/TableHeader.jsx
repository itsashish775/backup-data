import React from "react";

function TableHeader() {
  return (
    <>
      <tr>
        <th style={{ border: "1px solid black", padding: "0 0.5rem" }}>ID</th>
        <th style={{ border: "1px solid black", padding: "0 0.5rem" }}>Name</th>
        <th style={{ border: "1px solid black", padding: "0 0.5rem" }}>
          Team ID
        </th>
        <th style={{ border: "1px solid black", padding: "0 0.5rem" }}>
          Status
        </th>
        <th style={{ border: "1px solid black", padding: "0 0.5rem" }}>Date</th>
        <th style={{ border: "1px solid black", padding: "0 0.5rem" }}>
          Comment
        </th>
      </tr>
    </>
  );
}

export default TableHeader;
