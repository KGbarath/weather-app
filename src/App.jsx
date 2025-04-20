import React, { useState } from 'react';
import { ThemeProvider } from './ThemeContext';
import ThemeSelector from './ThemeSelector';
import QuoteDisplay from './QuoteDisplay';
import SearchBar from './SearchBar';
import WeatherDisplay from './WeatherDisplay';
import HourlyForecast from './HourlyForecast';
import DailyForecast from './DailyForecast';
import './styles.css';

const App = () => {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [error, setError] = useState("");

  return (
    <ThemeProvider>
      <div className="min-h-screen flex items-center justify-center p-4 sm:p-6">
        <div className="w-full max-w-5xl p-6 sm:p-8 bg-card-bg backdrop-blur-lg rounded-2xl shadow-2xl animate-fadeIn">
          <ThemeSelector />
          <QuoteDisplay />
          <SearchBar setWeather={setWeather} setForecast={setForecast} setError={setError} />
          {error && <p className="text-error text-center animate-pulse text-sm sm:text-base">{error}</p>}
          <WeatherDisplay weather={weather} />
          <HourlyForecast forecast={forecast} />
          <DailyForecast forecast={forecast} />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;