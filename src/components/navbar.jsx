import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from '../context/AuthContext';

import "../styling/navbar.css";
import logo from "../images/finlogo.png";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
   // for debugging

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-left">
          <img src={logo} alt="logo" className="logo" />
          <div className="nav-text">
            <div className="finwiz">Finwiz</div>
            <div className="nit-warangal">NIT Warangal</div>
          </div>
        </div>

        <div className="navlinks">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          
          {!user ? (
            <>
              <NavLink to="/login">Login</NavLink>
              <NavLink to="/register">Register</NavLink>
            </>
          ) : (
            <>
              <NavLink to="/events">Events</NavLink>
              {user.isadmin && <NavLink to="/analytics">Analytics</NavLink>}
              <button onClick={handleLogout}>Logout</button>
            </>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
