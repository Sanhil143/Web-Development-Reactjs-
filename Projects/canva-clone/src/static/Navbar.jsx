import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar-container">
    <div className="navbar-con">
     <div className="img-container">
      <img className="img-src" src="Canva-Logo-2013.png" alt="logo"/>
     </div>
      <ul className="navbar-ul">
        <li className="navbar-li">design spotlight</li>
        <li className="navbar-li">Business</li>
        <li className="navbar-li">Education</li>
        <li className="navbar-li">Plans</li>
        <li className="navbar-li">Learn</li>
      </ul>
      </div>
      <ul className="navbar-auth">
        <li className="navbar-li-auth">Login</li>
        <li className="navbar-li-auth">Signup</li>
      </ul>
    </div>
  );
};

export default Navbar;
