import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import WeatherContextProvider from "./store/weather-context.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <WeatherContextProvider>
      <App />
    </WeatherContextProvider>
  </StrictMode>
);
