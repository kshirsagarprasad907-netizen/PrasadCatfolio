import "../styles/navbar.css";
import { useNavigate } from "react-router-dom";

export default function Navbar() {

    const navigate = useNavigate()

  return (
    <nav className="navbar">
        <div
        className="logo"
        onClick={() => navigate("/home")}
        style={{ cursor: "pointer" }}>
        🐾 CatFolio
        </div>

        <div className="navLinks">
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <a href="/resume.pdf" target="_blank">
            Resume
          </a>
        </div>
      </nav>
  );
}