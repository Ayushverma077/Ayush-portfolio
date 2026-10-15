
import { motion, useReducedMotion } from "motion/react";

const projects = [
  {
    number: "01",
    title: "LeanAI",
    subtitle: "LLM Context & Token Optimization System",
    status: "In Development",

    description:
      "An intelligent developer tool designed to optimize repository context for LLMs through relevance-based file selection, token budgeting, Git-aware analysis, and model routing.",

    features: [
      "Relevance-based context selection",
      "Token estimation and budgeting",
      "Git-aware repository analysis",
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

    github: "",
    demo: "",
  },
  {
    number: "02",
    title: "Travillo AI",
    subtitle: "AI-Powered Travel Planning Platform",
    status: "Project",

    description:
      "An AI-powered travel planning platform that generates personalized day-wise itineraries using the Gemini API. Built with React and TypeScript, Firebase Authentication, and Cloud Firestore for saved trips and favorite destinations.",

    features: [
      "AI-generated travel itineraries",
      "Gemini API integration",
      "Budget and interest-based planning",
      "Firebase Authentication",
      "Saved trips and favorites",
    ],

    tech: [
      "React",
      "TypeScript",
      "Gemini API",
      "Firebase",
      "Cloud Firestore",
    ],

    github: "",
    demo: "https://travillo-ai-6zd7-xi.vercel.app/",
  },
];

function Projects() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="projects" className="projects">
      <h2 className="section-title">
        Featured <span>Projects</span>
      </h2>

      <p className="section-description">
        Building intelligent applications and practical
        software engineering solutions.
      </p>

      <div className="projects-container">
        {projects.map((project, index) => (
          <motion.article
            key={project.number}
            className="project-card premium-project-card"
            initial={
              reduceMotion
                ? false
                : { opacity: 0, y: 45 }
            }
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.65,
              delay: index * 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={
              reduceMotion
                ? undefined
                : { y: -7 }
            }
          >
            <div className="project-top">
              <span className="project-number">
                {project.number}
              </span>

              <span className="project-label">
                {project.status}
              </span>
            </div>

            <h3>{project.title}</h3>
            <h4>{project.subtitle}</h4>

            <p>{project.description}</p>

            <div className="project-features">
              {project.features.map((feature) => (
                <span key={feature}>
                  <span className="feature-check">✓</span>
                  {" "}{feature}
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

            <div className="project-actions">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-btn animated-link"
                >
                  GitHub <span aria-hidden="true">↗</span>
                </a>
              )}

              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-btn animated-link"
                >
                  Live Demo <span aria-hidden="true">↗</span>
                </a>
              )}

              {!project.github && !project.demo && (
                <span className="project-unavailable">
                  Public links coming soon
                </span>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
