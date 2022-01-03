import React from "react";
import Header from "./components/Header/Header";

import "./App.css";

import Card from "./components/eventCard/Card";
import Home from "./components/Home/Home";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import { Routes, Route } from "react-router-dom";
import EventDetails from "./components/eventDetails/EventDetails";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Card />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/event/:id" element={<EventDetails />} />
      </Routes>
    </div>
  );
}



export default App;
