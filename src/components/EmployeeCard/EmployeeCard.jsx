import React from "react";

const EmployeeCard = ({ data, removeStaff, detailIndex }) => {
  const { name, contractType, workingYears, email } = data;

  const onRemoveBtn = (e) => {
    removeStaff(detailIndex);
  };

  return (
    <section style={{ display: "flex", gap: "1em" }}>
      <div>
        <p>{name}</p>
        <p>
          {contractType}-{workingYears}
        </p>
        <p>{email}</p>
      </div>
      <div>
        <button>Edit</button>
        <button onClick={onRemoveBtn}>Remove</button>
      </div>
    </section>
  );
};

export default EmployeeCard;
