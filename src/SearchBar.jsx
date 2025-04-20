import React, { useState } from 'react';
     import axios from 'axios';

     const SearchBar = ({ setWeather, setForecast, setError }) => {
       const [city, setCity] = useState("");
       const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

       const fetchWeather = async () => {
         try {
           setError("");
           const weatherRes = await axios.get(
             `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
           );
           setWeather(weatherRes.data);
           const forecastRes = await axios.get(
             `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
           );
           setForecast(forecastRes.data);
         } catch (err) {
           setError("City not found or API error!");
           setWeather(null);
           setForecast(null);
         }
       };

       const handleSearch = () => {
         if (city.trim()) fetchWeather();
       };

       return (
         <div className="flex justify-center mb-6 sm:mb-8">
           <input
             type="text"
             value={city}
             onChange={(e) => setCity(e.target.value)}
             placeholder="Enter city name"
             className="p-2 sm:p-3 rounded-l-xl bg-input-bg text-input-text placeholder-input-placeholder focus:outline-none shadow-neumorphic transition-all duration-300 hover:scale-105 w-full sm:w-3/4"
           />
           <button
             onClick={handleSearch}
             className="p-2 sm:p-3 bg-button-bg text-button-text rounded-r-xl hover:scale-110 transition-transform duration-300 shadow-neumorphic animate-pulse-slow"
           >
             Search
           </button>
         </div>
       );
     };

     export default SearchBar;