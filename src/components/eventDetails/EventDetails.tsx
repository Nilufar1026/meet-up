import { useParams } from "react-router-dom";
import {
  getEventsSelector,
  interestHandler,
} from "../../redux/slice/event.slice";
import { useSelector } from "react-redux";
import Comment from "../comment/comment";
import "./eventDetails.css";
import { useAppDispatch } from "../../redux/store.hook";
import { Event } from "../../redux/slice/event.slice";

const EventDetails = () => {
  const { id }: any = useParams();
  let events = useSelector(getEventsSelector);

  const dispatch = useAppDispatch();
  const eventInterestHandler = (event: Event) => {
    dispatch(interestHandler(event));
  };

  return (
    <div>
      <div className="detailsWrapper">
        {events
          .filter((event) => event.id === +id)
          .map((event, id) => (
            <div key={id} className="detailsContainer">
              <img src={event.imageSrc} alt={event.name} />
              <div className="details">
                <h1>{event.name}</h1>
                <p className="category">{event.category.join(" | ")}</p>
                <p className="description">{event.description}</p>
                <p className="seats" data-testid="detailsSeats">
                  Attend: {event.seats} seats
                </p>
                <p className="date">
                  Date: {event.date.getMonth() + 1}/{event.date.getDate()}/
                  {event.date.getFullYear()}
                </p>
                <button onClick={() => eventInterestHandler(event)}>
                  Interest
                </button>
                <p className="address">Address: {event.address}</p>
              </div>
            </div>
          ))}
        <div className="comment">
          <Comment />
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
