import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Abdou WADE</h3>
            <p>Mathématiques et applications | Data Science & Données Bio & Numériques</p>
          </div>
          <div className="footer-section">
            <h4>Liens rapides</h4>
            <ul>
              <li><a href="#accueil">Accueil</a></li>
              <li><a href="#a-propos">À propos</a></li>
              <li><a href="#projets">Projets</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Réseaux sociaux</h4>
            <div className="social-links">
              <a href="https://linkedin.com/in/abdou-wade-81694a28b" aria-label="LinkedIn">💼</a>
              <a href="https://github.com/WADE57" aria-label="GitHub">💻</a>
              <a href="mailto:abdouwade1996@gmail.com" aria-label="Email">✉️</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Abdou Wade. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
