import { useContext, useEffect, useRef } from "react";
import { WeatherContext } from "./store/weather-context";
import Toasts from "./components/Toasts";
import { toast, Slide } from "react-toastify";
import City from "./components/City";
import Input from "./components/Search";
import Temperature from "./components/Temperature";
import WeatherIcon from "./components/WeatherIcon";
import Details from "./components/Details";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const { error, fetchWeatherData } = useContext(WeatherContext);

  const debounceTimeout = useRef(null);

  useEffect(() => {
    fetchWeatherData("Mumbai");
  }, []);

  useEffect(() => {
    if (error) {
      toast.error(error, {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        transition: Slide,
        theme: "light",
      });
    }
  }, [error]);

  const changeHandler = (value) => {
    // Clear the previous timeout
    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }

    // Set a new timeout to trigger the search after 500ms
    debounceTimeout.current = setTimeout(() => {
      if (value.trim()) {
        fetchWeatherData(value.trim());
      }
    }, 500);
  };

  return (
    <>
      <div className="container">
        <div className="wrapper">
          <h1 className="weather-title">Weather in</h1>
          <Input
            type="text"
            placeholder="Enter City"
            onChange={changeHandler}
          />
          <div className="display-info">
            <City />
            <Temperature />
            <WeatherIcon />
            <Details />
          </div>
        </div>
      </div>
      <Toasts />
    </>
  );
}

export default App;
