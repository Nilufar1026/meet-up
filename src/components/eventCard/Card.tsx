import React from "react";
import { useSelector } from "react-redux";
import { getEventsSelector, interestHandler } from "../../redux/slice/event.slice";
import { Event } from "../../redux/slice/event.slice";
import './card.css';
import {  Link } from 'react-router-dom'
import { useAppDispatch } from "../../redux/store.hook";

const Card: React.FC = () => {
  let events = useSelector(getEventsSelector);
  let activitiesEvent=events.slice().sort((a:any, b:any) => b.date.valueOf() - a.date.valueOf())
  
  const dispatch = useAppDispatch()
  const eventInterestHandler = (event: Event) => {
    dispatch(interestHandler(event))
   
  }

  return (
    <div className="allEvent" id="allEvent">
      <h1>ALL EVENTS</h1>
      <div className="allEvent-container">
        {activitiesEvent.map((event: Event) => (
          <div  className="event-card" key={+event.id} data-testid="listItem">
            <img src={event.imageSrc} alt="plants" />
            <p>{event.name}</p>
            <p data-testid="listItemDate">{event.date.getMonth()+1}/{event.date.getDate()}/{event.date.getFullYear()}</p>
            {event.date.getTime() < new Date().getTime() ? <h6>Passed</h6>: null}
            <Link to={`/event/${event.id}`} data-testid="itemSeeMore">See more</Link>
            <button onClick={() =>eventInterestHandler(event)}>Interest</button>
          </div>
        ))}
      </div >
    </div>
  );
};

export default Card;
