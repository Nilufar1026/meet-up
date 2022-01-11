import { useNavigate, useParams } from "react-router-dom";
import { getEventsSelector, sortedActivities } from "../../redux/slice/event.slice";
import { useSelector } from "react-redux";
import Comment from "../comment/comment";
import "./eventDetails.css";
import { useAppSelector } from "../../redux/store.hook";
const EventDetails = () => {
  const { id }: any = useParams();
const events = useSelector(getEventsSelector);
const activitiesEvent=useAppSelector(sortedActivities)
  return (
    <div>
      <div className="detailsWrapper">
        {activitiesEvent
          .filter((event) => event.id === +id)
          .map((event, id) => (
            <div key={id} className="detailsContainer">
              <img src={event.imageSrc} alt={event.name} />
              <div className="details">
                <h1>{event.name}</h1>
                <p className="category">{event.category.join(' | ')}</p>
                <p className="description">{event.description}</p>
                <p className="seets">Attend: {event.seets} seets</p>
                <p className="date">
                  Date: {event.date.getMonth() + 1}/{event.date.getDate()}/
                  {event.date.getFullYear()}
                </p>
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
