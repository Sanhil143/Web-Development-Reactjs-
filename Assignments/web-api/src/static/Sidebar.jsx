import React from 'react';
import './Sidebar.css'
import { Link } from 'react-router-dom';
import Data from '../components/Data';

const Sidebar = () => {
  return (
    <div className='main'>
      <div className='sidebar'>
    <ol className='sidebar-list'>
      <li className='side-item' ><Link to='/posts'>Post</Link></li>
      <li className='side-item'><Link to="/profile">Profile</Link></li>
      <li className='side-item'>Setting</li>
      <li className='side-item'>Logout</li>
    </ol>
    </div>
    <Data/>
    </div>

  )
}

export default Sidebar
