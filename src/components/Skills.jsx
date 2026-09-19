function Skills() {

  const skills = [
    "Java",
    "Python",
    "SQL",
    "Data Structures & Algorithms",
    "Machine Learning",
    "Artificial Intelligence",
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Git",
    "GitHub"
  ];

  return (
    <section id="skills" className="skills">

      <h2 className="section-title">
        My <span>Skills</span>
      </h2>

      <p className="section-description">
        Technologies and tools I work with
      </p>

      <div className="skills-container">

        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            {skill}
          </div>
        ))}

      </div>

    </section>
  );
}

export default Skills;