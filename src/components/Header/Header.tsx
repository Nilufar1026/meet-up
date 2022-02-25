import React from "react";
import './header.css'
import search from '../../assets/images/search.png'
import SvgLogo from '../../assets/images/Logo'
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase-config";

type OwnProps = {
  isAuth:boolean
}

type Props = OwnProps


const Header: React.FunctionComponent<Props> =({isAuth})=> {
  const signUserOut=()=>{
    signOut(auth).then(()=>{
      localStorage.clear()
      window.location.pathname="/login"
    })
  }
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
          <Link data-testid="this-is-about" to="/about">About us</Link>
        </li>
        <li>
          <Link to="/contact">Contact us</Link>
        </li>
        <li>
        {!isAuth ?(

          <Link to="/login">Login</Link>
        ):(
          <>

            <Link to="/event">Create event</Link>
          <button onClick={signUserOut}>Log Out</button>
          </>
        )}
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
