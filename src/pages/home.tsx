import { useState } from "react";
import "../styles/home.css";

// Replace later
import catImage from "../assets/images/aboutCat.gif";
import myImage from "../assets/images/ProfilePic.jpg";

export default function Home() {
  const [revived, setRevived] = useState(false);

  const techStack = [
    "Java",
    "Spring Boot",
    "React",
    "PostgreSQL",
    "Docker",
    "AWS",
    "Git",
    "Linux",
    "MongoDB",
    "Redis",
    "TypeScript",
    "Jenkins",
  ];

  return (
    <div className="home">
      <nav className="navbar">
        <div className="logo">🐾 CatFolio</div>

        <div className="navLinks">
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <a href="/resume.pdf" target="_blank">
            Resume
          </a>
        </div>
      </nav>

      <section className="hero">
        <div className="heroLeft">
          <div className="callout">Definitely not Prasad.</div>

          <div className="catFrame">
            <img src={revived ? myImage : catImage} alt="Profile" />
          </div>

          <button className="reviveBtn" onClick={() => setRevived(!revived)}>
            {revived ? "Back to Cat" : "Revive Me"}
          </button>
        </div>

        <div className="heroRight">
          <span className="tagline">THE HUMAN BEHIND THE CAT</span>

          <h1>About Me</h1>

          <p>
            Hi, I'm Prasad. Curious by nature. Placeholder text for now. Add
            your actual developer story later.
          </p>

          <h3>Skills & Tech Stack</h3>

          <div className="techStack">
            {techStack.map((tech) => (
              <span className="techPill" key={tech}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="projectsSection" id="projects">
        <h2>My Projects</h2>

        <div className="projectContainer">
          <div className="projectCircle large">
            <div className="circleImage"></div>

            <h3>Comprehensive Projects</h3>

            <p>
              Bigger projects with multiple systems and deeper architecture.
            </p>
          </div>

          <div className="projectCircle medium">
            <div className="circleImage"></div>

            <h3>Small Projects</h3>

            <p>Quick experiments and fun ideas.</p>
          </div>

          <div className="projectCircle small">
            <div className="circleImage"></div>

            <h3>Archive</h3>

            <p>Previous work and old experiments.</p>
          </div>
        </div>
      </section>

      <footer className="footer" id="contact">
        <div>Let's connect.</div>

        <div className="socials">
          <a href="#">LinkedIn</a>
          <a href="#">X</a>
          <a href="#">Instagram</a>
        </div>
      </footer>
    </div>
  );
}
