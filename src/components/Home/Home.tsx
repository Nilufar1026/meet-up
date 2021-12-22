import React from "react";
import { useSelector } from "react-redux";
import { getEventsSelector } from "../../redux/slice/event.slice";
import './home.css'

const Home=()=> {
  const events = useSelector(getEventsSelector);
  
  return (
    <div className="Home" id="home">
      <div className="wrapper">
        <h1>{events[0].name}</h1>
        <h5>{events[0].date}</h5>
        <img src={events[0].imageSrc} alt={events[0].name} />
      </div>
    </div>
  );
}

export default Home;
