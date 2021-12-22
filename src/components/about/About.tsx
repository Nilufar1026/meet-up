import React from "react";
import stockholm from '../../assets/images/stockholm.jpg'
import './about.css'

const About=()=> {
 
  
  return (
    <div className="About" id="about">
      <h1>About us</h1>
       
        <img src={stockholm} alt="stockholm" />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt deserunt expedita iste perspiciatis harum, facere nesciunt sint reprehenderit, repudiandae eum doloribus fugit dignissimos. Asperiores provident iure ut, beatae molestias labore?</p>
    </div>
  );
}

export default About;
