import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function DetailEmp() {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/employees/" + id)
      .then((res) => res.json())
      .then((resp) => setEmployee(resp))
      .catch((err) => console.log(err.message));
  }, [id]);

  return (
    <div className="container mt-5">
      <h3 className="mb-4">Employee Detail</h3>
      {employee &&  
        <table className="table table-bordered shadow-sm">
          <thead className="table-light">
            <tr>
              <th>Employee Name</th>
              <th>Employee ID</th>
              <th>Email</th>
              <th>Designation</th>
              <th>Department</th>
              <th>Joining Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{employee.name}</td>
              <td>{employee.empid}</td>
              <td>{employee.email}</td>
              <td>{employee.designation}</td>
              <td>{employee.department}</td>
              <td>{employee.joiningDate}</td>
            </tr>
          </tbody>
        </table>
      }
      {!employee && <p>Loading...</p>}
    </div>
  );
}

export default DetailEmp;
