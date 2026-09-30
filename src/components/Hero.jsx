import { useEffect, useState } from "react";
import profileImg from "../assets/profile.jpg";

function Hero() {
  const roles = [
    "Java Developer",
    "AI/ML Enthusiast",
    "Generative AI Enthusiast",
    "Problem Solver",
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    const timeout = setTimeout(
      () => {
        if (!deleting) {
          setText(currentRole.substring(0, text.length + 1));

          if (text === currentRole) {
            setDeleting(true);
          }
        } else {
          setText(currentRole.substring(0, text.length - 1));

          if (text === "") {
            setDeleting(false);

            setRoleIndex(
              (previousIndex) =>
                (previousIndex + 1) % roles.length
            );
          }
        }
      },
      deleting
        ? 60
        : text === currentRole
        ? 1200
        : 100
    );

    return () => clearTimeout(timeout);
  }, [text, deleting, roleIndex]);

  const resumeUrl = `${import.meta.env.BASE_URL}resume.pdf`;

  return (
    <section id="home" className="hero">

      <div className="hero-content">

        <p className="intro hero-animation-1">
          Hello, I'm
        </p>

        <h1 className="hero-animation-2">
          Ayush Kumar Verma
        </h1>

        <h2 className="hero-animation-3">
          I'm a{" "}

          <span className="typing-text">
            {text}
          </span>

          <span className="cursor">|</span>
        </h2>

        <p className="hero-description hero-animation-4">
          MCA (AI & ML) student with a strong foundation in
          software development, machine learning and Generative AI.
          Currently building LeanAI, an LLM context and token
          optimization system.
        </p>

        <div className="hero-buttons hero-animation-5">

          <a
            href="#projects"
            className="primary-btn"
          >
            View Projects
          </a>

          <a
            href={resumeUrl}
            className="secondary-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>↓</span>
            View Resume
          </a>

        </div>

        <div className="social-links hero-animation-5">

          <a
            href="https://github.com/Ayushverma077"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/ayush-verma-27382a277/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            LinkedIn
          </a>

          <a
            href="mailto:ayushverma6010@gmail.com"
            className="social-icon"
          >
            Email
          </a>

        </div>

      </div>


      <div className="hero-image-container">

        <div className="hero-glow"></div>

        <div className="hero-profile">

          <img
            src={profileImg}
            alt="Ayush Kumar Verma"
            className="profile-img"
          />

        </div>

      </div>

    </section>
  );
}

export default Hero;