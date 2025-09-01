import { useState } from "react";
import { useNavigate } from "react-router-dom";

function UserLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/employee");
      const users = await response.json();

      const foundUser = users.find(
        (user) => user.email === email && user.password === password
      );

      if (foundUser) {
        alert("Login successful!");
        localStorage.setItem("userLoggedIn", true);
        navigate("/add");
      } else {
        alert("Invalid email or password");
      }
    } catch (err) {
      console.error("Login error:", err);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="card shadow-lg rounded-4">
            <div className="card-header text-center bg-primary text-white">
              <h4>Login</h4>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="d-grid">
                  <button type="submit" className="btn btn-primary">
                    Login
                  </button>
                </div>
              </form>
            </div>
            <div className="card-footer text-center">
              Don't have an account? <a href="/userregister">Register</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserLogin;
