import React from "react";
import "./Sidebar.css";
import { IoHomeSharp } from "react-icons/io5";
import { GrTemplate,GrProjects } from "react-icons/gr";
import { TbBrandBooking } from "react-icons/tb";
import { IoMdAppstore } from "react-icons/io";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <ul className="sidebar-ul">
        <div className="side-li-div home">
        <div className="side-icon">
        <IoHomeSharp size={19}/>
        </div>
        <li className="sidebar-li">Home</li>
        </div>
        <div className="side-li-div project">
          <div className="side-icon">
            <GrProjects size={17}/>
          </div>
        <li className="sidebar-li">Projects</li>
        </div>
        <div className="side-li-div project">
          <div className="side-icon">
            <GrTemplate size={17}/>
          </div>
        <li className="sidebar-li">Templates</li>
        </div>
        <div className="side-li-div project">
          <div className="side-icon">
            <TbBrandBooking size={20}/>
          </div>
        <li className="sidebar-li">Brand</li>
        </div>
        <div className="side-li-div project">
          <div className="side-icon">
            <IoMdAppstore size={20}/>
          </div>
        <li className="sidebar-li">App</li>
        </div>
      </ul>
    </div>
  );
};

export default Sidebar;
