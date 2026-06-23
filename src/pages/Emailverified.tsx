import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const EmailVerified = () => {
  const { token } = useParams();

  useEffect(() => {
    axios.get(
      `${import.meta.env.VITE_API_URL}/api/auth/verify/${token}`
    );
  }, [token]);

  return (
    <div className="container text-center mt-5">
      <h2 className="text-success">
        ✅ Email Verified Successfully
      </h2>
      <p>
        Your account has been activated. You can now log in to your account.
      </p>
    </div>
  );
};

export default EmailVerified;