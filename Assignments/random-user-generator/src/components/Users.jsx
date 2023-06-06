import React from 'react'

const Users = (props) => {
  return (
    <div style={{border:'5px solid'}}>
    <img style={{borderRadius:'50%',marginTop:'5px'}} src={props.data.picture.large}/>
      <h4>{props.data.name.first}{' '}{props.data.name.last}</h4>
      <p>{props.data.phone}</p>
      <p>{props.data.location.city}{', '}{props.data.location.state}</p>
    </div>
  )
}

export default Users
