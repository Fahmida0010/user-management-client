import { useState } from "react";
import api from "../services/api";
import { useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";
import { User, Mail, Eye, EyeOff } from "lucide-react";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleRegister = async (e: any) => {
    e.preventDefault();

    try {
      await api.post("auth/register", {
        name,
        email,
        password,
      });

      Swal.fire({
        icon: "success",
        title: "Registration Successful",
        text: "Please check your email for verification."
      });

      navigate("/login");
    } catch (err: any) {
      console.log("ERROR:", err);
      console.log("RESPONSE:", err.response);
      console.log("DATA:", err.response?.data);

      Swal.fire({
        icon: "error",
        title: "Registration Failed",
        text: err.response?.data?.message ||
              JSON.stringify(err.response?.data) ||
              err.message
      });
    }
  };

  return (
    <div className="container-fluid min-vh-100 p-0 bg-light">
      <div className="row g-0 min-vh-100 flex-column-reverse flex-lg-row">
        
        {/* FORM SECTION */}
        <div className="col-12 col-lg-6 d-flex flex-column justify-content-between p-4 p-sm-5 p-md-5 p-lg-5 p-xl-5 bg-white">
          
          {/* Logo */}
          <div className="w-100 mx-auto" style={{ maxWidth: '440px' }}>
            <p className="small text-muted mb-1">Create a new account:</p>
            <div className="fs-3 fw-bold tracking-wider text-primary">
              THE <span className="text-info">ΔPP</span>
            </div>
          </div>

          {/* Form Content */}
          <div className="w-100 mx-auto my-auto py-4" style={{ maxWidth: '440px' }}>
            <div className="mb-4">
              <p className="text-uppercase text-primary font-weight-bold tracking-wider mb-1" style={{ fontSize: '11px', letterSpacing: '1px' }}>
                Start your journey
              </p>
              <h2 className="fw-bold text-dark m-0">
                Sign Up to The App
              </h2>
            </div>

            <form onSubmit={handleRegister} className="d-flex flex-column gap-3">
              
              {/* Name Input */}
              <div className="form-group">
                <label className="form-label small fw-medium text-secondary mb-1">Full Name</label>
                <div className="input-group position-relative d-flex align-items-center">
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    onChange={(e) => setName(e.target.value)}
                    className="form-control rounded-2 py-2.5 shadow-none"
                    style={{ paddingRight: '40px', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0' }}
                  />
                  <span className="position-absolute end-0 me-3 text-muted pointer-events-none" style={{ zIndex: 5 }}>
                    <User size={18} />
                  </span>
                </div>
              </div>

              {/* Email Input */}
              <div className="form-group">
                <label className="form-label small fw-medium text-secondary mb-1">E-mail</label>
                <div className="input-group position-relative d-flex align-items-center">
                  <input
                    type="email"
                    required
                    placeholder="test@example.com"
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control rounded-2 py-2.5 shadow-none"
                    style={{ paddingRight: '40px', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0' }}
                  />
                  <span className="position-absolute end-0 me-3 text-muted pointer-events-none" style={{ zIndex: 5 }}>
                    <Mail size={18} />
                  </span>
                </div>
              </div>

              {/* Password Input */}
              <div className="form-group">
                <label className="form-label small fw-medium text-secondary mb-1">Password</label>
                <div className="input-group position-relative d-flex align-items-center">
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    placeholder="••••••••"
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-control rounded-2 py-2.5 shadow-none"
                    style={{ paddingRight: '40px', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0' }}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="position-absolute end-0 me-3 btn p-0 border-0 text-muted shadow-none"
                    style={{ zIndex: 5, background: 'none' }}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="btn btn-primary w-100 fw-semibold rounded-2 mt-2"
                style={{ padding: '12px', boxShadow: '0 4px 6px -1px rgba(13, 110, 253, 0.15)' }}
              >
                Register
              </button>
            </form>
          </div>

          {/* Bottom links */}
          <div className="w-100 mx-auto mt-4 pt-3 border-top d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center gap-2 small" style={{ maxWidth: '440px' }}>
            <span className="text-muted">
              Already have account?
              <Link to="/login" className="text-primary text-decoration-none fw-semibold ms-1">
                Login
              </Link>
            </span>
          </div>
        </div>

        {/* IMAGE SECTION */}
        <div className="col-12 col-lg-6 vh-lg-100 sticky-lg-top" style={{ minHeight: '260px' }}>
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80"
            alt="register visual"
            className="w-100 h-100"
            style={{ objectFit: 'cover', objectPosition: 'center', minHeight: '100%' }}
          />
        </div>

      </div>
    </div>
  );
};

export default Register;