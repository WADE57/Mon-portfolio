import './Skills.css'

function Skills() {
  // Groupes de compétences issus du CV
  const skillGroups = [
    {
      title: 'Mathématiques et applications',
      icon: '∫',
      description: "Résolution d’EDP par méthodes numériques : différences finies, éléments finis et volumes finis. Optimisation, contrôle optimal et modélisation mathématique.",
      items: [
        "EDP",
        "Volumes finis",
        "Éléments finis",
        "Différences finies",
        "Optimisation",
        "Contrôle optimal"
      ],
    },
    {
      title: 'Data Science et Data Engineering',
      icon: '🤖',
      description: "Traitement et analyse de données à grande échelle, développement de pipelines d’ingestion, modélisation de données et machine learning. Expérience en NLP, recherche textuelle et mise en production de solutions data (Django, PostgreSQL).",
      items: [
        "Machine Learning",
        "NLP",
        "Data Engineering",
        "Pipelines de données",
        "Parsing & preprocessing",
        "Feature Engineering",
        "Clustering",
        "Réduction de dimension",
        "Validation de modèles",
        "SQL & modélisation de données",
        "Full-Text Search"
      ],
    },
    {
      title: 'Algorithmes et programmation',
      icon: '💻',
      description: "Développement d’algorithmes scientifiques et programmation pour la modélisation numérique, l’analyse de données et l’apprentissage automatique.",
      items: [
        "Python",
        "C/C++",
        "R",
        "SQL",
        "NumPy",
        "SciPy",
        "Pandas",
        "Scikit-Learn",
        "PyTorch",
        "TensorFlow",
        "Matplotlib",
        "Plotly"
      ],
    },
    {
      title: 'Gestion de versions',
      icon: '🔀',
      description: "Utilisation des systèmes de contrôle de version pour le suivi de code, la collaboration et la gestion de projets scientifiques.",
      items: [
        "Git",
        "GitHub",
        "GitLab",
        "Git workflows",
        "CI/CD (GitHub Actions)",
        "Version Control",
        "Collaboration",
        "Gestion de projets"
      ],
    },
    {
      title: 'Outils et technologies',
      icon: '🛠️',
      description: "Utilisation d’outils modernes pour le développement de projets data et logiciels : environnement Linux, conteneurisation, frameworks web et bases de données pour le déploiement de solutions data-driven.",
      items: [
        "Linux",
        "VS Code",
        "RStudio",
        "Docker",
        "Django",
        "PostgreSQL",
        "SQL",
        "LaTeX",
        "Beamer"
      ],
    },
    // {
    //   title: 'Divers',
    //   items: ['Travail en équipe', 'Communication scientifique'],
    // },
  ];

  return (
    <section id="competences" className="skills">
      <div className="skills-container">
        <h2 className="section-title">Mes Compétences</h2>
        {skillGroups.map((group, gi) => (
          <div key={gi} className="skills-block">
            <div className="skill-block-header">
              <span className="skill-block-icon">{group.icon}</span>
              <h3>{group.title}</h3>
            </div>
            <p className="skills-description">{group.description}</p>

              {group.items.length > 0 && (
                <div className="skills-tags">
                  {group.items.map((item, idx) => (
                    <span key={item} className="skill-tag">
                      {item}
                    </span>
                  ))}
                </div>
              )}
          </div>
        ))}
      </div>
      {/* <div className="additional-skills">
          { <h3>Compétences Complémentaires</h3>}
          <div className="skills-list">
            <div className="skill-card">
              <span className="skill-icon">💻</span>
              <h4>Système d'exploitation Linux</h4>
              <p>Maîtrise avancée de l'environnement Linux et des commandes shell</p>
            </div>
            <div className="skill-card">
              <span className="skill-icon">📄</span>
              <h4>Communication Scientifique</h4>
              <p>Rédaction de rapports techniques avec LaTeX et présentations Beamer</p>
            </div>
            <div className="skill-card">
              <span className="skill-icon">👥</span>
              <h4>Travail en Équipe</h4>
              <p>Capacité à collaborer efficacement dans des projets de recherche</p>
            </div>
          </div>
        </div> */}
    </section>
  );
}

export default Skills;
