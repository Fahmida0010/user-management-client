import { useState } from "react";
import api from "../services/api";
import { useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";

const API_URL = import.meta.env.VITE_API_URL;


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e: any) => {
    e.preventDefault();

    try {
      const res = await api.post(`${API_URL}/auth/login`, {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);
localStorage.setItem(
  "user",
  JSON.stringify(res.data.user)
);
      // IMPORTANT NOTE:
      // after login redirect to users page
      navigate("/users");
    }catch (err: any) {
  console.log("LOGIN ERROR:", err);
  console.log("RESPONSE:", err.response);
  console.log("DATA:", err.response?.data);

  Swal.fire({
    icon: "error",
    title: "Login Failed",
    text: err.response?.data?.message ||
          JSON.stringify(err.response?.data) ||
          err.message
  });
}
  };

  return (
    <div className="container mt-5">
      <h3>Login</h3>

      <form onSubmit={handleLogin}>
        <input
          className="form-control mb-2"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="form-control mb-2"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="btn btn-primary w-100">Login</button>
      </form>

      <p className="mt-2">
        No account? <Link to="/register">Register</Link>
      </p>
    </div>
  );
};

export default Login;