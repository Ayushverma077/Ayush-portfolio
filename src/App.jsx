
import "./App.css";
import "./portfolio-v3.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import GitHubRepositories from "./components/GitHubRepositories";
import Contact from "./components/Contact";

import Reveal from "./components/Reveal";
import ScrollProgress from "./components/ScrollProgress";
import BackToTop from "./components/BackToTop";

function App() {
  return (
    <>
      <ScrollProgress />
      <Navbar />

      <main>
        <Hero />

        <Reveal>
          <About />
        </Reveal>

        <Reveal>
          <Skills />
        </Reveal>

        <Reveal>
          <Projects />
        </Reveal>

        <GitHubRepositories />

        <Reveal>
          <Contact />
        </Reveal>
      </main>

      <BackToTop />
    </>
  );
}

export default App;
