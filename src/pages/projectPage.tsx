import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { ArrowLeft, X } from "lucide-react";

import Navbar from "../components/navbar";

import "../styles/projectPage.css";

import compHero from "../assets/images/compProjectCat.jpg";
import smallHero from "../assets/images/smallProjectCat.jpeg";
import archiveHero from "../assets/images/archProjectCat.jpg";

import easyCat from "../assets/images/easyCat.gif";
import mediumCat from "../assets/images/mediumCat.gif";
import hardCat from "../assets/images/hardCat.gif";

interface Project {
  title: string;
  description: string;
  techStack: string[];
  duration: string;
  difficulty: string;
  difficultyImage: string;
  projectUrl: string;
}

export default function ProjectPage() {
  const location = useLocation();

  const category = location.state?.category || "comprehensive";

  const pageData = {
    comprehensive: {
      title: "Comprehensive Projects",
      description:
        "Larger systems with deeper architecture, cloud deployment, scalability and multiple integrated services.",
      heroImage: compHero,
      projects: [
        {
          title: "Cat Commerce",
          description:
            "Enterprise level ecommerce system with authentication, payments and dashboards.",
          techStack: [
            "React",
            "Spring Boot",
            "PostgreSQL",
            "Docker",
            "AWS",
          ],
          duration: "3 Months",
          difficulty: "Hard",
          difficultyImage: hardCat,
          projectUrl: "#",
        },
        {
          title: "Cloud Inventory",
          description:
            "Inventory management system built with a microservice architecture.",
          techStack: [
            "Java",
            "Spring Boot",
            "Redis",
            "Docker",
          ],
          duration: "2 Months",
          difficulty: "Medium",
          difficultyImage: mediumCat,
          projectUrl: "#",
        },
      ],
    },

    small: {
      title: "Small Projects",
      description:
        "Experiments, utilities, side ideas and fun implementations.",
      heroImage: smallHero,
      projects: [
        {
          title: "CatCulator",
          description: "A simple calculator app with CATS!",
          techStack: ["HTML", "CSS", "JavaScript"],
          duration: "1 Day",
          difficulty: "Easy",
          difficultyImage: easyCat,
          projectUrl: "https://kshirsagarprasad907-netizen.github.io/Basic_Calculator/",
        },
      ],
    },

    archive: {
      title: "Archive",
      description:
        "Previous work, old experiments and retired ideas.",
      heroImage: archiveHero,
      projects: [
        {
          title: "Portfolio V1",
          description: "Original portfolio before CatFolio.",
          techStack: ["HTML", "CSS", "JavaScript"],
          duration: "2 Weeks",
          difficulty: "Easy",
          difficultyImage: easyCat,
          projectUrl: "#",
        },
      ],
    },
  };

  const currentPage =
    pageData[category as keyof typeof pageData];

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="projectPage">

      <Navbar />

      <Link to="/" className="backButton">
        <ArrowLeft size={18} />
        Back Home
      </Link>

      <section className="projectHero">
        <div className="heroFrame">

          <img
            src={currentPage.heroImage}
            alt={currentPage.title}
          />

          <div className="heroOverlay">
            <span className="heroTag">
              CatFolio Collection
            </span>

            <h1>{currentPage.title}</h1>

            <p>{currentPage.description}</p>
          </div>
        </div>
      </section>

      <section className="projectLayout">
        <div className="projectList">
          {currentPage.projects.map((project) => (
            <div
              key={project.title}
              className="projectCard"
              onClick={() => setSelectedProject(project)}
            >
              <h3>{project.title}</h3>

              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </section>

      {selectedProject && (
        <div
          className="projectModalBackdrop"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="projectModal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="closeModal"
              onClick={() => setSelectedProject(null)}
            >
              <X size={20} />
            </button>

            <h2>{selectedProject.title}</h2>

            <p className="modalDescription">
              {selectedProject.description}
            </p>

            <div className="detailBlock">
              <h4>Difficulty</h4>

              <div className="difficultyDisplay">
                <img
                  src={selectedProject.difficultyImage}
                  alt="Difficulty"
                />

                <span>{selectedProject.difficulty}</span>
              </div>
            </div>

            <div className="detailBlock">
              <h4>Duration</h4>
              <p>{selectedProject.duration}</p>
            </div>

            <div className="detailBlock">
              <h4>Tech Stack</h4>

              <div className="stackGrid">
                {selectedProject.techStack.map(
                  (tech: string) => (
                    <span
                      key={tech}
                      className="techPill"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>

            <div className="actionButtons">
              <a
                href={selectedProject.projectUrl}
                className="visitBtn"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Project
              </a>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}