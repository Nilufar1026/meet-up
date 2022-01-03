import { useNavigate, useParams } from "react-router-dom";
import { getEventsSelector } from "../../redux/slice/event.slice";
import { useSelector } from "react-redux";

const EventDetails = () => {
  const { id }:any = useParams();
 
  const events = useSelector(getEventsSelector);

  return (
    <div>
    
        <div>
          {events.filter(event=>event.id=== +id).map((event,id)=>(
            <div key={id}>
                <h1>{event.name}</h1>
                <img src={event.imageSrc} alt={event.name} />
                <p>{event.category}</p>
                <p>{event.description}</p>
                <p>{event.seets}</p>
                <p>{event.date.getMonth()+1}/{event.date.getDate()}/{event.date.getFullYear()}</p>
                <p>{event.address}</p>
                
            </div>
          ))}
        </div>
    
    </div>
  );
};

export default EventDetails;
