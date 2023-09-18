import { useEffect, useState } from 'react';

export default function ThemeSwitcher() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Verifica se há uma preferência de tema no localStorage
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setIsDarkMode(storedTheme === 'dark');
    } else {
      // Se não houver preferência no localStorage, verifica a preferência do sistema
      setIsDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
  }, []);

  useEffect(() => {
    // Atualiza a classe no elemento raiz do HTML e armazena a preferência no localStorage
    document.documentElement.classList.toggle('dark', isDarkMode);
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
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
