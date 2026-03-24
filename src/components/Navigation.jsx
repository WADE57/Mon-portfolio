import './Navigation.css'
import LanguageToggle from './LanguageToggle'
import ThemeToggle from './ThemeToggle'

function Navigation() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-logo">
          <h2>Abdou WADE</h2>
        </div>
        <ul className="nav-menu">
          <li><button onClick={() => scrollToSection('accueil')}>Accueil</button></li>
          <li><button onClick={() => scrollToSection('a-propos')}>À propos</button></li>
          <li><button onClick={() => scrollToSection('formation')}>Formation</button></li>
          <li><button onClick={() => scrollToSection('competences')}>Compétences</button></li>
          <li><button onClick={() => scrollToSection('langues')}>Langues</button></li>
          <li><button onClick={() => scrollToSection('projets')}>Projets</button></li>
          <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>
        </ul>
        <div className="nav-toggles">
          <ThemeToggle />
          <LanguageToggle />
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
