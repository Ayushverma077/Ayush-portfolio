
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import SpotlightCard from "./SpotlightCard";

const USERNAME = "Ayushverma077";

// Repositories to exclude
const EXCLUDED_REPOSITORIES = [
  "java-programming",
  "javaprogramming",
];

function GitHubRepositories() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const controller = new AbortController();

    async function fetchRepositories() {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          `https://api.github.com/users/${USERNAME}/repos?per_page=100&sort=updated`,
          { signal: controller.signal }
        );

        if (!response.ok) {
          throw new Error(
            `GitHub API error: ${response.status}`
          );
        }

        const data = await response.json();

        const filteredRepos = data.filter((repo) => {
          const normalizedName = repo.name
            .toLowerCase()
            .replace(/[\s_-]/g, "");

          const isExcluded = EXCLUDED_REPOSITORIES.some(
            (name) =>
              name.replace(/[\s_-]/g, "") === normalizedName
          );

          return !isExcluded;
        });

        setRepos(filteredRepos);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(
            "Unable to load GitHub repositories. Please try again later."
          );
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    fetchRepositories();

    return () => controller.abort();
  }, []);

  const visibleRepos = repos.filter((repo) => {
    const searchableText =
      `${repo.name} ${repo.description || ""} ${repo.language || ""}`;

    return searchableText
      .toLowerCase()
      .includes(search.toLowerCase());
  });

  return (
    <section
      id="repositories"
      className="github-repositories"
    >
      {/* SECTION HEADER */}

      <h2 className="section-title">
        GitHub <span>Repositories</span>
      </h2>

      <p className="section-description">
        A collection of my projects, experiments,
        and software development work.
      </p>

      {/* SEARCH BAR */}

      <div className="repo-toolbar">
        <input
          type="search"
          placeholder="Search repositories..."
          value={search}
          onChange={(event) =>
            setSearch(event.target.value)
          }
          aria-label="Search GitHub repositories"
          className="repo-search"
        />

        <span className="repo-count">
          {loading
            ? "Loading..."
            : `${visibleRepos.length} repositories`}
        </span>
      </div>

      {/* LOADING */}

      {loading && (
        <p className="repo-loading">
          Loading repositories from GitHub...
        </p>
      )}

      {/* ERROR */}

      {error && (
        <div className="repo-error">
          <p>{error}</p>

          <a
            href={`https://github.com/${USERNAME}?tab=repositories`}
            target="_blank"
            rel="noopener noreferrer"
          >
            View repositories on GitHub ↗
          </a>
        </div>
      )}

      {/* EMPTY STATE */}

      {!loading &&
        !error &&
        visibleRepos.length === 0 && (
          <p className="repo-empty">
            No matching repositories found.
          </p>
        )}

      {/* REPOSITORY GRID */}

      {!loading && !error && (
        <div className="repo-grid">
          {visibleRepos.map((repo, index) => (
            <motion.div
              key={repo.id}
              initial={
                reduceMotion
                  ? false
                  : { opacity: 0, y: 25 }
              }
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.1,
              }}
              transition={{
                duration: 0.5,
                delay: Math.min(index * 0.05, 0.25),
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <SpotlightCard className="repo-card">

                {/* CARD HEADER */}

                <div className="repo-card-header">
                  <span className="repo-icon">
                    ⌘
                  </span>

                  <span className="repo-stars">
                    ★ {repo.stargazers_count}
                  </span>
                </div>

                {/* REPOSITORY NAME */}

                <h3>
                  {repo.name.replace(/[-_]/g, " ")}
                </h3>

                {/* DESCRIPTION */}

                <p>
                  {repo.description ||
                    "Explore this project and its source code on GitHub."}
                </p>

                {/* FOOTER */}

                <div className="repo-card-footer">

                  <span className="repo-language">
                    <span className="repo-dot" />
                    {repo.language || "Repository"}
                  </span>

                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${repo.name} on GitHub`}
                  >
                    View Code ↗
                  </a>

                </div>

              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
}

export default GitHubRepositories;
