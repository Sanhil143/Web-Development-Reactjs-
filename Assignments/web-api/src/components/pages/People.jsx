import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const People = () => {
  const [data, setData] = useState([]);

  const results = async () => {
    const res = await axios.get("https://reqres.in/api/users?page=2");
    console.log(res.data.data);
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
        <Link
        key={user.id}
        to={`/profile/${user.id}`}
        >
        <div
          
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
          <p>{`${user.first_name} ${user.last_name}`}</p>
          <p>{`${user.email}`}</p>
        </div>
        </Link>
      ))}
    </div>
  );
};

export default People;
