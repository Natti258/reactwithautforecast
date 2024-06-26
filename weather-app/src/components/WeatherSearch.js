import React, { useState } from "react";
import axios from "axios";
import Weather from "./Weather";

function WeatherSearch() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const weatherResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=59a99bf814c1d687d082fbb625caab0c`
      );
      setWeatherData(weatherResponse.data);
      setError(null);
    } catch (error) {
      setError("City not found");
      setWeatherData(null);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        />
        <button type="submit">Search</button>
      </form>
      {error && <p>{error}</p>}
      {weatherData && <Weather data={weatherData} />}
    </div>
  );
}

export default WeatherSearch;
