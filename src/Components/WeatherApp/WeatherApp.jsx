import React, { useState } from 'react'
import './Wheater.css';
import search_icon from "../Assets/search.png"
import cloud_icon from "../Assets/cloud.png"
import clear_icon from "../Assets/clear.png"
import drizzle_icon from "../Assets/drizzle.png"
import humidity_icon from "../Assets/humidity.png"
import rain_icon from "../Assets/rain.png"
import snow_icon from "../Assets/snow.png"
import wind_icon from "../Assets/wind.png"

export const WeatherApp = () => {
  let api_key = "c3cac1e8d15125a81188632b035c650a";
  const [wicon, setWicon] = useState(cloud_icon);

  const search = async () => {
    const element = document.getElementsByClassName("cityInput");
    if (element[0].value == "") { return 0; }
    let apikey = 'c3cac1e8d15125a81188632b035c650a';
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${apikey}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(url)

    const humidity = document.getElementsByClassName("humidity-percent")
    const wind = document.getElementsByClassName("wind-rate")
    const temprature = document.getElementsByClassName("weather-temp")
    const location = document.getElementsByClassName("weather-location")
    humidity[0].innerHTML = data.main.humidity + "%";
    wind[0].innerHTML = data.wind.speed + "km/hr";
    temprature[0].innerHTML = data.main.temp + "°C";
    location[0].innerHTML = data.name;
    if (data.weather[0].icon === "01d" || data.weather[0].icon === "01n") {
      setWicon(clear_icon);
    }
    else if (data.weather[0].icon === "02d" || data.weather[0].icon === "02n") {
      setWicon(cloud_icon)
    }
    else if (data.weather[0].icon === "03d" || data.weather[0].icon === "03n") {
      setWicon(drizzle_icon)
    }
    else if (data.weather[0].icon === "09d" || data.weather[0].icon === "09n") {
      setWicon(rain_icon)
    }
    else if (data.weather[0].icon === "13d" || data.weather[0].icon === "09n") {
      setWicon(rain_icon)
    }
    else {
      setWicon(clear_icon)
    }






  }
  return (
    <div className='container'>
      <div className='top-bar'>
        <input type='text' className='cityInput' placeholder='search' />
        <div className='search-icon'>
          <img src={search_icon} alt='search' onClick={() => { search() }} />
        </div>
      </div>
      <div className='weather-image'>
        <img src={cloud_icon} alt='cloud' />
      </div>
      <div className='weather-temp'>24</div>
      <div className='weather-location'>London</div>
      <div className='data-container'>
        <div className='element'>
          <img src={humidity_icon} alt='' className='icon' />
          <div className='data'>
            <div className='humidity-percent'>64% </div>
            <div className='text'>Humidity</div>
          </div>
        </div>
        <div className='element'>
          <img src={wind_icon} alt='' className='icon' />
          <div className='data'>
            <div className='wind-rate'>18Km/hr </div>
            <div className='text'>Wind Speed</div>
          </div>
        </div>
      </div>

    </div>
  )
}
