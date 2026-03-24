import './Contact.css'

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();

    // Solution temporaire simple avec mailto
    const formData = new FormData(e.target);
    const nom = formData.get('nom');
    const email = formData.get('email');
    const sujet = formData.get('sujet');
    const message = formData.get('message');

    const mailtoLink = `mailto:abdouwade1996@gmail.com?subject=${encodeURIComponent(sujet)}&body=${encodeURIComponent(
      `Nom: ${nom}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;

    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2 className="section-title">Contactez-moi</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Discutons de votre projet</h3>
            <p>
              Passionné par les mathématiques et la data science, je suis actuellement à la recherche d’une alternance en Master 2 Data Science & Données Bio et Numériques afin d’approfondir mes compétences et d’élargir mes perspectives professionnelles.
              Curieux, rigoureux et motivé par les défis analytiques, je reste ouvert à toute opportunité de collaboration. N’hésitez pas à me contacter pour échanger autour de vos projets, poser des questions ou partager des idées. Je serai ravi de contribuer à la concrétisation de vos ambitions et de relever de nouveaux défis à vos côtés.

            </p>
            <div className="contact-items">
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <div>
                  <h4>Email</h4>
                  <p>
                    <a
                      href="mailto:abdouwade1996@gmail.com"
                      className="contact-link"
                    >
                      abdouwade1996@gmail.com
                    </a>
                  </p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📱</span>
                <div>
                  <h4>Téléphone</h4>
                  <p>
                    <a
                      href="tel:+33753920084"
                      className="contact-link"
                    >
                      07 53 92 00 84
                    </a>
                  </p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <div>
                  <h4>Localisation</h4>
                  <p>25 Rue Lamarck, 49000 Angers, France</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">💼</span>
                <div>
                  <h4>LinkedIn</h4>
                  <p>
                    <a
                      href="https://www.linkedin.com/in/abdou-wade-81694a28b"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-link"
                    >
                      @Abdou-Wade
                    </a>
                  </p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">💻</span>
                <div>
                  <h4>GitHub</h4>
                  <p>
                    <a
                      href="https://github.com/WADE57"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-link"
                    >
                      @WADE
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input type="text" name="nom" placeholder="Votre nom" required />
            </div>
            <div className="form-group">
              <input type="email" name="email" placeholder="Votre email" required />
            </div>
            <div className="form-group">
              <input type="text" name="sujet" placeholder="Sujet" required />
            </div>
            <div className="form-group">
              <textarea name="message" placeholder="Votre message" rows="6" required></textarea>
            </div>
            <button type="submit" className="submit-btn">
              Envoyer le message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
