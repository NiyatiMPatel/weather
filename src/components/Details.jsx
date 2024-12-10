import React, { useContext } from "react";
import { WeatherContext } from "../store/weather-context";
import Detail from "./Detail";
import Skeleton from "./Skeleton";

const Details = () => {
  const { loading, weatherData } = useContext(WeatherContext);

  return (
    <div className="details-info info">
      <div>
        {loading && <Skeleton type="rec" />}
        {!loading && (
          <Detail value={`${weatherData.feels}°C`} description="Feels Like" />
        )}
      </div>
      <div>
        {loading && <Skeleton type="rec" />}
        {!loading && (
          <Detail value={`${weatherData.humidity}%`} description="Humidity" />
        )}
      </div>
    </div>
  );
};

export default Details;
