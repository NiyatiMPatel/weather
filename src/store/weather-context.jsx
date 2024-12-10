import { createContext, useState } from "react";
import instance from "../axios/interceptors";

export const WeatherContext = createContext({
  weatherData: {},
  loading: false,
  error: false,
  fetchWeatherData: () => {},
});

const WeatherContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [weatherData, setWeatherData] = useState({
    name: "",
    temp: "",
    min_temp: "",
    max_temp: "",
    feels: "",
    humidity: "",
    description: "",
    icon: "",
  });

  const fetchWeatherData = async (city) => {
    setLoading(true);
    setError(null);
    try {
      const data = await instance.get("/weather", {
        params: { q: city, units: "metric" },
      });

      // console.log("file: weather-context.jsx:23 ~ data:", data);

      setWeatherData({
        name: data?.name,
        temp: Math.floor(data?.main?.temp),
        min_temp: Math.floor(data?.main?.temp_min),
        max_temp: Math.floor(data?.main?.temp_max),
        feels: Math.floor(data?.main?.feels_like),
        humidity: data?.main?.humidity,
        description: data?.weather[0]?.description,
        icon: data?.weather[0]?.icon,
      });
    } catch (error) {
      // console.log("file: weather-context.jsx:28 ~ error:", error);
      setError(error.response.data.message);
    }
    setLoading(false);
  };

  return (
    <WeatherContext.Provider
      value={{
        weatherData,
        loading,
        error,
        fetchWeatherData,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
export default WeatherContextProvider;
