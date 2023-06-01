import React from 'react'

const ChildComponent = (props) => {
  return (
    <>
     <h3>Name:{props.name}</h3>
     <h3 style={{color:'red'}}>Age:{props.age}</h3> 
    </>
  )
}

export default ChildComponent
