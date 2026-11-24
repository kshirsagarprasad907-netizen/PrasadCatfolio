import { useState } from "react";
import "../styles/home.css";
import { motion } from "framer-motion";
import { Cog } from "lucide-react";
import { useNavigate } from "react-router-dom";

//component imports
import Navbar from "../components/navbar";

// image imports
import catImage from "../assets/images/aboutCat.gif";
import myImage from "../assets/images/ProfilePic.jpg";
import compProject from "../assets/images/compProjectCat.jpg";
import smallProject from "../assets/images/smallProjectCat.jpeg";
import archiveProject from "../assets/images/archProjectCat.jpg";
import inProgressCat from "../assets/images/inProgressCat.gif";

//constants

export default function Home() {
  const [revived, setRevived] = useState(false);

  const navigate = useNavigate();

  const techStack = [
    "React.js",
    "Express.js",
    "Javascript(Node.js)",
    "Python(PHP)",
    "PostgreSQL",
    "MongoDB",
    "AWS",
    "Git/Github",
    "Angular",
    "UI/UX Design",
    "Figma",
    "HTML/CSS",
    "REST APIs",
    "Copilot",
  ];

  return (
    <div className="home">
      <Navbar />

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
            Full-stack developer, professional problem solver, and part-time collector of random knowledge. I build software, ask too many questions, and have an incurable habit of learning things that may or may not be useful. From new technologies to obscure facts, if it exists, I probably want to know how it works. Also, I firmly believe every project gets better with cat stickers.
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

      <div className="projectTypeList">
        <div className="projectContainer">
          <div
            className="comprehensiveProject"
            onClick={() =>
              navigate("/projectPage", {
                state: {
                  category: "comprehensive",
                },
              })
            }
          >
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
          </div>

          

          <div className="smallProject">
            <div className="projectContainer">
          <div
            className="comprehensiveProject"
            onClick={() =>
              navigate("/projectPage", {
                state: {
                  category: "small",
                },
              })
            }
          >
            <div className="projectCircle medium">
              <img src={smallProject} alt="Project" className="circleImage" />
            </div>
            <div className="projectDescription">
              <h3>Small Projects</h3>
              <p>Quick experiments and fun ideas.</p>
            </div>
            </div>
          </div>
          </div>

          <div className="archiveProject">
            <div className="projectContainer">
          <div
            className="comprehensiveProject"
            onClick={() =>
              navigate("/projectPage", {
                state: {
                  category: "archive",
                },
              })
            }
          >
            <div className="projectCircle small">
              <img src={archiveProject} alt="Project" className="circleImage" />
            </div>
            <div className="projectDescription">
              <h3>Archive</h3>
              <p>Previous work and old experiments.</p>
            </div>
          </div>
          </div>
        </div>
      </div>
      </section>

      <footer className="footer" id="contact">
        <div>Let's connect.</div>

        <div className="socials">
          <a href="https://www.linkedin.com/in/prasad-kshirsagar-26ab78139" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="mailto:kshirsagarprasad907@gmail.com>" target="_blank" rel="noopener noreferrer">
            Email
          </a>
          <a href="https://www.instagram.com/pro_sad.907?hvrq=emI5YXd5Z3UwZThv" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a href="tel:+918668266898">Mobile</a>
        </div>
      </footer>
    </div>
  );
}
