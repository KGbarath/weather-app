import React, { useState, useEffect } from 'react';

const QuoteDisplay = () => {
  const quotes = [
    "Ride the storm, chase the rainbow!",
    "Every cloud hides a silver lining.",
    "Weather changes, dreams don't.",
    "Let the winds guide your path.",
    "Sunshine follows the rain."
  ];
  const [quote, setQuote] = useState("");

  useEffect(() => {
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  }, []);

  return (
    <div className="text-center mb-6 sm:mb-8">
      <p className="text-base sm:text-xl italic text-quote animate-fadeIn">
        "{quote}"
      </p>
    </div>
  );
};

export default QuoteDisplay;