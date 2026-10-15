
import { useEffect, useState } from "react";
import {
  motion,
  useReducedMotion,
} from "motion/react";

import profileImg from "../assets/profile.jpg";

const roles = [
  "Java Developer",
  "AI/ML Enthusiast",
  "Generative AI Developer",
  "Problem Solver",
];

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

function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;

    const currentRole = roles[roleIndex];

    const timeout = setTimeout(() => {
      if (!deleting) {
        if (text.length < currentRole.length) {
          setText(currentRole.slice(0, text.length + 1));
        } else {
          setDeleting(true);
        }
      } else {
        if (text.length > 0) {
          setText(currentRole.slice(0, text.length - 1));
        } else {
          setDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, deleting ? 55 : text === currentRole ? 1400 : 90);

    return () => clearTimeout(timeout);
  }, [text, deleting, roleIndex, reduceMotion]);

  const resumeUrl = `${import.meta.env.BASE_URL}resume.pdf`;

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="home" className="hero premium-hero">
      <motion.div
        className="hero-content"
        initial={reduceMotion ? false : "hidden"}
        animate="visible"
        transition={{ staggerChildren: 0.12 }}
      >
        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="intro"
        >
          Hello, I'm
        </motion.p>

        <motion.h1
          variants={fadeUp}
          transition={{ duration: 0.7 }}
        >
          Ayush Kumar Verma
        </motion.h1>

        <motion.h2
          variants={fadeUp}
          transition={{ duration: 0.7 }}
          className="premium-role"
        >
          I'm a{" "}
          <span className="typing-text">
            {reduceMotion ? roles[0] : text}
          </span>
          {!reduceMotion && (
            <span className="cursor">|</span>
          )}
        </motion.h2>

        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.7 }}
          className="hero-description"
        >
          MCA (AI & ML) student passionate about software
          development, Generative AI and building intelligent
          applications. Currently developing LeanAI, an LLM
          context and token optimization system.
        </motion.p>

        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.7 }}
          className="hero-buttons"
        >
          <motion.a
            href="#projects"
            className="primary-btn premium-cta"
            whileHover={reduceMotion ? undefined : { y: -3, scale: 1.03 }}
            whileTap={reduceMotion ? undefined : { scale: 0.97 }}
          >
            Explore Projects
            <span aria-hidden="true">↗</span>
          </motion.a>

          <motion.a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="secondary-btn premium-cta"
            whileHover={reduceMotion ? undefined : { y: -3 }}
            whileTap={reduceMotion ? undefined : { scale: 0.97 }}
          >
            View Resume
            <span aria-hidden="true">↗</span>
          </motion.a>
        </motion.div>

        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.7 }}
          className="social-links premium-socials"
        >
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target={link.name === "Email" ? undefined : "_blank"}
              rel={link.name === "Email" ? undefined : "noopener noreferrer"}
              className="social-icon premium-social-link"
            >
              {link.name}
              <span aria-hidden="true">↗</span>
            </a>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        className="hero-image-container"
        initial={reduceMotion ? false : { opacity: 0, scale: 0.88 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="hero-glow" />

        <motion.div
          className="hero-profile premium-profile"
          animate={
            reduceMotion
              ? undefined
              : { y: [0, -10, 0] }
          }
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <img
            src={profileImg}
            alt="Ayush Kumar Verma"
            className="profile-img"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
