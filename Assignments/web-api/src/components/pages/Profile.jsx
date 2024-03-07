import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState(null);
  const {userId}=useParams();
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`https://reqres.in/api/unknown/${userId}`);
        setUser(res.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchUser();
  },[userId]);

  if(!user){
    return <div>Loading...</div>
  }
  return (
    <div>
      <p>{user.name}</p>
      <p>{user.year}</p>
    </div>
  );
};

export default Profile;
