import React, { useState } from "react";
import './Signup.css'
import axios from "axios";

const Signup = () => {
  const [formData,setFormData] = useState({
    firstname:"",
    lastname:"",
    email:"",
    password:""
  });

  const {firstname,lastname,email,password} = formData;

  const onChange = (e) => {
    setFormData({...formData, [e.target.name]:e.target.value})
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    const body = JSON.stringify({firstname,lastname,email,password})
    const config = {
      headers:{
        "Content-Type":"application/json"
      }
    }
    try {
    const res = await axios.post(`https://reqres.in/api/register`,body,config);
    if(res.data){
      localStorage.setItem("token",res.data.token)
      localStorage.setItem("userId",res.data.id)
    }
    console.log(res.data);
    } catch (error) {
      console.log(error.message)
    }
  }
  return (
    <div className="signup-page">
      <form className="signup-form" onSubmit={(e) => onSubmit(e)}>
        <div className="signup-container">
          <div className="form-item">
            <label htmlFor="firstname" className="form-label">
              firstname
            </label>
            <input
              id="firstname"
              name="firstname"
              value={firstname}
              onChange={(e) => onChange(e)}
              className="form-input"
              placeholder="firstname"
              type="text"
              required
            />
            <label htmlFor="lastname" className="form-label">
              lastname
            </label>
            <input
              id="lastname"
              name="lastname"
              value={lastname}
              onChange={(e) => onChange(e)}
              className="form-input"
              placeholder="lastname"
              type="text"
              required
            />
            <label htmlFor="email" className="form-label">
              email
            </label>
            <input
              id="email"
              name="email"
              value={email}
              onChange={(e) => onChange(e)}
              className="form-input"
              placeholder="email"
              type="text"
              required
            />
            <label htmlFor="password" className="form-label">
              password
            </label>
            <input
              id="password"
              name="password"
              value={password}
              onChange={(e) => onChange(e)}
              className="form-input"
              placeholder="password"
              type="password"
              required
            />
          </div>
          <button type="submit" className="form-btn">
            signup
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
