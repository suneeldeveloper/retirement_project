import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'

const Navbar = (props) => {

 
  return (
    <>
      <div className="navbar">
          <Link to='/home' className="logo">Retirement-App</Link>
        <div className="menu">
          <button className='update_btn'>{props.data}</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
