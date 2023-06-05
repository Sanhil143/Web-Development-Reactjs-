import React, { useEffect, useState } from 'react'

const Useeffect = () => {
      const [count,setCount] = useState(0);

      useEffect(() => {
        console.log('My component is mounting');
      },[count])
  return (
    <>
     <h2>{count}</h2> 
     <button onClick={ () => setCount(count + 1)}>increment</button>
    </>
  )
}

export default Useeffect
