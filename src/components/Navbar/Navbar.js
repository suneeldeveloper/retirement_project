import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = (props) => {
  return (
    <>
      <div className="navbar">
        <Link to="/home" className="logo">
          Retirement-App
        </Link>
          <button className="update_btn">{props.data}</button>
      </div>
    </>
  );
};

export default Navbar;
