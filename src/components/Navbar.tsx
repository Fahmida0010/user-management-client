import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="navbar bg-dark text-white px-3">
      <Link to="/users" className="text-white">User Panel</Link>

      <button className="btn btn-sm btn-danger" onClick={logout}>
        Logout
      </button>
    </div>
  );
};

export default Navbar;