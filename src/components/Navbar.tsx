import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const user = JSON.parse(
    localStorage.getItem("user") || "{}"
  );

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  const firstLetter =
    user?.name?.charAt(0)?.toUpperCase() || "U";

  return (
    <nav className="navbar navbar-dark bg-dark px-3">
      <Link
        to="/users"
        className="navbar-brand"
      >
        User Panel
      </Link>

      <div className="dropdown">
        <button
          className="btn p-0 border-0"
          data-bs-toggle="dropdown"
        >
          <div
            className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center"
            style={{
              width: "40px",
              height: "40px",
              fontWeight: "bold",
            }}
          >
            {firstLetter}
          </div>
        </button>

        <ul className="dropdown-menu dropdown-menu-end">
          <li className="px-3 py-2">
            <strong>{user.name}</strong>
            <br />
            <small>{user.email}</small>
          </li>

          <li>
            <hr className="dropdown-divider" />
          </li>

          <li>
            <button
              className="dropdown-item text-danger"
              onClick={logout}
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;