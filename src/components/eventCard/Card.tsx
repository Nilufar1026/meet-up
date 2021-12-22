import React from "react";
import { useSelector } from "react-redux";
import { getEventsSelector } from "../../redux/slice/event.slice";
import { Event } from "../../redux/slice/event.slice";
import * as S from "./styled";

const Grid: React.FC = () => {
  const events = useSelector(getEventsSelector);
  return (
    <div className="allEvent" id="allEvent">
      <h1>ALL EVENTS</h1>
      <S.Container>
        {events.map((event: Event) => (
          <div key={event.id}>
            <S.image src={event.imageSrc} alt="plants" />
            <p>{event.name}</p>
            <p>{event.date}</p>
          </div>
        ))}
      </S.Container>
    </div>
  );
};

export default Grid;
