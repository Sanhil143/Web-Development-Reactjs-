import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <ul className="navbar-list">
          <li className="navbar-item">Home</li>
          <li className="navbar-item">AboutUs</li>
          <li className="navbar-item">Blogs</li>
          <li className="navbar-item">ContactUs</li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
