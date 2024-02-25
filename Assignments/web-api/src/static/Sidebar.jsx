import React, { useState } from 'react';
import './Sidebar.css'
import { Link, Route } from 'react-router-dom';
import Data from '../components/Data';

const Sidebar = () => {
  const [showPost, setShowPost] = useState(false)

  const togglePost = () => {
    setShowPost(!showPost);
  }
  return (
    <div className='main'>
      <div className='sidebar'>
    <ol className='sidebar-list'>
      <li className='side-item' ><Link to='/posts' onClick={togglePost}>Post</Link></li>
      <li className='side-item'><Link to="/profile">Profile</Link></li>
      <li className='side-item'>Setting</li>
      <li className='side-item'>Logout</li>
    </ol>
    </div>
    {showPost && <Data/>}
    </div>

  )
}

export default Sidebar
