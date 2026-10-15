
import "./App.css";

// ==========================================
// MAIN PORTFOLIO COMPONENTS
// ==========================================

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import GitHubRepositories from "./components/GitHubRepositories";
import Contact from "./components/Contact";

// ==========================================
// ANIMATION & INTERACTIVE COMPONENTS
// ==========================================

import Reveal from "./components/Reveal";
import ScrollProgress from "./components/ScrollProgress";
import BackToTop from "./components/BackToTop";

// ==========================================
// MAIN APPLICATION
// ==========================================

function App() {
  return (
    <>
      {/* Animated Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Sticky Navigation */}
      <Navbar />

      {/* Main Portfolio */}
      <main>

        {/* Premium Hero Section */}
        <Hero />

        {/* About Me */}
        <Reveal>
          <About />
        </Reveal>

        {/* Premium Technology Stack */}
        <Reveal>
          <Skills />
        </Reveal>

        {/* Featured Projects - LeanAI & Travillo AI */}
        <Reveal>
          <Projects />
        </Reveal>

        {/* All Public GitHub Repositories */}
        <GitHubRepositories />

        {/* Contact & Social Links */}
        <Reveal>
          <Contact />
        </Reveal>

      </main>

      {/* Floating Back to Top Button */}
      <BackToTop />
    </>
  );
}

export default App;
