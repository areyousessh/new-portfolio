import { useEffect, useState } from 'react';

export default function ThemeSwitcher() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem('theme');
    return storedTheme ? JSON.parse(storedTheme) : window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
    localStorage.setItem('theme', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  function toggleTheme() {
    setIsDarkMode(!isDarkMode);
  }

  return (
    <button
      className="fixed bottom-4 right-4 p-2 bg-gray-300 dark:bg-gray-700 rounded-full"
      onClick={toggleTheme}
    >
      {isDarkMode ? '🌞 Light' : '🌙 Dark'}
    </button>
  );
}
