import React, { useEffect, useState } from "react";
 import { db ,auth} from "../../firebase-config";
 import {addDoc, collection} from 'firebase/firestore'
// import './login.css'
import { useNavigate } from "react-router-dom";


type OwnProps = {
    isAuth:boolean
  }
  
  type Props = OwnProps

const Post: React.FunctionComponent<Props> =({isAuth})=> {
    const [title,setTitle]=useState("")
    const [postEvent,setPostEvent]=useState("")
    let navigate=useNavigate()

    useEffect(()=>{
        if (!isAuth) {
            navigate("/login")
        }
    },[])
    const eventCollectionRef= collection(db,"events")
    const createEvent=async()=>{
        await addDoc(eventCollectionRef,{
            title,
            postEvent,
            author:{
                name:auth.currentUser?.displayName,
                id:auth.currentUser?.uid
            }

        })
        navigate("/")
    }
  return (
    <div className="post" id="post">
      <h1>Create A Event</h1>
      <div className="inputGp">
          <label htmlFor="Titile">Title</label>
          <input type="Title" onChange={(e)=>{setTitle(e.target.value)}}/>
      </div>
      <div className="inputGp">
        <label htmlFor="Post">Event:</label>
          <textarea  onChange={(e)=>{setPostEvent(e.target.value)}}/>
      </div>
      <button onClick={createEvent}>Submit Event</button>
    </div>
  );
}

export default Post;