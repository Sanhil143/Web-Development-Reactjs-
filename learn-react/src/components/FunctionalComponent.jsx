import React from 'react'

export const FunctionalComponent = () => {

const handleClick = () => {
  console.log('button click');
}
      
  return (
    <>
      <h1>
            I am functional components
      </h1>
      <button onClick={handleClick}>Click Me</button>
     
    </>
  )
}

// export default FunctionalComponents
