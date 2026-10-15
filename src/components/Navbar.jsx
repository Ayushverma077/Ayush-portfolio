
import { useEffect, useState } from "react";

const navigation = [
  { label: "Home", href: "#home", id: "home" },
  { label: "About", href: "#about", id: "about" },
  { label: "Stack", href: "#skills", id: "skills" },
  { label: "Projects", href: "#projects", id: "projects" },
  {
    label: "Repositories",
    href: "#repositories",
    id: "repositories",
  },
  { label: "Contact", href: "#contact", id: "contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const update = () => {
      setScrolled(window.scrollY > 20);

      let current = "home";

      navigation.forEach((item) => {
        const section = document.getElementById(item.id);

        if (
          section &&
          section.getBoundingClientRect().top <= 170
        ) {
          current = item.id;
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", update, {
      passive: true,
    });

    update();

    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <header className="site-header">
      <nav className={`navbar ${scrolled ? "is-scrolled" : ""}`}>
        <a
          href="#home"
          className="logo"
          onClick={() => setMenuOpen(false)}
          aria-label="Ayush portfolio home"
        >
          <span className="logo-symbol">{"</>"}</span>
          ayush<span className="logo-accent">.dev</span>
        </a>

        <div
          id="primary-navigation"
          className={`nav-links ${menuOpen ? "active" : ""}`}
        >
          {navigation.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={active === item.id ? "nav-active" : ""}
              onClick={() => {
                setActive(item.id);
                setMenuOpen(false);
              }}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="nav-actions">
          <a
            className="nav-resume"
            href={`${import.meta.env.BASE_URL}resume.pdf`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume <span aria-hidden="true">↗</span>
          </a>

          <button
            className={`menu-btn ${menuOpen ? "active" : ""}`}
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>
    </header>
  );
}
