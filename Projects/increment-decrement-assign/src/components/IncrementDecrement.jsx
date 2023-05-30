import React, { useState } from 'react';
import './IncDec.css';

const IncrementDecrement = () => {
      const [data,setData] = useState(0);


      const handleClickInc = () => {
            setData(data + 1);
      }
      const handleClickDec = () => {
            setData(data - 1);
      }
      const handleClickInc10 = () => {
            setData(data + 10);
      }
      const handleClickDec10 = () => {
            setData(data - 10);
      }
  return (
    <>
     <div className='container'>
     <h1>Increment or Decrement</h1>
     <h2>{data}</h2>
    <div className='button-container'>
    <button style={{backgroundColor:'greenyellow'}} onClick={handleClickInc}>UP +1</button>
     <button style={{backgroundColor:'red'}} onClick={handleClickDec}>DOWN -1</button>
     <button style={{backgroundColor:'greenyellow'}} onClick={handleClickInc10}>RIGHT +10</button>
     <button style={{backgroundColor:'red'}} onClick={handleClickDec10}>LEFT -10</button>
    </div>
     </div> 
    </>
  )
}

export default IncrementDecrement
