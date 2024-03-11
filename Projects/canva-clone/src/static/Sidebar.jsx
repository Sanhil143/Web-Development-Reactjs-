import React from "react";
import "./Sidebar.css";
import { IoHomeSharp } from "react-icons/io5";
const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <ul className="sidebar-ul">
        <div className="side-icon">
        <div>
        <IoHomeSharp size={20}/>
        </div>
        <li className="sidebar-li">Home</li>
        </div>
        <li className="sidebar-li">Projects</li>
        <li className="sidebar-li">Templates</li>
        <li className="sidebar-li">Brand</li>
        <li className="sidebar-li">App</li>
      </ul>
    </div>
  );
};

export default Sidebar;
