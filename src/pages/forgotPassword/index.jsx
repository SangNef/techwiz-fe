import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { forgotPassword } from "../../api/auth";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.title = "Forgot Password";
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const response = await forgotPassword(email);
      console.log(response);
      // Handle successful password reset
    } catch (error) {
      if (error.response && error.response.data.errors) {
        const validationErrors = Object.values(error.response.data.errors).flat();
        setError(validationErrors);
      } else {
        setError(error.response?.data?.error || "Password reset failed. Please try again.");
      }
      setOpen(true);
    } finally {
      setLoading(false);
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <div>
      <div
        className="bg-no-repeat bg-cover bg-center relative"
        style={{
          backgroundImage: "url(https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1951&q=80)",
        }}
      >
        <div className="absolute bg-gradient-to-b from-green-500 to-green-400 opacity-75 inset-0 z-0" />
        <div className="min-h-screen sm:flex sm:flex-row mx-0 justify-center">
          <div className="flex-col flex self-center p-10 sm:max-w-5xl xl:max-w-2xl z-10">
            <div className="self-start hidden lg:flex flex-col text-white">
              <h1 className="mb-3 font-bold text-5xl">Oops! You forgot your password?</h1>
            </div>
          </div>
          <div className="flex justify-center self-center z-10">
            <div className="p-12 bg-white mx-auto rounded-2xl w-100">
              <div className="mb-4">
                <h3 className="font-semibold text-2xl text-gray-800">Forgot Password</h3>
                <p className="text-gray-500">Please enter your email.</p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 tracking-wide">Email</label>
                  <input
                    className="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="mail@gmail.com"
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center bg-green-400 hover:bg-green-500 text-gray-100 p-3 rounded-full tracking-wide font-semibold shadow-lg cursor-pointer transition ease-in duration-500"
                    disabled={loading}
                  >
                    {loading ? "Submitting..." : "Submit"}
                  </button>
                </div>
              </form>
              <div className="mt-4">
                <p className="text-sm text-gray-500">
                  Remembered your password? 
                  <Link to="/login" className="text-green-400 hover:text-green-600 ml-1">Login</Link>
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  Don't have an account? 
                  <Link to="/register" className="text-green-400 hover:text-green-600 ml-1">Register</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          {error}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default ForgotPassword;
