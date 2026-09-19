function Contact() {
  return (
    <section id="contact" className="contact">

      <h2 className="section-title">
        Contact <span>Me</span>
      </h2>

      <p className="contact-text">
        I'm currently open to opportunities, collaborations and
        interesting software development projects.
      </p>

      <div className="contact-links">

        <a href="mailto:YOUR_EMAIL">
          Email Me
        </a>

        <a
          href="YOUR_GITHUB_URL"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>

        <a
          href="YOUR_LINKEDIN_URL"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>

      </div>

      <div className="footer">
        <p>
          © 2026 Ayush Kumar Verma
        </p>

        <p>
          Built with React
        </p>
      </div>

    </section>
  );
}

export default Contact;