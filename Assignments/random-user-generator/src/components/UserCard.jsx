import React, { useEffect, useState } from 'react'
import Users from './Users'

const getUser = async () => {
      const res = await fetch('https://randomuser.me/api/',{
            method:'get'
      })
      return res.json()
}

const UserCard = () => {
      const [user,setUser] = useState(null);
      useEffect(() => {
            getUser().then((e) => setUser(e.results[0]))
      },[])
      // console.log(user);
      const handleReferesh = () => {
            getUser().then((e) => setUser(e.results[0]))
      }
  return (
    <div>
      {
            user && <Users data={user}/>
      }
      <button onClick={handleReferesh}>Reload</button>
    </div>
  )
}

export default UserCard
