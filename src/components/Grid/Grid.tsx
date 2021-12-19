import React from 'react';
import { useSelector } from 'react-redux';
import { getEventsSelector } from '../../redux/slice/event.slice';
import Card from '../eventCard/Card';
import {Event} from '../../redux/slice/event.slice'

function Grid() {
    // const renderComponentHandler = (product: Product) => {
    //     setRenderComponent(true)
    //     dispatch(addAvtiveCard(product))
    //   }
      const events = useSelector(getEventsSelector)
    //   const dispatch = useAppDispatch()
    //   const addToCartHandler = (product: Product) => dispatch(addToCart(product))
    const testData: Event ={
        name:'',
        date:'',
        id:'',
        imageSrc:'',
        description:'',
        address:'',
        category:[],
        seets:1
    }
  return (
    <div className="Grid">
      <Card event={testData}/>
    </div>
  );
}

export default Grid;
