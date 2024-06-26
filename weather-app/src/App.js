import React from 'react';
import './App.css';
import WeatherSearch from './components/WeatherSearch';

function App() {
  return (
    <div className="App">
      <div className="mein">
        <h1>Weather Forecast</h1>
        <WeatherSearch />
      </div>
    </div>
  );
}

export default App;
