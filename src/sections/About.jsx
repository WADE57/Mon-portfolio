import './About.css'

function About() {
  return (
    <section id="a-propos" className="about">
      <div className="about-container">
        <h2 className="section-title">À propos de moi</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Diplômé d’un Master en Calcul Scientifique et Mathématiques de l’Innovation
              (Université de Strasbourg), spécialisé en modélisation mathématique,
              simulation numérique et optimisation.
            </p>

            <p>
              Actuellement en Master Mathématiques et Applications – parcours Data Science
              & Données Bio & Numériques (Université d’Angers), je développe une expertise
              en statistique, machine learning, deep learning et data engineering.
            </p>

            <p>
              Mon profil combine une solide base mathématique avec des compétences
              opérationnelles en data : Python, R, SQL, C/C++, Julia, ainsi que les
              frameworks Scikit-learn, TensorFlow, PyTorch et les bases de données.
            </p>

            <p className="highlight-search">
              🔍 Je recherche une alternance en Data Science / Machine Learning
              à partir de septembre 2026, afin de contribuer à des projets à forte
              valeur ajoutée et orientés data.
            </p>

            <div className="about-stats">
              <div className="stat">
                <h3>+5</h3>
                <p>Années d'études supérieures</p>
              </div>
              <div className="stat">
                <h3>+5</h3>
                <p>Projets académiques & stages</p>
              </div>
              <div className="stat">
                <h3>+10</h3>
                <p>Outils & technologies maîtrisés</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
