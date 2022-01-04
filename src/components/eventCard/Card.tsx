import React from "react";
import { useSelector } from "react-redux";
import { getEventsSelector, interestHandler } from "../../redux/slice/event.slice";
import { Event } from "../../redux/slice/event.slice";
import * as S from "./styled";
import {  Link } from 'react-router-dom'
import { useAppDispatch } from "../../redux/store.hook";

const Card: React.FC = () => {
  const events = useSelector(getEventsSelector);
  
  const dispatch = useAppDispatch()
  const eventInterestHandler = (event: Event) => {
    dispatch(interestHandler(event))
   
  }
  return (
    <div className="allEvent" id="allEvent">
      <h1>ALL EVENTS</h1>
      <S.Container>
        {events.map((event: Event) => (
          <div  key={+event.id}>
            <S.image src={event.imageSrc} alt="plants" />
            <p>{event.name}</p>
            <p>{event.date.getMonth()+1}/{event.date.getDate()}/{event.date.getFullYear()}</p>
            <Link to={`/event/${event.id}`}>See more</Link>
            <button onClick={() =>eventInterestHandler(event)}>Interest</button>
          </div>
        ))}
      </S.Container>
    </div>
  );
};

export default Card;
// date.getMonth(), date.getDate(),
// onClick={() => navigate(`/event/${event.id}`)}