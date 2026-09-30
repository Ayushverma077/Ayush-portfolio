function Projects() {
  const projects = [
    {
      number: "01",

      title: "LeanAI",

      subtitle:
        "LLM Context & Token Optimization System",

      description:
        "An LLM context optimization system that analyzes software repositories and selects task-relevant code instead of sending entire codebases to language models.",

      features: [
        "Relevance-based file selection",
        "Token estimation & budgeting",
        "Git-aware repository signals",
        "Dynamic context selection",
        "Model routing",
        "Agentic AI workflows",
      ],

      tech: [
        "Rust",
        "React",
        "TypeScript",
        "Tauri",
        "LLMs",
        "Agentic AI",
      ],
    },

    {
      number: "02",

      title: "Travillo",

      subtitle:
        "Travel Assistance Platform",

      description:
        "A travel planning platform designed to provide personalized trip-planning functionality, location-based exploration and community-driven travel experiences.",

      features: [
        "Travel planning",
        "Interactive destination exploration",
        "Mapbox API integration",
        "Route planning",
        "Community discussions",
        "Responsive interface",
      ],

      tech: [
        "HTML",
        "CSS",
        "JavaScript",
        "Mapbox API",
      ],
    },
  ];

  return (
    <section
      id="projects"
      className="projects"
    >

      <h2 className="section-title">
        Featured <span>Projects</span>
      </h2>

      <p className="section-description">
        Projects where I apply software engineering,
        AI and problem-solving skills.
      </p>


      <div className="projects-container">

        {projects.map((project) => (

          <article
            className="project-card"
            key={project.number}
          >

            <div className="project-top">

              <span className="project-number">
                {project.number}
              </span>

              <span className="project-label">
                Featured Project
              </span>

            </div>


            <h3>
              {project.title}
            </h3>

            <h4>
              {project.subtitle}
            </h4>

            <p>
              {project.description}
            </p>


            <div className="project-features">

              {project.features.map((feature) => (

                <span key={feature}>
                  ✓ {feature}
                </span>

              ))}

            </div>


            <div className="project-tech">

              {project.tech.map((technology) => (

                <span key={technology}>
                  {technology}
                </span>

              ))}

            </div>

          </article>

        ))}

      </div>

    </section>
  );
}

export default Projects;