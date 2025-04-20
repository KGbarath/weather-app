import React from 'react';

const DailyForecast = ({ forecast }) => {
  if (!forecast) return null;

  const daily = forecast.list.filter((item, idx) => idx % 8 === 0).slice(0, 5);

  return (
    <div className="mt-6 sm:mt-8">
      <h3 className="text-lg sm:text-2xl font-bold mb-4 text-heading animate-fadeIn">
        5-Day Forecast
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {daily.map((item, idx) => (
          <div
            key={idx}
            className="p-3 sm:p-4 bg-card-bg backdrop-blur-lg rounded-lg text-center shadow-neumorphic animate-slideIn hover:border-2 hover:border-heading"
          >
            <p className="text-primary text-xs sm:text-sm">{new Date(item.dt * 1000).toLocaleDateString()}</p>
            <img
              src={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
              alt="Weather Icon"
              className="mx-auto w-10 sm:w-12"
            />
            <p className="text-primary text-xs sm:text-sm">{Math.round(item.main.temp)}°C</p>
            <p className="capitalize text-primary text-xs sm:text-sm">{item.weather[0].description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DailyForecast;