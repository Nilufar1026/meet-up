import { useSelector } from "react-redux";
import { getEventsSelector } from "../../redux/slice/event.slice";
import './topEvent.css'

const TopEvent=()=> {
  const events = useSelector(getEventsSelector);
  
  return (
    <div className="topEvent" id="TopEvent">
      <div className="wrapper">
        <h1>{events[0].name}</h1>
        <h5>{events[0].date.getMonth()+1}/{events[0].date.getDate()}</h5>
        <img src={events[0].imageSrc} alt={events[0].name} />
      </div>
    </div>
  );
}

export default TopEvent;
