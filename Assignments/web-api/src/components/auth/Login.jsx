import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate()
  const [formData,setFormData] = useState({
    email:"",
    password:""
  })
  const {email,password} = formData;

  const onChange = (e) => {
    setFormData({...formData,[e.target.name]:e.target.value});
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    const body = JSON.stringify({email,password});
    const config = {
      headers:{
        "Content-Type":"application/json"
      },
    }
    try {
    const res = await axios.post(`https://reqres.in/api/login`,body,config);
    if(res.data){
      localStorage.setItem("token",res.data.token)
      navigate('/navbar')
    }
    } catch (error) {
      console.log(error.message)
    }
  }
  return (
    <div className="login-page">
      <form className="login-form" onSubmit={(e) => onSubmit(e)}>
        <div className="login-container">
        <div className="form-item">
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
        </div>
        <div className="form-item">
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
          login
        </button>
        <p>create your new Journey with us <Link to="/signup">Join now</Link></p>
        </div>
      </form>
    </div>
  );
};

export default Login;
