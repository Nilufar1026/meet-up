import React from "react";
import './header.css'
import logo from '../../assets/images/logo.jpg'
import search from '../../assets/images/search.png'
import SvgLogo from '../../assets/images/Logo'
const Header=()=> {
  return (
    <div className="Header">
      <div className="icon">
        <SvgLogo />
        <h2 className="iconText">Stockholm Events</h2>
      </div>
      <ul className="navbar">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#allEvent">All events</a>
        </li>
        <li>
          <a href="#about">About us</a>
        </li>
        <li>
          <a href="#contact">Contact us</a>
        </li>
      </ul>
      <div className="searchbar">
        <input type="text" />
        <img src={search} alt="search" />
      </div>
    </div>
  );
}

export default Header;
