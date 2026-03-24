import { useState, useEffect } from 'react'
import './ThemeToggle.css'

function ThemeToggle() {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    // Récupérer le thème sauvegardé ou utiliser le défaut
    const savedTheme = localStorage.getItem('theme') || 'light'
    setTheme(savedTheme)
    document.documentElement.setAttribute('data-theme', savedTheme)
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
  }

  return (
    <button 
      className="theme-toggle" 
      onClick={toggleTheme}
      aria-label={`Changer vers le thème ${theme === 'light' ? 'sombre' : 'clair'}`}
      title={`Thème ${theme === 'light' ? 'sombre' : 'clair'}`}
    >
      <span className="theme-icon">{theme === 'light' ? '🌙' : '☀️'}</span>
    </button>
  )
}

export default ThemeToggle
