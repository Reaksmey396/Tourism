import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // 👉 ក្នុងពេលនេះប្រើ mock login ជាសាមញ្ញ
    if (email === "test@gmail.com" && password === "123456") {
      localStorage.setItem("user", JSON.stringify({ email }));
      navigate("/"); // ✅ ត្រឡប់ទៅផ្ទះ ឬ page detail
    } else {
      alert("Invalid email or password!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-green-200">
      <div className="bg-white shadow-xl p-8 rounded-2xl w-96">
        <h2 className="text-2xl font-bold text-center text-green-700 mb-6">Login to Continue</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 mb-4 border rounded-xl focus:outline-green-600"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 mb-6 border rounded-xl focus:outline-green-600"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
