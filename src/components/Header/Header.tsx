import React from "react";
import './header.css'
import search from '../../assets/images/search.png'
import SvgLogo from '../../assets/images/Logo'
import { Link } from "react-router-dom";
const Header=()=> {
  return (
    <div className="Header">
      <Link to="/" className="icon">
        <SvgLogo />
        <h2 className="iconText">Stockholm Events</h2>
      </Link>
      <ul className="navbar">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/events">All events</Link>
        </li>
        <li>
          <Link to="/about">About us</Link>
        </li>
        <li>
          <Link to="/contact">Contact us</Link>
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
