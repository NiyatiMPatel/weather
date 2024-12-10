import React, { useContext } from "react";
import { WeatherContext } from "../store/weather-context";
import Skeleton from "./Skeleton";

const Temperature = () => {
  const { loading, weatherData } = useContext(WeatherContext);

  return (
    <div className="temperature-info info">
      {loading && <Skeleton type="sq" suffix="°C" />}
      {!loading && <p>{weatherData.temp}°C</p>}
      <div className="temp-detail">
        {loading && (
          <>
            <Skeleton type="sq" prefix="Max" suffix="°C" />
            <Skeleton type="sq" prefix="Min" suffix="°C" />
          </>
        )}
        {!loading && (
          <>
            <p>{weatherData.description}</p>
            <p>Max: {weatherData.max_temp}°C</p>
            <p>Min: {weatherData.min_temp}°C</p>
          </>
        )}
      </div>
    </div>
  );
};

export default Temperature;
