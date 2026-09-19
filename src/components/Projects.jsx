function Projects() {
  const projects = [
    {
      title: "Travillo",
      description:
        "A travel-related application developed as my BCA final-year project.",
      technology: "Java, HTML, CSS, SQL",
      github: "#",
    },
    {
      title: "AI/ML Project",
      description:
        "A machine learning project focused on solving real-world problems.",
      technology: "Python, Machine Learning",
      github: "#",
    },
  ];

  return (
    <section id="projects" className="projects">

      <h2 className="section-title">
        My <span>Projects</span>
      </h2>

      <p className="section-description">
        Some projects I have worked on
      </p>

      <div className="projects-container">

        {projects.map((project, index) => (
          <div className="project-card" key={index}>

            <div className="project-number">
              0{index + 1}
            </div>

            <h3>{project.title}</h3>

            <p>
              {project.description}
            </p>

            <div className="project-tech">
              {project.technology}
            </div>

            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="project-btn"
            >
              View on GitHub →
            </a>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Projects;