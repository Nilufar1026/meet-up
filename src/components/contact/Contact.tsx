import React from "react";
// import stockholm from '../../assets/images/stockholm.jpg'
 import './contact.css'

const Contact=()=> {
 
  
  return (
    <div className="contact" id="contact">
      <h1>Contact</h1>
      <div className="messageContainer">

        <h3>Your name</h3>
        <input type="text" className="inputName"/>
        <h3>Your message</h3>
        <input type="text" className="inputMessage"/>
      </div>
     
    </div>
  );
}

export default Contact;
