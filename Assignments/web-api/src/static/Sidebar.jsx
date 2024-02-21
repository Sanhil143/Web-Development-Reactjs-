import React from 'react';
import './Sidebar.css'
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='sidebar'>
    <ol className='sidebar-list'>
      <li className='side-item' ><Link to='/posts'>Post</Link></li>
      <li className='side-item'>Profile</li>
      <li className='side-item'>Setting</li>
      <li className='side-item'>Logout</li>
    </ol>
    </div>
  )
}

export default Sidebar
