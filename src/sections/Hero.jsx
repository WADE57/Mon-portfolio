import './Hero.css'
import profilPhoto from '../assets/WADE.png'

function Hero() {
  return (
    <section id="accueil" className="hero">
      <div className="hero-container">

        <div className="hero-content">

          <h1 className="hero-title">
            <span className="highlight">Abdou WADE</span>
          </h1>

          <p className="hero-subtitle">
            Mathématiques appliquées | Data Science | Scientific Machine Learning
          </p>

          <p className="hero-status">
            🎯 Recherche d'alternance en Data Science / Machine Learning
          </p>

          <div className="hero-buttons">

            <button
              className="btn btn-primary"
              onClick={() => document.getElementById('projets').scrollIntoView({ behavior: 'smooth' })}
            >
              Projets
            </button>

            <button
              className="btn btn-primary"
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              Contacter
            </button>

            <button
              className="btn btn-primary"
              onClick={() => document.getElementById('formation').scrollIntoView({ behavior: 'smooth' })}
            >
              Formations
            </button>

            <a
              href="Abdou_WADE.pdf"
              className="btn btn-secondary"
              target="_blank"
              rel="noreferrer"
            >
              📄 CV
            </a>


          </div>

        </div>

        <div className="hero-image">
          <img
            src={profilPhoto}
            alt="Abdou WADE - Photo de profil"
            className="profile-photo"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;