const EmailVerified = () => {
  return (
    <div className="container text-center mt-5">
      <h2 className="text-success">
        ✅ Email Verified Successfully
      </h2>

      <p>
        Your account is now active.
      </p>

      <button
        className="btn btn-success"
        disabled
      >
        Email Verified
      </button>
    </div>
  );
};

export default EmailVerified;