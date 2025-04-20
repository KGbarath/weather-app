import React from 'react';

const WeatherDisplay = ({ weather }) => {
  if (!weather) return null;

  const weatherCondition = weather.weather[0].main;
  const weatherImages = {
    Clear: 'url(https://wallpaperaccess.com/full/3265126.jpg)',
    Clouds: 'url(https://images.pexels.com/photos/158163/clouds-cloudporn-weather-lookup-158163.jpeg?cs=srgb&dl=clouds-cloudscape-cloudy-158163.jpg&fm=jpg)',
    Rain: 'url(https://www.hdwallpapers.in/download/falling_rain_drops_on_white_umbrella_hd_rain-HD.jpg)',
    Drizzle: 'url(https://wallpapercave.com/wp/wp8260484.jpg)',
    Thunderstorm: 'url(https://wallpapercrafter.com/desktop1/504201-lightning-thunder-sky-thunderstorm-atmosphere.jpg)',
    Snow: 'url(https://images7.alphacoders.com/112/thumb-1920-1120492.jpg)',
    Mist: 'url(https://wallpapercave.com/wp/wp4155428.jpg)',
    Fog: 'url(https://wallpaperaccess.com/full/4292206.jpg)',
    Haze: 'url(https://images.hdqwalls.com/download/field-fog-trees-blue-weather-cold-4k-5k-ee-1680x1050.jpg)',
  };

  const backgroundStyle = {
    backgroundImage: weatherImages[weatherCondition] || 'linear-gradient(to bottom, #6b7280, #374151)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div
      className="p-4 sm:p-6 bg-card-bg backdrop-blur-lg rounded-xl shadow-neumorphic text-center animate-slideIn relative overflow-hidden group"
      style={backgroundStyle}
    >
      <div className="absolute inset-0 sprinkle-stars opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <h2 className="text-xl sm:text-3xl font-bold text-heading">
        {weather.name}, {weather.sys.country}
      </h2>
      <img
        src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt="Weather Icon"
        className="mx-auto animate-pulse w-16 sm:w-24"
      />
      <p className="text-lg sm:text-2xl text-primary">{Math.round(weather.main.temp)}°C</p>
      <p className="capitalize text-primary text-sm sm:text-base">{weather.weather[0].description}</p>
      <p className="text-primary text-sm sm:text-base">Humidity: {weather.main.humidity}%</p>
      <p className="text-primary text-sm sm:text-base">Wind Speed: {weather.wind.speed} m/s</p>
    </div>
  );
};

export default WeatherDisplay;