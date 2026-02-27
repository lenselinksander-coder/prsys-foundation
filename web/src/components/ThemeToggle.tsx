import React, { useEffect, useState } from 'react';

type Theme = 'nocturne' | 'daylight';

function getInitialTheme(): Theme {
  const stored = localStorage.getItem('prsys-theme') as Theme | null;
  if (stored === 'daylight' || stored === 'nocturne') return stored;
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'daylight' : 'nocturne';
}

export const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute(
      'data-theme',
      theme === 'daylight' ? 'light' : 'dark'
    );
    localStorage.setItem('prsys-theme', theme);
  }, [theme]);

  const toggle = () => setTheme(t => t === 'nocturne' ? 'daylight' : 'nocturne');

  return (
    <button
      className="theme-toggle"
      onClick={toggle}
      title={theme === 'nocturne' ? 'Schakel naar Daylight' : 'Schakel naar Nocturne'}
      aria-label="Thema wisselen"
    >
      {theme === 'nocturne' ? '◑' : '◐'}
      <span className="theme-toggle-label">
        {theme === 'nocturne' ? 'Daylight' : 'Nocturne'}
      </span>
    </button>
  );
};
