import './SoftSkills.css'

function SoftSkills() {
    const softSkills = [
        {
            icon: "👥",
            title: "Travail en équipe",
            description:
                "Capacité à collaborer efficacement dans des projets scientifiques et techniques, notamment dans le développement de solutions mathématiques et informatiques."
        },
        {
            icon: "📊",
            title: "Communication scientifique",
            description:
                "Rédaction de rapports scientifiques et techniques avec LaTeX et présentation claire des résultats d’analyses et de modèles."
        }
    ]

    return (
        <section id="soft-skills" className="soft-skills">
            <div className="soft-skills-container">

                <h2 className="section-title">Compétences transversales</h2>

                <div className="soft-skills-grid">
                    {softSkills.map((skill, index) => (
                        <div key={index} className="soft-skill-card">

                            <span className="soft-icon">{skill.icon}</span>

                            <h3>{skill.title}</h3>

                            <p>{skill.description}</p>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default SoftSkills;