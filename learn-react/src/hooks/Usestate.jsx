import React, { useState } from 'react'

const Usestate = () => {
      const [count , setCount] = useState(0);
  return (
    <>
      <h1>Count is {count}</h1>
      <h5>Number is {count % 2 === 0 ? 'Even' : 'Odd'}</h5>
      <button onClick={() => setCount(count + 1)}>Increment ++</button>
      <button onClick={() => setCount(count + 10)}>Increment 10 ++</button><br/>
      <button onClick={() => setCount(count - 1)}>Decrement --</button>
      <button onClick={() => setCount(count - 10)}>Decrement 10 --</button>
    </>
  )
}

export default Usestate
