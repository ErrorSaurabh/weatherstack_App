import React from 'react';
import Header from './components/Header.js'
import Hero from './components/Hero.js'
import WeatherCard from './components/WeatherCard.js'
import './App.css';

function App() {
  return (
    <div className="app" style={{
      backgroundImage: "url('https://images.pexels.com/photos/1169754/pexels-photo-1169754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: '100%',
      height: '740px',
    }}>
      <Header />
      <Hero />
      <WeatherCard/>      
    </div>
  );
}

export default App;
