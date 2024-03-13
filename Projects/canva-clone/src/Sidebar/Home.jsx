import React from "react";
import "./Home.css";
import { IoSearch } from "react-icons/io5";
import { TiMediaFastForward } from "react-icons/ti";
import { SiGoogledocs } from "react-icons/si";
import { FaRegClipboard } from "react-icons/fa6";
import { RiPresentationLine } from "react-icons/ri";
import { TiSocialAtCircular } from "react-icons/ti";
import { MdOutlineVideoSettings } from "react-icons/md";
import { FaPrint } from "react-icons/fa6";
import { CgWebsite } from "react-icons/cg";
import { MdOutlineMoreHoriz } from "react-icons/md";


const Home = () => {
  return (
    <div>
      <div className="san-hero">
        <div className="san-nav">
          <button className="san-button">Custom size</button>
          <button className="san-button">upload</button>
        </div>
        <div className="san-tagDiv">
          <span className="san-tag">What will you design today?</span>
        </div>
        <div className="san-search-container">
          <div className="san-searchbar-div">
            <IoSearch className="san-searchIcon" />
            <input type="text" className="san-searchbar-input"></input>
          </div>
        </div>
        <div className="san-bullets">
          <div className="san-bullet-icons">
          <div className="san-bull-para">
          <TiMediaFastForward className="san-icon-bullet" />
          <p className="san-paragraph">For you</p>
          </div>

          <div className="san-bull-para">
          <SiGoogledocs className="san-icon-bullet" />
          <p className="san-paragraph">Docs</p>
          </div>

          <div className="san-bull-para">
          <FaRegClipboard className="san-icon-bullet" />
          <p className="san-paragraph">Whiteboards</p>
          </div>

          <div className="san-bull-para">
          <RiPresentationLine className="san-icon-bullet" />
          <p className="san-paragraph">Presentations</p>
          </div>

          <div className="san-bull-para">
          <TiSocialAtCircular className="san-icon-bullet" />
          <p className="san-paragraph">Social media</p>
          </div>

          <div className="san-bull-para">
          <MdOutlineVideoSettings className="san-icon-bullet" />
          <p className="san-paragraph">Videos</p>
          </div>

          <div className="san-bull-para">
          <FaPrint className="san-icon-bullet" />
          <p className="san-paragraph">Print products</p>
          </div>

          <div className="san-bull-para">
          <CgWebsite className="san-icon-bullet" />
          <p className="san-paragraph">Websites</p>
          </div>

          <div className="san-bull-para">
          <MdOutlineMoreHoriz className="san-icon-bullet" />
          <p className="san-paragraph">More</p>
          </div>

          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Home;
