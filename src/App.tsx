import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Users from "./pages/Users";
import ProtectedRoute from "./components/ProtectedRoute";
import Register from "./pages/Rigister";
import EmailVerified from "./pages/Emailverified";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/email-verify/:token" element={<EmailVerified />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/users"
          element={
            <ProtectedRoute>
              <Users />
            </ProtectedRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
};

export default App;