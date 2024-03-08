import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState(null);
  const {userId}=useParams();
  const fetchUser = async () => {
    try {
      const res = await axios.get(`https://reqres.in/api/unknown/${userId}`);
      setUser(res.data.data);
      console.log(res.data.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchUser();
  },[]);

  if(!user){
    return <div>Loading...</div>
  }
  return (
    <div>
      <h4>{user.name}</h4>
      <p>{user.year}</p>
    </div>
  );
};

export default Profile;
