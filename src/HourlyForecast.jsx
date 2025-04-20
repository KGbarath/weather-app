import React from 'react';

const HourlyForecast = ({ forecast }) => {
  if (!forecast) return null;

  const hourly = forecast.list.slice(0, 8);

  return (
    <div className="mt-6 sm:mt-8">
      <h3 className="text-lg sm:text-2xl font-bold mb-4 text-heading animate-fadeIn">
        Hourly Forecast
      </h3>
      <div className="flex overflow-x-auto space-x-4 pb-4 snap-x snap-mandatory">
        {hourly.map((item, idx) => (
          <div
            key={idx}
            className="p-3 sm:p-4 min-w-[120px] sm:min-w-[150px] bg-card-bg backdrop-blur-lg rounded-lg text-center shadow-neumorphic animate-slideIn hover:border-2 hover:border-heading snap-center"
          >
            <p className="text-primary text-xs sm:text-sm">{new Date(item.dt * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
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

export default HourlyForecast;