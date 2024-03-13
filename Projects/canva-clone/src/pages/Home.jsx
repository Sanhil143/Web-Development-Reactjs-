import React from 'react'
import './Home.css'
import { IoSearch } from "react-icons/io5";

const Home = () => {
  return (
    <div>
      <div className='san-hero'>
      <div className='san-nav'>
        <button className='san-button'>Custom size</button>
        <button className='san-button'>upload</button>
      </div>
      <div className='san-tagDiv'>
      <span className='san-tag'>What will you design today?</span>
      </div>
      <div className='san-search-container'>
      <div className='san-searchbar-div'>
      <IoSearch className='san-searchIcon'/>
      <input className='san-searchbar-input'></input>
      </div>
      </div>  
      </div>
    </div>
  )
}

export default Home
