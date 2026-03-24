import { useState } from 'react'
import './LanguageToggle.css'

function LanguageToggle() {
  const [language, setLanguage] = useState('FR')

  const toggleLanguage = () => {
    const newLang = language === 'FR' ? 'EN' : 'FR'
    setLanguage(newLang)
    
    // Ici vous pouvez ajouter la logique de traduction
    // Pour l'instant, on change juste l'icône
    console.log(`Langue changée vers: ${newLang}`)
    
    // TODO: Implémenter la traduction réelle
    if (newLang === 'EN') {
      alert('English translation will be implemented soon!')
    } else {
      alert('Retour en français')
    }
  }

  return (
    <button 
      className="language-toggle" 
      onClick={toggleLanguage}
      aria-label={`Changer vers ${language === 'FR' ? 'English' : 'Français'}`}
    >
      <span className="flag">{language === 'FR' ? '🇬🇧' : '🇫🇷'}</span>
      <span className="lang-text">{language === 'FR' ? 'EN' : 'FR'}</span>
    </button>
  )
}

export default LanguageToggle
