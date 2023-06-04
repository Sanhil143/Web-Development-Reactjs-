import React from 'react'
import ChildComponent from './ChildComponent'

const ParentComponent = () => {
  return (
    <>
     <ChildComponent name='Samarth' age={10} />
    </>
  )
}

export default ParentComponent
// we initialize in parent and use in child