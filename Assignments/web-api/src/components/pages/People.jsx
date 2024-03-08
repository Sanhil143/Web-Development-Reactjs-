import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const People = () => {
  const [data, setData] = useState([]);

  const results = async () => {
    const res = await axios.get("https://reqres.in/api/users?page=2");
    setData(res.data.data);
  };
  useEffect(() => {
    results();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        
      }}
    >
      {data.map((user) => (
       
        <div
          key={user.id}
          style={{
            width: "20%",
            height: "200px",
            border: "1px solid black",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: "15px",
          }}
        >
        <Link
        to={`/profile/${user.id}`}
        >
          <img
            src={user.avatar}
            style={{
              width: "50%",
              height: "auto",
              alignItems: "center",
              textAlign: "center",
            }}
            alt="userImage"
          />
          </Link>
          <p>{`${user.first_name} ${user.last_name}`}</p>
          <p>{`${user.email}`}</p>
          
        </div>
      ))}
    </div>
  );
};

export default People;
