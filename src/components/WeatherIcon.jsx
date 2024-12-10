import React, { useContext } from "react";
import { WeatherContext } from "../store/weather-context";

const WeatherIcon = () => {
  const { weatherData } = useContext(WeatherContext);

  return (
    <div className="icon">
      <img
        src={` https://openweathermap.org/img/wn/${weatherData.icon}@2x.png`}
        alt={weatherData.description}
        className="d-block my-4 mx-auto text-bg-secondary rounded-circle weather-icon"
      />
    </div>
  );
};

export default WeatherIcon;
