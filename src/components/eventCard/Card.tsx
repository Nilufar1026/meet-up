import React from 'react';
import { useSelector } from 'react-redux';
import { getEventsSelector } from '../../redux/slice/event.slice';
import {Event} from '../../redux/slice/event.slice'

interface Props{
    event:Event
}

const Card:React.FC<Props>=({event})=> {
    // const renderComponentHandler = (product: Product) => {
    //     setRenderComponent(true)
    //     dispatch(addAvtiveCard(product))
    //   }
      const events = useSelector(getEventsSelector)
    //   const dispatch = useAppDispatch()
    //   const addToCartHandler = (product: Product) => dispatch(addToCart(product))
    
  return (
    <section className="card">
        <div className="image"></div>
        <h3>Title</h3>
        <p>date</p>
    </section>
  );
}

export default Card;
