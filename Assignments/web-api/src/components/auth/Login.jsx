import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [formData,setFormData] = useState({
    email:"",
    password:""
  })
  const {email,password} = formData;

  const onChange = (e) => {
    setFormData({...formData,[e.target.name]:e.target.value});
  }

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
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
        </div>
      </form>
    </div>
  );
};

export default Login;
