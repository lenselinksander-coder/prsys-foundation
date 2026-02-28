import React from 'react';
import { useTheme } from '../context/ThemeContext';

export const ThemeToggle: React.FC = () => {
  const { theme, toggle } = useTheme();

  return (
    <button
      className="theme-toggle"
      onClick={toggle}
      aria-label="Thema wisselen"
      title={theme === 'nocturne' ? 'Schakel naar Daylight' : 'Schakel naar Nocturne'}
    >
      <span className={`theme-toggle-word ${theme === 'daylight' ? 'is-active' : ''}`}>
        DAYLIGHT
      </span>
      <span className="theme-toggle-sep">·</span>
      <span className={`theme-toggle-word ${theme === 'nocturne' ? 'is-active' : ''}`}>
        NOCTURNE
      </span>
    </button>
  );
};
