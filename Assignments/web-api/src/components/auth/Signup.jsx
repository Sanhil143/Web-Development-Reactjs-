import React from "react";
import './Signup.css'

const Signup = () => {
  return (
    <div className="signup-page">
      <form className="signup-form">
        <div className="signup-container">
          <div className="form-item">
            <label htmlFor="firstname" className="form-label">
              firstname
            </label>
            <input
              id="firstname"
              className="form-input"
              placeholder="firstname"
              type="text"
            />
            <label htmlFor="lastname" className="form-label">
              lastname
            </label>
            <input
              id="lastname"
              className="form-input"
              placeholder="lastname"
              type="text"
            />
            <label htmlFor="email" className="form-label">
              email
            </label>
            <input
              id="email"
              className="form-input"
              placeholder="email"
              type="text"
            />
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
            signup
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
