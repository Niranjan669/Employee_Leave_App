import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ViewEmp() {
  const navigate = useNavigate();
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/employees")
      .then((res) => res.json())
      .then((data) => setEmployees(data))
      .catch((err) => console.log(err));
  }, []);

  const handleUpdate = (id) => {
    navigate("/update/" + id);
  };

  const handleDetail = (id) => {
    navigate("/detail/" + id);
  };

  const handleRemove = (id) => {
    if (window.confirm("Do you want to remove this employee?")) {
      fetch("http://localhost:3001/employees/" + id, {
        method: "DELETE",
      })
        .then(() => {
          alert("Removed successfully");
          window.location.reload();
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };

  return (
    <div className="container mt-5">
      <h3 className="mb-4">Employee List</h3>
      <table className="table table-bordered">
        <thead className="table-light">
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Employee ID</th>
            <th>Email</th>
            <th>Department</th>
            <th>Joining Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.length === 0 ? (
            <tr>
              <td colSpan="7" className="text-center">
                No Employees Found
              </td>
            </tr>
          ) : (
            employees.map((emp, index) => (
              <tr key={emp.id}>
                <td>{index + 1}</td>
                <td>{emp.name}</td>
                <td>{emp.empId}</td>
                <td>{emp.email}</td>
                <td>{emp.department}</td>
                <td>{emp.joiningDate}</td>
                <td>
                  <button
                    onClick={() => handleRemove(emp.id)}
                    className="btn btn-danger btn-sm me-2"
                  >
                    Remove
                  </button>
                  <button
                    onClick={() => handleUpdate(emp.id)}
                    className="btn btn-warning btn-sm me-2"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDetail(emp.id)}
                    className="btn btn-secondary btn-sm"
                  >
                    Detail
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ViewEmp;
