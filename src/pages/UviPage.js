import Header from "../components/Header";
import React, { useState } from "react";
import "./UviPage.css";

import UviForecast from "../components/UviForecast";

function UviPage() {
  const [locationData, setLocationData] = useState({});
  const [location, setLocation] = useState("");
  // const [lat, setLat] = useState("");
  // const [lon, setLon] = useState("");
  const [uviArray, setUviArray] = useState([]);
  const [currentData, setCurrentData] = useState({
    current: {
      temp: 0,
      uvi: "",
      weather: [{ main: "" }],
      wind_speed: "",
    },
  });

  const locationAPI = `https://api.openweathermap.org/geo/1.0/direct?q=${location}&appid=1ae8a0984eed421accff45fdef7d8307`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      fetch(locationAPI)
        .then((response) => response.json()) // Convert the response to JSON
        .then((data) => {
          if (data && data.length > 0) {
            // console.log(data, typeof data[0]); // Log the data
            setLocationData(data[0]);
            // Here, you can set the data to state or handle it as needed
            // setLat(data[0].lat);
            // setLon(data[0].lon);
            // Use data[0].lat and data[0].lon directly for the next fetch call
            const currentAPI = `https://api.openweathermap.org/data/3.0/onecall?lat=${data[0].lat}&lon=${data[0].lon}&exclude=minutely,alerts,daily,hourly&appid=1ae8a0984eed421accff45fdef7d8307`;
            const hourlyAPI = `https://api.openweathermap.org/data/3.0/onecall?lat=${data[0].lat}&lon=${data[0].lon}&exclude=minutely,alerts,daily,current&appid=1ae8a0984eed421accff45fdef7d8307`;

            return Promise.all([
              fetch(currentAPI).then((resp) => resp.json()),
              fetch(hourlyAPI).then((resp) => resp.json()),
            ]);
          } else {
            throw new Error("No data found for this location");
          }
        })
        .then(([currentData, hourlyData]) => {
          // console.log(currentData); // Log current weather data
          console.log(hourlyData, typeof hourlyData); // Log hourly forecast data

          console.log(currentData);
          setCurrentData(currentData);

          setUviArray(hourlyData.hourly.map((item) => item.uvi).slice(0, 25));
        })
        .catch((error) => console.log(error));
      setLocation(""); // Reset the location input field for new searches
    }
  };

  const handleInputChange = (e) => {
    setLocation(e.target.value);
  };

  function ClothesRecommendation() {
    const uvi = currentData.current.uvi;
    if (uvi !== "") {
      if (uvi >= 0 && uvi <= 2) {
        return (
          <p>
            <strong>- No need</strong>
          </p>
        );
      }
      if (uvi > 2 && uvi <= 4) {
        return (
          <p>
            <strong>- Wear Protective Clothing/Hat</strong>
          </p>
        );
      }
      if (uvi > 4 && uvi <= 6) {
        return (
          <>
            <p>
              <strong>- Wear Protective Clothing/Hat</strong>
            </p>
            <p>
              <strong>- Sunglasses</strong>
            </p>
          </>
        );
      }
      if (uvi > 6 && uvi <= 10) {
        return (
          <>
            <p>
              <strong>- Wear Protective Clothing/Hat</strong>
            </p>
            <p>
              <strong>- Sunglasses</strong>
            </p>
          </>
        );
      }
      if (uvi > 10) {
        return (
          <>
            <p>
              <strong>Avoid going out for safety</strong>
            </p>
          </>
        );
      }
    } else {
      return "";
    }
  }
  function SunScreenUsage() {
    const uvi = currentData.current.uvi;
    console.log(uvi);
    if (uvi !== "") {
      if (uvi >= 0 && uvi <= 2) {
        return (
          <p>
            <strong> No need</strong>
          </p>
        );
      }
      if (uvi > 2 && uvi <= 4) {
        return (
          <>
            <p>
              <strong>7 spoons of SPF 15+</strong>
            </p>
            <p>
              <strong>
                - One Spoon for each arm, leg, body front, body back and face
                (including neck and ears)
              </strong>
            </p>
          </>
        );
      }
      if (uvi > 4 && uvi <= 6) {
        return (
          <>
            <p>
              <strong>7 spoons of SPF 30+</strong>
            </p>
            <p>
              <strong>
                - One Spoon for each arm, leg, body front, body back and face
                (including neck and ears)
              </strong>
            </p>
          </>
        );
      }
      if (uvi > 6 && uvi <= 10) {
        return (
          <>
            <p>
              <strong> - 7 spoons of SPF 50+</strong>
            </p>
            <p>
              <strong>
                - One Spoon for each arm, leg, body front, body back and face
                (including neck and ears)
              </strong>
            </p>
          </>
        );
      }
      if (uvi > 10) {
        return (
          <>
            <p>
              <strong> Avoid going out for safety</strong>
            </p>
          </>
        );
      }
    } else {
      return "";
    }
  }

  return (
    <>
      <div className="uni">
        {/* <Header /> */}
        <div className="search">
          <input
            value={location}
            onChange={handleInputChange}
            onKeyDown={searchLocation}
            type="text"
            placeholder="Enter Location"
          />
        </div>
        <div className="container">
          <div className="top">
            <div className="location">
              <p>{locationData.name}</p>
            </div>
            <div className="temp">
              <h1>
                {currentData.current.temp !== 0
                  ? `${Math.trunc(currentData.current.temp - 273.15)}℃`
                  : ""}
              </h1>
            </div>
          </div>
          <div className="bottom">
            <div className="UVI">
              <p>UVI</p>
              <p>
                <strong>{currentData.current.uvi}</strong>
                {console.log(uviArray)}
              </p>
            </div>
            <div className="clothes recommendation">
              <p>Clothes Recommendation</p>
              <ClothesRecommendation />
            </div>
            <div className="sunscreen">
              <p>Sunscreen Usage</p>
              <SunScreenUsage />
            </div>
          </div>
        </div>
      </div>

      {locationData.name ? <UviForecast uviArray={uviArray} /> : null}
    </>
  );
}

export default UviPage;
