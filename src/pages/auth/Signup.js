import React from "react";
import { Link } from "react-router-dom";
import "./Auth.css";

const Signup = () => {
  return (
    <>
      <div className="container">
        <div className="navbar">
          <Link to="/home" className="logo">
            Retirement-App
          </Link>
        </div>

        <div className="form_box">
          <h1 className="heading">Signup</h1>
          <form>
            <div className="input_group">
              <div className="input_feild">
                <i className="fas fa-solid fa-user"></i>
                <input type="text" placeholder="Username" />
              </div>
              <div className="input_feild">
                <i className="fas fa-solid fa-envelope"></i>
                <input type="email" placeholder="Your Email" />
              </div>
              <div className="input_feild">
                <i className="fas fa-regular fa-lock"></i>
                <input type="password" placeholder="Your Password" />
              </div>
              <p className="form_links">
                Already have an Account? <Link to="/">Login</Link>
              </p>
            </div>
            <button className="primary_btn">Signup</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
