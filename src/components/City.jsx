import React, { useContext } from "react";
import { WeatherContext } from "../store/weather-context";
import Skeleton from "./Skeleton";

const City = () => {
  const { loading, weatherData } = useContext(WeatherContext);
  return (
    <div className="city-info">
      {loading && <Skeleton type="rec" />}
      {!loading && <h2>{weatherData.name}</h2>}
      <p>● ● ●</p>
    </div>
  );
};

export default City;
