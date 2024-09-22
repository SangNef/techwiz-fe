import React, { useEffect, useState } from "react";
import { login, activateAccount } from "../../api/auth";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../store/authSlice";
import Modal from "../../components/modal";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  useEffect(() => {
    document.title = "Login";
  }, []);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const response = await login(email, password);
      const token = response.token;

      dispatch(loginSuccess({ token }));
      navigate("/");
    } catch (error) {
      if (error.response) {
        // console.log(error.response.data.error);
        if (error.response.data.error == "Account not activated") {
          setModalMessage(
            "Your account is not activated. Do you want to activate it now?"
          );
          setModalOpen(true);
          console.log(modalOpen);
        } else {
          setError(error.response.data.error);
        }
      } else {
        setError("Network error. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleActivateAccount = async () => {
    try {
      await activateAccount(email);
      setModalOpen(false);
      navigate("/login");
    } catch (error) {
      setError("Activation failed. Please try again.");
    }
  };

  return (
    <div>
      {modalOpen && (
        <Modal
          message={modalMessage}
          onConfirm={handleActivateAccount}
          onClose={() => setModalOpen(false)}
        />
      )}
      <div
        className="bg-no-repeat bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url(https://img.freepik.com/free-vector/hand-drawn-travel-background_52683-85109.jpg?t=st=1726940847~exp=1726944447~hmac=c6a57afd0c3b5b4eebd86378a7be05494648e3d46e736c306706776d6ed8060f&w=1060)",
        }}
      >
        <div className="absolute bg-black opacity-30 inset-0 z-0" />
        <div className="min-h-screen sm:flex sm:flex-row mx-0 justify-center">
          <div className="flex-col flex self-center p-10 sm:max-w-5xl xl:max-w-2xl z-10">
            <div className="self-start hidden lg:flex flex-col text-white">
              <h1 className="mb-3 font-bold text-5xl">Hi ? Welcome Back!</h1>
            </div>
          </div>
          <div className="flex justify-center self-center z-10">
            <div className="p-12 bg-white mx-auto rounded-2xl w-100">
              <div className="mb-4">
                <h3 className="font-semibold text-2xl text-gray-800">
                  Sign In
                </h3>
                <p className="text-gray-500">Please sign in to your account.</p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 tracking-wide">
                    Email
                  </label>
                  <input
                    className="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="mail@gmail.com"
                  />
                </div>
                <div className="space-y-2">
                  <label className="mb-5 text-sm font-medium text-gray-700 tracking-wide">
                    Password
                  </label>
                  <input
                    className="w-full content-center text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                  />
                </div>

                <div className="flex items-center gap-1">
                  <Link
                    to="/forgot-password"
                    className="text-sm text-green-400 hover:text-green-600"
                  >
                    You forgot your password?
                  </Link>
                </div>

                <div className="flex items-center gap-1">
                  <div className="text-sm">
                    <p>Don't have an account?</p>
                  </div>
                  <Link
                    to="/register"
                    className="text-green-400 hover:text-green-600"
                  >
                    Register
                  </Link>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center bg-green-400 hover:bg-green-500 text-gray-100 p-3 rounded-full tracking-wide font-semibold shadow-lg cursor-pointer transition ease-in duration-500"
                    disabled={loading}
                  >
                    {loading ? "Signing in..." : "Sign in"}
                  </button>
                </div>
              </form>
              {error && <p className="text-red-500 mt-2">{error}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
