import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../store/authSlice";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";

const Header = () => {
  const dispatch = useDispatch();
  const hasToken = localStorage.getItem("token");
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <>
      <header className="bg-gray-900 text-white p-1">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex gap-6 items-center">
            <p className="flex items-center gap-1">
              <PhoneIcon /> (+84).559.432.643
            </p>
            <p className="flex items-center gap-1">
              <EmailIcon /> Contact@gmail.com
            </p>
          </div>

          {hasToken ? (
            <div className="flex items-center">
              <span className="mr-4">Welcome, {user?.name || "User"}</span>
              <IconButton color="inherit" onClick={handleMenuClick}>
                <AccountCircleIcon />
              </IconButton>
              <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                <MenuItem onClick={handleLogout}>
                  <LogoutIcon fontSize="small" />
                  Logout
                </MenuItem>
              </Menu>
            </div>
          ) : (
            <div className="flex items-center">
              <Link to="/login" className="mr-4">
                Login
              </Link>
              <Link
                to="/register"
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </header>

      <nav className="bg-gray-900 text-white p-2 sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-lg font-bold">Expese-Voyage</h1>
          <ul className="flex gap-8">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/destinations">Destinations</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
