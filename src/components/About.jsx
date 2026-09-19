function About() {
  return (
    <section id="about" className="about">

      <h2 className="section-title">
        About <span>Me</span>
      </h2>

      <div className="about-container">

        <div className="about-image">
          <div className="image-placeholder">
            AV
          </div>
        </div>

        <div className="about-content">

          <h3>MCA Student & Developer</h3>

          <p>
            I'm Ayush Kumar Verma, currently pursuing my MCA with a
            specialization in Artificial Intelligence and Machine Learning.
          </p>

          <p>
            I enjoy solving problems using Java, Data Structures and
            Algorithms, and building applications using modern technologies.
            I'm also exploring Artificial Intelligence and Machine Learning
            to build intelligent software solutions.
          </p>

          <div className="about-info">

            <div>
              <strong>Degree</strong>
              <span>MCA - AI/ML</span>
            </div>

            <div>
              <strong>Focus</strong>
              <span>Software Development</span>
            </div>

            <div>
              <strong>Interests</strong>
              <span>Java, AI & ML</span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;