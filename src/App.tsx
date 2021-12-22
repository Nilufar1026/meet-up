import React from 'react';
import Header from './components/Header/Header'

import './App.css';

import Card from './components/eventCard/Card';
import Home from './components/Home/Home';
import About from './components/about/About';
import Contact from './components/contact/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Card />
      <About/>
      <Contact />
    </div>
  );
}

export default App;
