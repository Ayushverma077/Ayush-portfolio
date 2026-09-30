function Contact() {
  return (
    <section id="contact" className="contact">

      <h2 className="section-title">
        Contact <span>Me</span>
      </h2>

      <p className="contact-text">
        I'm interested in software development, AI/ML,
        Generative AI and software engineering opportunities.
        Feel free to connect with me.
      </p>

      <div className="contact-links">

        <a href="mailto:ayushverma6010@gmail.com">
          Email
        </a>

        <a
          href="https://github.com/Ayushverma077"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/ayush-verma-27382a277/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>

      </div>

      <div className="footer">

        <p>
          © 2026 Ayush Kumar Verma
        </p>

        <p>
          Built with React & Vite
        </p>

      </div>

    </section>
  );
}

export default Contact;