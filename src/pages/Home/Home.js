import React from "react";
import Navbar from "../../components/Navbar/Navbar";
// import { Link } from "react-router-dom";
import './Home.css'
import Box from '../../components/Box'


const Home = () => {
  return (
    <div>
      <Navbar data='LOGOUT' />

      <section className="row">
       <div className="filter">
       <div className="filter_feilds">
          <button className="secondary_btn active">Fulter One</button>
          <button className="secondary_btn">Fulter One</button>
          <button className="secondary_btn">Fulter One</button>
          <button className="secondary_btn">Fulter One</button>
        </div>
       </div>

        <div className="box_container">
          <Box id='123457' title='John XYZ ABCD' />
          <Box id='4948343' title='John XYZ ABCD'/>
          <Box id='444348' title='John XYZ ABCD'/>
          <Box id='434993' title='John XYZ ABCD'/>
          <Box id='4443434' title='John XYZ ABCD'/>
          <Box id='443349' title='John XYZ ABCD'/>
          <Box id='123457' title='John XYZ ABCD'/>
        </div>
      </section>
    </div>
  );
};

export default Home;
