import React from "react";
import EmployeeCard from "../EmployeeCard/EmployeeCard";

const EmployeeList = ({ staffDetails, removeStaff }) => {
  return (
    <div style={{ display: "flex", gap: "1em" }}>
      {staffDetails.map((staffDetail, index) => (
        <EmployeeCard
          key={index}
          data={staffDetail}
          removeStaff={removeStaff}
          detailIndex={index}
        />
      ))}
    </div>
  );
};

export default EmployeeList;
