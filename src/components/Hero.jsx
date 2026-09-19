import { useEffect, useState } from "react";
import profileImg from "../assets/profile.jpg";

function Hero() {
  const roles = [
    "Java Developer",
    "AI/ML Enthusiast",
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
          // Typing
          setText(
            currentRole.substring(0, text.length + 1)
          );

          // Word complete hone ke baad delete start
          if (text === currentRole) {
            setDeleting(true);
          }
        } else {
          // Deleting
          setText(
            currentRole.substring(0, text.length - 1)
          );

          // Next role
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


  return (
    <section id="home" className="hero">

      {/* ================= LEFT SIDE ================= */}

      <div className="hero-content">

        <p className="intro hero-animation-1">
          Hello, I'm
        </p>


        <h1 className="hero-animation-2">
          Ayush Kumar Verma
        </h1>


        {/* TYPING ANIMATION */}

        <h2 className="hero-animation-3">

          I'm a{" "}

          <span className="typing-text">
            {text}
          </span>

          <span className="cursor">
            |
          </span>

        </h2>


        {/* DESCRIPTION */}

        <p className="hero-description hero-animation-4">

          MCA student specializing in Artificial Intelligence
          and Machine Learning. I enjoy building applications
          and solving real-world problems using technology.

        </p>


        {/* ================= BUTTONS ================= */}

        <div className="hero-buttons hero-animation-5">

          <a
            href="#projects"
            className="primary-btn"
          >
            View Projects
          </a>


          <a
            href="/resume.pdf"
            className="secondary-btn"
            download
          >

            <span>
              ↓
            </span>

            Download Resume

          </a>

        </div>


        {/* ================= SOCIAL LINKS ================= */}

        <div className="social-links hero-animation-5">

          <a
            href="YOUR_GITHUB_LINK"
            target="_blank"
            rel="noreferrer"
            className="social-icon"
          >
            GitHub
          </a>


          <a
            href="YOUR_LINKEDIN_LINK"
            target="_blank"
            rel="noreferrer"
            className="social-icon"
          >
            LinkedIn
          </a>

        </div>

      </div>


      {/* ================= RIGHT SIDE ================= */}

      <div className="hero-image-container">

        {/* GREEN GLOW */}

        <div className="hero-glow"></div>


        {/* PROFILE PHOTO */}

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