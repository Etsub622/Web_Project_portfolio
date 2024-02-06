import React from 'react';
import "./nav.css";
import logoPic from "../../assets/logo.jpg"
function Nav() {
  return (
    <div className='top_nav'>
    <div>
    <img className="logo_pic" src={logoPic} alt='logo'/> 
    </div>
    <div className="nav_bar">
    <ul>
      <li>  <a href="/">Home</a></li>
      <li> <a href="/about">About</a> </li>
      <li> <a href="/project"> Project </a> </li>
      <li> <a href="/contact">Contact me</a> </li>
     
      {/* <li> <a href=""> Skill </a> </li> */}
    </ul>
    </div>
    </div>
  )
}

export default Nav