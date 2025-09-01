import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LeaveEmp() {
  
  const [leaveType, setLeaveType] = useState("");
 
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const leaveData = {leaveType, description };

    fetch("http://localhost:3001/appliedLeaves", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(leaveData),
    })
      .then(() => {
        alert("Leave applied successfully");
        navigate("/applied");
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-lg rounded-4">
            <div className="card-header text-center bg-primary text-white">
              <h4>Apply for Leave</h4>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                
                <div className="mb-3">
                  <label className="form-label">Leave Type</label>
                  <select
                    className="form-select"
                    required
                    onChange={(e) => setLeaveType(e.target.value)}
                  >
                    <option value="">Select leave type</option>
                    <option value="Sick Leave">Sick Leave</option>
                    <option value="Casual Leave">Casual Leave</option>
                    <option value="Earned Leave">Earned Leave</option>
                     <option value="Personal Leave">Personal Leave</option>
                  </select>
                </div>
                
                <div className="mb-3">
                  <label className="form-label">Description</label>
                  <textarea
                    className="form-control"
                    rows="3"
                    placeholder="Enter reason"
                    required
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                </div>
                <div className="d-grid">
                  <button type="submit" className="btn btn-primary">
                    Apply Leave
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeaveEmp;
