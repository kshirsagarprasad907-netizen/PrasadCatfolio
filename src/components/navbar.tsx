import "../styles/navbar.css";

export default function Navbar() {
  return (
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
  );
}