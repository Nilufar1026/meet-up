import Header from "./components/Header/Header";
import "./App.css";
import Card from "./components/eventCard/Card";
import Home from "./components/Home/Home";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import { Routes, Route } from "react-router-dom";
import EventDetails from "./components/eventDetails/EventDetails";
import Login from "./components/login/Login";
import Post from "./components/post/Post";
import { useState } from "react";
function App() {
  const [isAuth,setIsAuth]=useState(false)
  return (
    <div className="App">
      <Header isAuth={isAuth}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Card />} />
        <Route path="/event" element={<Post isAuth={isAuth}/>} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth}/>} />
        <Route path="/event/:id" element={<EventDetails />} />
      </Routes>
    </div>
  );
}



export default App;
