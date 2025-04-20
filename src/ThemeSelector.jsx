import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const ThemeSelector = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const themes = [
    { value: 'purple-nebula', label: 'Purple Nebula' },
    { value: 'dark-storm', label: 'Dark Storm' },
  ];

  return (
    <div className="flex justify-center mb-6">
      <select
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
        className="p-2 rounded-lg bg-input-bg text-input-text focus:outline-none shadow-neumorphic w-full max-w-xs sm:max-w-sm"
      >
        {themes.map((t) => (
          <option key={t.value} value={t.value} className="text-black">
            {t.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ThemeSelector;