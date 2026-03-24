import './Projects.css'

function Projects() {

  const projects = [
    {
      title: "Projet M1 Data Science : Enron Discovery – Plateforme d’analyse textuelle à grande échelle",
      category: "engineering",
      description:
        "Développement d’une plateforme d’e-Discovery pour l’analyse d’un corpus réel de 517 401 emails (Enron). Conception d’un pipeline d’ingestion idempotent (parsing .eml, extraction de métadonnées, nettoyage NLP), modélisation relationnelle normalisée sous PostgreSQL, et implémentation d’une recherche plein texte optimisée (FTS + index GIN). Application web Django avec dashboard, recherche avancée, exploration des threads et graphe d’influence. Validation par tests Django automatisés (8/8).",
      technologies: [
        "Python",
        "Django",
        "PostgreSQL",
        "SQL",
        "Full-Text Search (GIN)",
        "NLP preprocessing",
        "Data Engineering",
        "Docker",
        "Git",
        "GitHub Actions"
      ],
      image: "📧⭐",
      github: "https://github.com/WADE57/enron_discovery",
      demo: null
    },
    {
      title: "Projet M2 CSMI : Symbolic Regression for 1D Advection-Diffusion PDE",
      category: "engineering",
      description: "Développement d’un pipeline complet de Scientific Machine Learning combinant simulation numérique d’EDP et apprentissage profond. Résolution numérique de l’équation d’advection-diffusion 1D (schéma upwind + différences centrées), génération de jeux de données paramétriques, apprentissage d’un autoencodeur convolutionnel 1D (ConvAE) pour réduction de dimension, puis régression symbolique de type SINDy afin d’extraire des expressions mathématiques interprétables reconstruisant les solutions. Projet intégrant modélisation, analyse numérique, deep learning et découverte de lois physiques.",
      technologies: [
        "Python",
        "PyTorch",
        "Équations aux dérivées partielles (EDP)",
        "Méthodes numériques (Upwind, Différences finies)",
        "Convolutional Autoencoder",
        "Symbolic Regression (SINDy)",
        "Scientific Machine Learning",
        "Docker"
      ],
      image: "📊",
      github: "https://github.com/master-csmi/2024-m2-project-symbolic-regression",
      demo: "#"
    },
    {
      title: "Stage M2 CSMI : Problème inverse en tomographie optique par Filtre de Kalman Étendu (EKF)",
      category: "engineering",
      // description: "Développement d’une méthode d’estimation bayésienne des paramètres optiques (μa, μs, g) dans un milieu diffusant à partir de mesures lumineuses bruitées. Modélisation de la propagation par l’équation de transfert radiatif (ETR) discrétisée via la méthode des ordonnées discrètes (DOM) et schéma upwind. Implémentation complète d’un filtre de Kalman étendu (EKF) avec autodifférentiation PyTorch pour le calcul exact des jacobiens. Analyse approfondie de convergence, étude de l’observabilité des paramètres, calibrage des matrices de covariance (P0, Q, R) et quantification des incertitudes via la matrice de covariance d’erreur.",
      description: "Implémentation d’un solveur inverse basé sur un Filtre de Kalman Étendu pour l’estimation des paramètres optiques dans un modèle de transfert radiatif. Discrétisation par méthode DOM + schéma upwind, calcul automatique des jacobiens via autodifférentiation PyTorch, analyse d’observabilité, étude de robustesse aux bruits et quantification d’incertitude via la matrice de covariance.",
      technologies: [
        "Python",
        "PyTorch",
        "Autodifférentiation",
        "Filtre de Kalman étendu (EKF)",
        "Problèmes inverses",
        "Équation de transfert radiatif",
        "Méthodes des ordonnées discrètes (DOM)",
        "Assimilation de données",
        "Analyse de convergence",
        "GPU Computing"
      ],
      image: "🔬",
      github: "https://github.com/master-csmi/csmi-stages-2025/blob/main/modules/m2/attachments/Wade-Abdou.pdf",
      demo: "#"
    },
    {
      title: "Projet M1 CSMI : Résolution des équations d’Euler par méthode des volumes finis (Julia)",
      category: "engineering",
      // description: "Étude théorique et implémentation numérique des équations d’Euler (fluides compressibles) en 1D et 2D via la méthode des volumes finis. Développement de schémas d’ordre 1 et 2 (SSP-RK2), implémentation des flux numériques Rusanov, HLL et HLLC, analyse de stabilité, tests de Riemann (Sod, Einfeldt), étude de convergence et benchmarking des performances. Projet réalisé sous encadrement Inria (équipe TONUS, Strasbourg).",
      description: "Implémentation complète en Julia d’un solveur des équations d’Euler compressibles basé sur la méthode des volumes finis. Développement de schémas numériques d’ordre 1 et 2, implémentation de solveurs de Riemann (Rusanov, HLL, HLLC), validation sur tests standards (Sod, Einfeldt), étude de convergence et analyse des performances en 1D et 2D.",
      technologies: [
        "Julia",
        "Volumes finis",
        "EDP hyperboliques",
        "Riemann solvers (HLL, HLLC, Rusanov)",
        "Méthodes numériques",
        "Analyse de convergence",
        // "Benchmarking",
        "Simulation scientifique"
      ],
      image: "🌊",
      github: "https://github.com/master-csmi/2023-m1-inria-euler",
      demo: "#"
    },
    {
      title: "Stage M1 CSMI : Boustrophedon Decomposition pour le Path Planning Robotique",
      category: "engineering",
      // description: "Implémentation en Python de l’algorithme de Boustrophedon Cellular Decomposition (BCD) pour la planification complète de trajectoire d’un robot mobile en environnement 2D avec obstacles. Détection d’obstacles par ray tracing (PyVista), construction du graphe de cellules avec NetworkX, génération automatique des trajectoires via DFS et export en fichiers CSV. Visualisation des trajectoires et simulation en environnement fluide (Feel++ / Paraview).",
      description: "Développement d’un algorithme avancé de coverage path planning basé sur la décomposition cellulaire de Boustrophedon. Détection automatique des changements de connectivité par ray tracing, modélisation du problème sous forme de graphe et génération de trajectoires optimisées via parcours en profondeur (DFS). Simulation et validation numérique en environnement fluide.",
      technologies: [
        "Python",
        "Algorithmique",
        "Graphes (NetworkX)",
        "Ray Tracing (PyVista)",
        "Path Planning",
        "EDP",
        "Simulation numérique",
        "CSV Data Processing"
      ],
      image: "🤖",
      github: "https://github.com/feelpp/swimmer/tree/develop/docs/swimmer/modules/ROOT/pages/StageAbdou",
      demo: "#"
    },

    {
      title: "Projet M1 Data Science POO : Implémentation du jeu Deep Sea Adventure en Python",
      category: "engineering",
      description: "Conception et développement orienté objet du jeu de société Deep Sea Adventure. Implémentation d’un moteur de jeu complet (gestion des règles, tours, ressources, scoring), architecture modulaire avec séparation des classes (joueurs, plateau, moteur, IA), affichage ASCII et développement d’une IA pour jouer contre l’utilisateur. Projet axé sur la qualité logicielle, la testabilité et l’extensibilité.",
      technologies: ["Python", "Programmation Orientée Objet", "Architecture logicielle", "Algorithmes", "IA basique"],
      image: "🤿",
      github: "https://github.com/Taipan11/deepsea_game", 
      demo: "#"
    },

    {
      title: "Projet académique: SIMULATION NUMÉRIQUE D’UN DISPOSITIF DE REFROIDISSEMENT DE MICROPROCESSEUR EN C++",
      category: "engineering",
      description: "Étude d'un modèle de comportement thermique d'un microprocesseur et simulation numérique en C++. Optimisation des performances des simulations en ajustant les paramètres de maillage et les algorithmes de résolution. Visualisation 2D/3D avec Paraview et gestion efficace des fichiers de sortie (VTK, CSV).",
      technologies: ["C++", "Simulation thermique", "Optimisation numérique", "Paraview", "Visualisation"],
      image: "🔥",
      github: "https://github.com/master-csmi/2023-m1-refroidissement-microprocesseur",
      demo: "#"
    },
    {
      title: "Mémoire de Master : Algèbres absolument valuées de dimension finie",
      category: "research",
      description: "Travail de recherche consacré à l’étude structurelle des algèbres réelles absolument valuées. Analyse des isotopes standards et principales des algèbres classiques (ℂ, ℍ, 𝕆), étude des pseudo-octonions d’Okubo, classification des algèbres de dimension finie (théorèmes d’Albert, Urbanik–Wright, Ramirez, Calderón–Kaidi–Martín–Morales–Ramírez–Rochdi). Détermination des structures unitaires, des automorphismes de ℍ, des propriétés d’involution, de flexibilité, et étude du procédé de duplication de Cayley–Dickson. Le mémoire met en évidence les dimensions possibles (1, 2, 4, 8) et discute les problèmes ouverts sur la classification des algèbres de degré 4 et 8.",
      technologies: [
        "Algèbre non associative",
        "Algèbres absolument valuées",
        "Isotopies d'algèbres",
        "Procédé de Cayley-Dickson",
        "Algèbres de division",
        "Automorphismes de ℍ",
        "Pseudo-octonions d’Okubo",
        "Théorie des involutions",
        "LaTeX"
      ],
      image: "📚",
      github: "#",
      demo: "#"
    }
  ];

  const engineeringProjects = projects.filter(
    project => project.category === "engineering"
  );

  const researchProjects = projects.filter(
    project => project.category === "research"
  );

  return (
    <section id="projets" className="projects">
      <div className="projects-container">

        {/* ================= INGÉNIERIE ================= */}
        <h2 className="section-title">
          Projets scientifiques & ingénierie
        </h2>

        <p className="projects-intro">
          Projets orientés <strong>Data Science</strong> et <strong>Data Engineering</strong> :
          ingestion et traitement de données massives, <strong>Machine Learning</strong>,
          <strong>NLP</strong> et développement de solutions data-driven.
        </p>

        <div className="projects-grid">
          {engineeringProjects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <span className="project-icon">{project.image}</span>
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="project-technologies">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>

                {project.github && (
                  <div className="project-links">
                    <a href={project.github} className="project-link" target="_blank" rel="noreferrer">
                      Voir en détails
                    </a>
                    {project.demo && project.demo !== "#" && (
                      <a href={project.demo} className="project-link demo" target="_blank" rel="noreferrer">
                        Démo
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* ================= RECHERCHE ================= */}

        <h2 className="section-title research-title">
          Recherche mathématique
        </h2>

        <div className="projects-grid">
          {researchProjects.map((project, index) => (
            <div key={index} className="project-card research-card">
              <div className="project-image">
                <span className="project-icon">{project.image}</span>
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="project-technologies">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>

                {project.github && (
                  <div className="project-links">
                    <a href={project.github} className="project-link" target="_blank" rel="noreferrer">
                      Voir en détails
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;