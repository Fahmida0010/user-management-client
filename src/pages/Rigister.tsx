import { useState } from "react";
import api from "../services/api";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleRegister = async (e: any) => {
    e.preventDefault();

    try {
      await api.post("/auth/register", {
        name,
        email,
        password,
      });

      // IMPORTANT NOTE:
      // show success message
      alert("Registered successfully. Check email for verification.");

      navigate("/login");
    }catch (err: any) {
  console.log("ERROR:", err);
  console.log("RESPONSE:", err.response);
  console.log("DATA:", err.response?.data);

  alert(JSON.stringify(err.response?.data) || err.message);
}
  };

  return (
    <div className="container mt-5">
      <h3>Register</h3>

      <form onSubmit={handleRegister}>
        <input
          className="form-control mb-2"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />

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

        <button className="btn btn-success w-100">Register</button>
      </form>

      <p className="mt-2">
        Already have account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default Register;