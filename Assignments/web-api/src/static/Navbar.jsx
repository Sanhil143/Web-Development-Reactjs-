import React from "react";
import "./Navbar.css";
import { Link} from "react-router-dom";
import Sidebar from "./Sidebar";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <ul className="navbar-list">
          <li className="navbar-item">Home</li>
          <li className="navbar-item">AboutUs</li>
          <li className="navbar-item"><Link to='/login'>Login</Link></li>
          <li className="navbar-item"><Link to="/signup">Signup</Link></li>
        </ul>
      </div>
      <Sidebar/>
    </>
  );
};

export default Navbar;
