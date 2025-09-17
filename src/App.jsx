import React, { useState } from "react";
import Dashboard from "./pages/Dashboard";
import AdminDashboard from "./pages/AdminDashboard";
import API from "./api";

function App() {
  const [page, setPage] = useState("home");
  const [user, setUser] = useState(null);

  // Handle Login
  const handleLogin = (email, password) => {
    API.post("/api/auth/login", { email, password })
      .then((res) => {
        if (res.data.token) {
          localStorage.setItem("token", res.data.token);
          setUser({ ...res.data.user, role: res.data.role });
          setPage("dashboard");
        } else {
          alert(res.data.msg || "Login failed");
        }
      })
      .catch((err) => console.error("Login error:", err));
  };

  // Handle Register
  const handleRegister = (userData) => {
    API.post("/api/auth/register", userData)
      .then((res) => {
        if (res.data.token) {
          localStorage.setItem("token", res.data.token);
          setUser({ ...userData, role: res.data.role });
          setPage("dashboard");
        } else {
          alert(res.data.msg || "Registration failed");
        }
      })
      .catch((err) => console.error("Register error:", err));
  };

  // Show Dashboards
  if (page === "dashboard") {
    return user?.role === "admin" ? <AdminDashboard /> : <Dashboard />;
  }

  // Home Page with Login/Register
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6">
      {/* Title */}
      <h1 className="text-4xl font-bold mb-2">
        <span className="text-black">Meet My</span>
        <span className="text-pink-600">sore</span>
      </h1>
      <h2 className="text-lg italic mb-8">
        <span className="text-black">meet my</span>
        <span className="text-pink-600">soul</span>
      </h2>

      <div className="flex gap-8 w-full max-w-4xl">
        {/* Login Box */}
        <div className="flex-1 bg-pink-100 rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4 text-pink-700">Login</h2>
          <input id="loginEmail" type="email" placeholder="Email" className="w-full mb-3 p-2 border rounded" />
          <input id="loginPassword" type="password" placeholder="Password" className="w-full mb-3 p-2 border rounded" />
          <button
            onClick={() =>
              handleLogin(
                document.getElementById("loginEmail").value,
                document.getElementById("loginPassword").value
              )
            }
            className="w-full bg-pink-500 hover:bg-pink-600 text-white py-2 rounded"
          >
            Login
          </button>
        </div>

        {/* Register Box */}
        <div className="flex-1 bg-pink-100 rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4 text-pink-700">Register</h2>
          <input id="regEmail" type="email" placeholder="Email" className="w-full mb-3 p-2 border rounded" />
          <input id="regName" type="text" placeholder="Name" className="w-full mb-3 p-2 border rounded" />
          <input id="regAge" type="number" placeholder="Age" className="w-full mb-3 p-2 border rounded" />
          <select id="regGender" className="w-full mb-3 p-2 border rounded">
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
          <input id="regPhone" type="text" placeholder="Phone Number" className="w-full mb-3 p-2 border rounded" />
          <input id="regPassword" type="password" placeholder="Set Password" className="w-full mb-3 p-2 border rounded" />
          <button
            onClick={() =>
              handleRegister({
                email: document.getElementById("regEmail").value,
                name: document.getElementById("regName").value,
                age: document.getElementById("regAge").value,
                gender: document.getElementById("regGender").value,
                phone: document.getElementById("regPhone").value,
                password: document.getElementById("regPassword").value,
              })
            }
            className="w-full bg-pink-500 hover:bg-pink-600 text-white py-2 rounded"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
