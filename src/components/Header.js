import Nav from "./Nav";
import logo from "../logo.png";
import React, { useState, useEffect } from "react";

function Header() {
  const [currentData, setCurrentData] = useState({});

  useEffect(() => {
    const currentAPI = `https://api.openweathermap.org/data/3.0/onecall?lat=-37.8142&lon=144.9632&exclude=minutely,alerts,daily,hourly&appid=1ae8a0984eed421accff45fdef7d8307`;

    const fetchData = async () => {
      try {
        const response = await fetch(currentAPI);
        const data = await response.json();
        setCurrentData(data); // Store the entire data object
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    fetchData();
  }, []); // The empty array ensures this effect runs only once when the component mounts

  // Safety check to ensure currentData.current exists before trying to access its properties
  const temperatureCelsius = currentData.current
    ? Math.trunc(currentData.current.temp - 273.15)
    : "";

  const UVI = currentData.current?.uvi;
  return (
    <header className="header">
      <div className="small-part">
        <a className="main-nav-link" href="/">
          <img className="logo" alt="Logo" src={logo} />
        </a>
        <div>Melbourne</div>
        <div>{temperatureCelsius}℃</div>
        <div>UVI {UVI}</div>
      </div>
      <Nav />
    </header>
  );
}

export default Header;
