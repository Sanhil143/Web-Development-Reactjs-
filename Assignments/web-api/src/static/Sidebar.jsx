import React from 'react';
import './Sidebar.css'

const Sidebar = () => {
  return (
    <div className='sidebar'>
    <ol className='sidebar-list'>
      <li className='side-item'>Posts</li>
      <li className='side-item'>Profile</li>
    </ol>
    </div>
  )
}

export default Sidebar
