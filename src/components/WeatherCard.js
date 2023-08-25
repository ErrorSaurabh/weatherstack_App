import React, { useState, useEffect } from "react";
import axios from "axios";
import "./WeatherCard.css";

const WeatherCard = () => {
  const apiKey = "f56f24967aaf51182d1d4df628297c6d";
  const [inputCity, setInputCity] = useState("");
  const [data, setData] = useState({});

  const getWeatherDetails = (cityName) => {
    if (!cityName) return;
    const apiURL =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      cityName +
      "&appid=" +
      apiKey;
    axios
      .get(apiURL)
      .then((res) => {
        console.log("response", res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  const handleChangeInput = (e) => {
    console.log("value", e.target.value);
    setInputCity(e.target.value);
  };

  const handleSearch = () => {
    getWeatherDetails(inputCity);
  };

  return (
   <div className="card">
  <div className="col-md-12 text-center mt-5">
    
     
        <h2>WeatherStack</h2>
          <input
            type="text"
            className="form-control"
            value={inputCity}
            onChange={handleChangeInput}
            placeholder="Enter city"
          />
          <button
            className="btn btn-primary search-button"
            type="button"
            onClick={handleSearch}
          >
            Search
          </button>
        {Object.keys(data).length > 0 && (
          <div className="text-center mt-5">
              <img
                className="card-img-top weatherIcon mx-auto mt-3"
                src="https://i.pinimg.com/originals/77/0b/80/770b805d5c99c7931366c2e84e88f251.png"
                alt="Weather Icon"
                width="50px"
              />
                <h3>{data?.name}</h3>
                <h3>
                  {(data?.main?.temp - 273.15).toFixed(2)}°C
                </h3>
          </div>
        )}
     
    
  </div>

  {/* <div className="sky">
    <div className="sun"></div>
    <div className="cloud">
      <div className="circle-small"></div>
      <div className="circle-tall"></div>
      <div className="circle-medium"></div>
    </div>
  </div> */}
  <h2>Bengaluru (India)</h2>
  <table>
    <tbody>
      <tr>
        <td>TUE</td>
        <td>WED</td>
        <td>THU</td>
        <td>FRI</td>
        <td>SAT</td>
      </tr>
      <tr>
        <td>30°</td>
        <td>34°</td>
        <td>36°</td>
        <td>34°</td>
        <td>37°</td>
      </tr>
      <tr>
        <td>17°</td>
        <td>22°</td>
        <td>19°</td>
        <td>23°</td>
        <td>19°</td>
      </tr>
    </tbody>
  </table>
</div>


  );
};

export default WeatherCard;