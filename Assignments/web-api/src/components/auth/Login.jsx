import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-page">
      <form className="login-form">
        <div className="login-container">
        <div className="form-item">
          <label htmlFor="email" className="form-label">
            email
          </label>
          <input
            id="email"
            className="form-input"
            placeholder="email"
            type="text"
          />
        </div>
        <div className="form-item">
          <label htmlFor="password" className="form-label">
            password
          </label>
          <input
            id="password"
            className="form-input"
            placeholder="password"
            type="password"
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
