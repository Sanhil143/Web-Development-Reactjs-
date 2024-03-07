import React, { useState } from 'react';
import './Sidebar.css'
import {useNavigate} from 'react-router-dom';
import People from '../components/pages/People';
import Profile from '../components/pages/Profile';
import Setting from '../components/pages/Setting';

const Sidebar = () => {
  const navigate = useNavigate();
  const [showPost, setShowPost] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showSetting, setShowSetting] = useState(false);

  const togglePost = () => {
    setShowPost(!showPost);
    setShowProfile(false);
    setShowSetting(false);
  }

  const toggleProfile = () => {
    setShowProfile(!showProfile);
    setShowPost(false);
    setShowSetting(false);
  }

  const toggleSetting = () => {
    setShowSetting(!showSetting);
    setShowPost(false);
    setShowProfile(false);
  }

  const logoutAccount = () => {
    localStorage.clear()
    navigate('/login')
  }

  return (
    <div className='main'>
      <div className='sidebar'>
    <ol className='sidebar-list'>
      <li className='side-item' onClick={togglePost}>Post</li>
      <li className='side-item' onClick={toggleProfile}>Profile</li>
      <li className='side-item' onClick={toggleSetting}>Setting</li>
      <li className='side-item' onClick={logoutAccount}>Logout</li>
    </ol>
    </div>
    {showPost && <People/>}
    {showProfile && <Profile/>}
    {showSetting && <Setting/>}
    </div>

  )
}

export default Sidebar
