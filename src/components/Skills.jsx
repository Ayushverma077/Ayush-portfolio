
import { motion, useReducedMotion } from "motion/react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: "⌘",
    description: "Languages I use to build applications",
    skills: [
      "Java",
      "Python",
      "JavaScript",
      "TypeScript",
      "C",
      "SQL",
      "Rust",
    ],
  },
  {
    title: "AI & Machine Learning",
    icon: "✦",
    description: "Intelligent systems and AI technologies",
    skills: [
      "Machine Learning",
      "Generative AI",
      "LLMs",
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
      "Pandas",
      "NumPy",
    ],
  },
  {
    title: "Frontend & Development",
    icon: "◈",
    description: "Modern application development",
    skills: [
      "React",
      "HTML5",
      "CSS3",
      "Vite",
      "Tauri",
      "Responsive Design",
    ],
  },
  {
    title: "Cloud & Tools",
    icon: "◇",
    description: "Platforms and development tools",
    skills: [
      "Firebase",
      "Cloud Firestore",
      "Gemini API",
      "Google AI Studio",
      "Git",
      "GitHub",
      "VS Code",
      "Jupyter Notebook",
    ],
  },
];

function Skills() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="skills" className="skills premium-skills">
      <div className="skills-heading">
        <span className="skills-eyebrow">
          MY EXPERTISE
        </span>

        <h2 className="section-title">
          Tech <span>Stack</span>
        </h2>

        <p className="section-description">
          Technologies and tools I use to build
          software and intelligent applications.
        </p>
      </div>

      <div className="skill-category-grid">
        {skillCategories.map((category, index) => (
          <motion.article
            key={category.title}
            className="skill-category-card"
            initial={
              reduceMotion
                ? false
                : { opacity: 0, y: 35 }
            }
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.65,
              delay: index * 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={
              reduceMotion ? undefined : { y: -6 }
            }
          >
            <div className="skill-category-header">
              <div className="skill-category-icon">
                {category.icon}
              </div>

              <div>
                <h3>{category.title}</h3>
                <p>{category.description}</p>
              </div>
            </div>

            <div className="skill-badges">
              {category.skills.map((skill) => (
                <span
                  className="skill-badge"
                  key={skill}
                >
                  <span className="skill-badge-dot" />
                  {skill}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Skills;
