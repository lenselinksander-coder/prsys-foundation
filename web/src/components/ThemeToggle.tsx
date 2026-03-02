import React from 'react';
import { useTheme } from '../context/ThemeContext';

export const ThemeToggle: React.FC = () => {
  const { theme, toggle } = useTheme();

  const label = theme === 'daylight' ? '☀ Daylight' : '🌙 Nocturne';
  const title = theme === 'daylight' ? 'Schakel naar Nocturne (donkere modus)' : 'Schakel naar Daylight';

  return (
    <button
      className="theme-toggle"
      onClick={toggle}
      aria-label={`Thema: ${label}. Klik om te wisselen.`}
      title={title}
    >
      {label}
    </button>
  );
};
