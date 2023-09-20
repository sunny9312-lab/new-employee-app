import { useState } from "react";
import "./App.css";
import EmployeeList from "./components/EmployeeList/EmployeeList";
import detailsData from "./data/detailsData";

function App() {
  const [staffDetails, setStaffDetails] = useState(detailsData);

  const removeStaff = (index) => {
    const filteredEmployees = staffDetails.filter((_, i) => index !== i);
    setStaffDetails(filteredEmployees);
  };

  return (
    <>
      <h1>Employees' list</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1em" }}>
        <p className="read-the-docs">
          Please click on Edit to find more details of each employee.
        </p>
        <button style={{ color: "white", backgroundColor: "blue" }}>
          Add employee
        </button>
      </div>
      <EmployeeList staffDetails={staffDetails} removeStaff={removeStaff} />
    </>
  );
}

export default App;
