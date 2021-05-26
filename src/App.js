import React, { useEffect, useState } from "react";
import "./App.css";
import ErrorCard from "./ErrorCard";
import Query from "./Query";
import WeatherResult from "./WeatherResult";

const apiKey = "6ac208a3616a4232a8f104345211504";
const apiURL = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&aqi=yes&q=`;

function App() {
  let [userInput, setUserInput] = useState("");
  let [location, setLocation] = useState("");
  let [airQuality, setAirQuality] = useState("");
  let [errorMsg, setErrorMsg] = useState("");
  let [temperature, setTemperature] = useState("");
  let [weatherIcon, setWeatherIcon] = useState("");

  useEffect(() => {
    if (userInput.length > 0) {
      fetch(apiURL + userInput)
      .then((resp) => resp.json())
      .then((data) => {
        if (data.error) {
          setErrorMsg(data.error.message);
        } else {
          setErrorMsg('');
          setLocation(
            `${data.location.name}, ${
              data.location.region && data.location.region + " - "
            } ${data.location.country}`
          );
          setTemperature(`${data.current.temp_c}°C`);
          setAirQuality(`${data.current.air_quality.pm10.toFixed(2)}`);
          setWeatherIcon(data.current.condition.icon);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    }
  }, [userInput]);

  return (
    <div className="app-container">
      <Query setUserInput={setUserInput} />
      {errorMsg.length === 0 ? userInput.length > 0 ? <WeatherResult
        location={location}
        airQuality={airQuality}
        temperature={temperature}
        weatherIcon={weatherIcon}
      /> : null : <ErrorCard error={errorMsg} />}
    </div>
  );
}

export default App;
