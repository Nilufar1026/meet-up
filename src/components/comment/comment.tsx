import { useNavigate, useParams } from "react-router-dom";
import { getEventsSelector } from "../../redux/slice/event.slice";
import { useSelector } from "react-redux";

import { useAppDispatch } from "../../redux/store.hook";
import { addComment }  from "../../redux/slice/comment.slice";
import EventComment from "../../redux/slice/comment.slice"
import { RootState } from "../../redux/store";
import { useState } from "react";
import './comment.css'
// interface CustomerType{
//   id:number,
//   name:string,
//   comment:string[],
// }
const Comment = () => {
    const [eventComment,setEventComment]=useState("")
    const comments=useSelector((state:RootState)=>state.comment.comment)
    
const dispatch = useAppDispatch()
 const addCommentHandler=() => {
     if(!eventComment) return;
     dispatch(addComment(eventComment));
     setEventComment("")
    }
  return (
    <div >
        <h3>Comments :</h3>
        <input type="text"  value={eventComment} onChange={(e)=>setEventComment(e.target.value)} placeholder="Write you comment"/>
        <button onClick={ addCommentHandler}>Add comennt</button>
        {comments.map((comment,index)=>
             (<div key={index}>
                 <p data-testid="detailsComment">{comment}</p>
                 </div>)
        )}
    </div>
  );
};

export default Comment;
