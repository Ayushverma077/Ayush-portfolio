
function Projects() {
  const projects = [
    {
      number: "01",

      title: "LeanAI",

      subtitle: "LLM Context & Token Optimization System",

      description:
        "An LLM context optimization system that analyzes software repositories and selects task-relevant code instead of sending entire codebases to language models. The system focuses on efficient context retrieval, token budgeting, and intelligent model routing.",

      features: [
        "Relevance-based file selection",
        "Token estimation & budgeting",
        "Git-aware repository signals",
        "Dynamic context selection",
        "Intelligent model routing",
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

      title: "Travillo AI",

      subtitle: "AI-Powered Travel Planning Platform",

      description:
        "An AI-powered travel planning web application that helps users explore destinations and generate personalized day-wise travel itineraries using Google's Gemini API. The platform creates travel plans based on user preferences including budget, trip duration, group size, and interests. Firebase Authentication and Cloud Firestore enable secure login and storage of saved trips and favorite destinations.",

      features: [
        "AI-generated day-wise travel itineraries",
        "Google Gemini API integration",
        "Personalized trip recommendations",
        "Budget and duration-based trip planning",
        "Firebase user authentication",
        "Saved trips using Cloud Firestore",
        "Favorite destinations management",
        "Destination search and exploration",
        "Responsive user interface",
      ],

      tech: [
        "React",
        "TypeScript",
        "Gemini API",
        "Firebase Authentication",
        "Cloud Firestore",
        "Google AI Studio",
      ],
    },
  ];

  return (
    <section id="projects" className="projects">

      <h2 className="section-title">
        Featured <span>Projects</span>
      </h2>

      <p className="section-description">
        Explore my projects in Artificial Intelligence,
        Software Development, and Intelligent Applications.
      </p>

      <div className="projects-container">

        {projects.map((project) => (

          <article
            className="project-card"
            key={project.number}
          >

            {/* PROJECT HEADER */}

            <div className="project-top">

              <span className="project-number">
                {project.number}
              </span>

              <span className="project-label">
                Featured Project
              </span>

            </div>

            {/* PROJECT TITLE */}

            <h3>
              {project.title}
            </h3>

            {/* PROJECT SUBTITLE */}

            <h4>
              {project.subtitle}
            </h4>

            {/* DESCRIPTION */}

            <p>
              {project.description}
            </p>

            {/* FEATURES */}

            <div className="project-features">

              {project.features.map((feature) => (

                <span key={feature}>
                  ✓ {feature}
                </span>

              ))}

            </div>

            {/* TECHNOLOGIES */}

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
