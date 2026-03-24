import './Education.css'

function Education() {
  const education = [
    {
      degree: "Master Mathématiques et Applications – Parcours Data Science (Données Bio & Numériques)",
      school: "Université d’Angers, France",
      period: "Septembre 2025 - Aujourd'hui",
      description: "Formation en mathématiques appliquées, statistique et informatique, spécialisée en Data Science et Big Data. Compétences développées : modélisation statistique et optimisation, machine learning et deep learning, data engineering (Python, R, SQL) et technologies Big Data.",
      url: "https://formations.univ-angers.fr/fr/offre-de-formation/master-lmd-MLMD/sciences-technologies-sante-STS/master-mathematiques-et-applications-KV26XNFS/parcours-data-science-L09QAC4H.html?search-keywords=data+science",
      courses: [
        "Modélisation statistique(en grande dimension) et processus stochastiques",
        "Statistique inférentielle et Data mining & Classification",
        "Optimisation numérique et calcul matriciel",
        "Algorithmique et programmation orientée objet (Python)",
        "Bases de données relationnelles (SQL, ORM)",
        "Structuration des données (JSON, XML), Modèles de Régression et Séries temporelles",
        "Machine Learning (Scikit-learn, TensorFlow, PyTorch)",
        "Modélisation appliquée : données biologiques ou économiques"
      ]
    },

    {
      degree: "Master Mathématiques et Applications – Parcours Calcul Scientifique et Mathématiques de l’Innovation (CSMI)",
      school: "Université de Strasbourg, France",
      period: "2023 - 2025",
      description: "Formation avancée en modélisation mathématique, simulation numérique et calcul haute performance (HPC), avec une forte dimension en optimisation et apprentissage automatique scientifique.",
      url: "https://mathinfo.unistra.fr/formations/master/master-mathematiques-et-applications/odf-parcours-calcul-scientifique-et-mathematiques-de-linnovation-csmi-PR438-18099/",
      courses: [
        "Équations aux dérivées partielles (EDP)",
        "Méthodes numériques avancées (éléments finis, volumes finis, différences finies)",
        "Optimisation et contrôle optimal",
        "Calcul haute performance (MPI, OpenCL)",
        "Programmation scientifique (Python, C, C++, Julia, SQL)",
        "Apprentissage automatique scientifique",
        "Traitement et fouille de données scientifiques",
        "Modélisation et simulation numérique"
      ]
    },

    {
      degree: "Master Algèbre, Géométrie Algébrique et Applications",
      school: "Université Cheikh Anta Diop (UCAD), Dakar, Sénégal",
      period: "2019 - 2022",  // ⚠️ à adapter si nécessaire
      description: "Master recherche en algèbre, géométrie algébrique et théorie des nombres, avec applications en cryptographie et codes correcteurs d’erreurs. Mémoire de recherche encadré.",
      url: "https://www.lacgaa.com/",
      courses: [
        "Algèbre commutative et non commutative",
        "Théorie de Galois",
        "Théorie algébrique et analytique des nombres",
        "Géométrie algébrique (variétés affines et projectives)",
        "Courbes elliptiques et formes modulaires",
        "Codes correcteurs d'erreurs et cryptographie",
        "Cryptographie algébrique",
        "Calcul formel (Sage, Magma)",
        "Mémoire de recherche en algèbre, géométrie et applications"
      ]
    },
  ];

  return (
    <section id="formation" className="education">
      <div className="education-container">
        <h2 className="section-title">Formation</h2>
        <div className="education-timeline">
          {education.map((edu, index) => (
            <div key={index} className="education-item">
              <div className="education-date">
                <span>{edu.period}</span>
              </div>
              <div className="education-content">
                <h3>{edu.degree}</h3>
                <h4>{edu.school}</h4>
                <p className="education-description">{edu.description}</p>
                {edu.url && (
                  <a
                    href={edu.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="education-link"
                  >
                    Voir formation →
                  </a>
                )}
                <div className="education-courses">
                  <h5>Cours principaux :</h5>
                  <ul>
                    {edu.courses.map((course, courseIndex) => (
                      <li key={courseIndex}>{course}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
