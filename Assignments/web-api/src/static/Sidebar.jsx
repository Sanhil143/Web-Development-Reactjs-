import React, { useState } from 'react';
import './Sidebar.css'
import { Link} from 'react-router-dom';
import People from '../components/pages/People';
import Profile from '../components/pages/Profile';

const Sidebar = () => {
  const [showPost, setShowPost] = useState(false)
  const [showProfile, setShowProfile] = useState(false)

  const togglePost = () => {
    setShowPost(!showPost);
    setShowProfile(!showProfile);
  }
  return (
    <div className='main'>
      <div className='sidebar'>
    <ol className='sidebar-list'>
      <li className='side-item'onClick={togglePost}>Post</li>
      <li className='side-item' onClick={togglePost}>Profile</li>
      <li className='side-item'>Setting</li>
      <li className='side-item'>Logout</li>
    </ol>
    </div>
    {showPost && <People/>}
    {showProfile && <Profile/>}
    </div>

  )
}

export default Sidebar
