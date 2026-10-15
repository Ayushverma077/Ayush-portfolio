
import { motion, useReducedMotion } from "motion/react";
import profileImg from "../assets/profile.jpg";

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/Ayushverma077",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/ayush-verma-27382a277/",
  },
  {
    name: "Email",
    url: "mailto:ayushverma6010@gmail.com",
  },
];

export default function Hero() {
  const reduceMotion = useReducedMotion();

  const entrance = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0 },
  };

  const resumeUrl = `${import.meta.env.BASE_URL}resume.pdf`;

  return (
    <section id="home" className="hero hero-v3">
      <div className="hero-ambient hero-ambient-one" />
      <div className="hero-ambient hero-ambient-two" />

      <div className="hero-layout">
        <motion.div
          className="hero-content"
          initial={reduceMotion ? false : "hidden"}
          animate="visible"
          transition={{ staggerChildren: 0.13 }}
        >
          <motion.div
            className="availability-pill"
            variants={entrance}
          >
            <span className="availability-dot" />
            Open to software engineering opportunities
          </motion.div>

          <motion.p
            className="hero-kicker"
            variants={entrance}
          >
            HELLO WORLD, I'M AYUSH
          </motion.p>

          <motion.h1 variants={entrance}>
            Building software.
            <span className="gradient-text">
              {" "}Engineering intelligence.
            </span>
          </motion.h1>

          <motion.p
            className="hero-role"
            variants={entrance}
          >
            Ayush Kumar Verma
            <span className="role-divider"> / </span>
            Java Developer & AI/ML Enthusiast
          </motion.p>

          <motion.p
            className="hero-description"
            variants={entrance}
          >
            MCA (AI & ML) student at UPES, passionate about
            software engineering and intelligent applications.
            Currently developing LeanAI and building AI-powered
            experiences like Travillo AI.
          </motion.p>

          <motion.div
            className="hero-buttons"
            variants={entrance}
          >
            <motion.a
              href="#projects"
              className="primary-btn"
              whileHover={reduceMotion ? undefined : { y: -3 }}
              whileTap={reduceMotion ? undefined : { scale: 0.97 }}
            >
              Explore My Work <span aria-hidden="true">↗</span>
            </motion.a>

            <motion.a
              href={resumeUrl}
              className="secondary-btn"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={reduceMotion ? undefined : { y: -3 }}
            >
              View Resume <span aria-hidden="true">↗</span>
            </motion.a>
          </motion.div>

          <motion.div
            className="social-links"
            variants={entrance}
          >
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target={
                  link.name === "Email" ? undefined : "_blank"
                }
                rel={
                  link.name === "Email"
                    ? undefined
                    : "noopener noreferrer"
                }
              >
                {link.name}
                <span aria-hidden="true">↗</span>
              </a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={
            reduceMotion
              ? false
              : { opacity: 0, x: 35, scale: 0.95 }
          }
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.9 }}
        >
          <div className="visual-orbit" />

          <div className="profile-frame">
            <img
              src={profileImg}
              alt="Ayush Kumar Verma"
              className="profile-img"
            />

            <div className="profile-overlay">
              <span className="profile-status-dot" />
              BUILDING WHAT'S NEXT
            </div>
          </div>

          <div className="floating-tag tag-ai">
            ✦ Generative AI
          </div>

          <div className="floating-tag tag-code">
            {"{ }"} Software Engineer
          </div>
        </motion.div>
      </div>

      <div className="hero-bottom">
        <span>SCROLL TO EXPLORE</span>
        <span aria-hidden="true">↓</span>
      </div>
    </section>
  );
}
