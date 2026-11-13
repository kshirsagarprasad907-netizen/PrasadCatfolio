import { useState } from "react";
import "../styles/home.css";
import { motion } from "framer-motion";
import { Cog } from "lucide-react";

// image imports
import catImage from "../assets/images/aboutCat.gif";
import myImage from "../assets/images/ProfilePic.jpg";
import compProject from "../assets/images/compProjectCat.jpg";
import smallProject from "../assets/images/smallProjectCat.jpeg";
import archiveProject from "../assets/images/archProjectCat.jpg";
import inProgressCat from "../assets/images/inProgressCat.gif";

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

      <section className="inProgressIndicator">
        <img src={inProgressCat} alt="In Progress" className="inProgressGif" />

        <div className="inProgressText">
          <motion.div
          className="gearWrapper"
          animate={{ rotate: 360 }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <Cog size={48} />
        </motion.div>
          <h2>Portfolio In Progress</h2>
          <p>
          The Portfolio is currently in progress, you can still check my
          progress though. More content and projects will be added soon!
        </p>

        </div>
      </section>

      <section className="hero">
        <div className="heroLeft">
          <div className="callout" onClick={() => setRevived(!revived)}>
            {revived
              ? "Hey you found me! Do not let that cat in here again!"
              : "Definitely not Prasad."}
          </div>

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
          <div className="comprehensiveProject">
            <div className="projectCircle large">
              <img src={compProject} alt="Project" className="circleImage" />
            </div>
            <div className="projectDescription">
              <h3>Comprehensive Projects</h3>
              <p>
                Bigger projects with multiple systems and deeper architecture.
              </p>
            </div>
          </div>

          <div className="smallProject">
            <div className="projectCircle medium">
              <img src={smallProject} alt="Project" className="circleImage" />
            </div>
            <div className="projectDescription">
              <h3>Small Projects</h3>
              <p>Quick experiments and fun ideas.</p>
            </div>
          </div>

          <div className="archiveProject">
            <div className="projectCircle small">
              <img src={archiveProject} alt="Project" className="circleImage" />
            </div>
            <div className="projectDescription">
              <h3>Archive</h3>
              <p>Previous work and old experiments.</p>
            </div>
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
