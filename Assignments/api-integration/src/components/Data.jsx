import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Data = () => {
  const [data,setData] = useState("");

  const results = async () => {
    const res = await axios.get('https://reqres.in/api/users?page=2')
    setData(res.data);
  }
  useEffect(() => {
    results();
  },[]);

  return (
    <div>
      
    </div>
  )
}

export default Data
