import { useEffect, useState } from "react";

const airQualityEmojies = ["😁", "😊", "😐", "😷", "🤢", "💀"];
export default function WeatherResult({
  location,
  airQuality,
  temperature,
  weatherIcon,
}) {
  let [airQualityEmoji, setAirQualityEmoji] = useState("");
  useEffect(() => {
    let newEmoji =
      airQuality < 51
        ? airQualityEmojies[0]
        : airQuality < 101
        ? airQualityEmojies[1]
        : airQuality < 151
        ? airQualityEmojies[2]
        : airQuality < 201
        ? airQualityEmojies[3]
        : airQuality < 301
        ? airQualityEmojies[4]
        : airQualityEmojies[5];
    setAirQualityEmoji(newEmoji);
  }, [airQuality]);
  return (
    <div className="weather-card-container">
      <h2>{location}</h2>
      <div className="weather-condition">
        <p>Temperature: {temperature}°C</p>
        <img src={weatherIcon} alt="" className="weather-condition-icon"></img>
      </div>
      <div className="air-quality">
        <p className="air-quality-index">Air Quality Index: {airQuality}</p>
        <div className="air-quality-icon">{airQualityEmoji}</div>
      </div>
    </div>
  );
}
