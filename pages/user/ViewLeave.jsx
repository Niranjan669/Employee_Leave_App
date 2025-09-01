import { useEffect, useState } from "react";

function ViewLeave() {
  const [leaves, setLeaves] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/addleave")
      .then((res) => res.json())
      .then((data) => setLeaves(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container mt-5">
      <h3 className="mb-4 text-center">Applied Leaves</h3>
      <div className="table-responsive">
        <table className="table table-bordered table-striped">
          <thead className="table-primary text-center">
            <tr>
              <th>Employee ID</th>
              <th>Leave Type</th>
              <th>From Date</th>
              <th>To Date</th>
              <th>Reason</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {leaves.length > 0 ? (
              leaves.map((leave, index) => (
                <tr key={index}>
                  <td>{leave.empId}</td>
                  <td>{leave.leaveType}</td>
                  <td>{leave.fromDate}</td>
                  <td>{leave.toDate}</td>
                  <td>{leave.reason}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center text-muted">
                  No leave applications found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ViewLeave;
