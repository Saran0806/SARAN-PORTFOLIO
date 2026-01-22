import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const goToSection = (id) => {
    setOpen(false);          // close mobile menu
    navigate("/");           // always ensure home page

    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <header className="navbar">
      <div className="nav-container">
        {/* LOGO */}
        <div className="logo" onClick={() => goToSection("home")}>
          <span className="logo-box">SS</span>
          <span className="logo-text">Portfolio.</span>
        </div>

        {/* DESKTOP LINKS */}
        <nav className="nav-links">
          <button onClick={() => goToSection("home")}>Home</button>
          <button onClick={() => goToSection("intro")}>Intro</button>
          <button onClick={() => goToSection("services")}>Services</button>
          <button onClick={() => goToSection("certificates")}>Certificates</button>
          <button onClick={() => goToSection("projects")}>Projects</button>
          <button
            className="hire-btn"
            onClick={() => goToSection("contact")}
          >
            Let’s Talk
          </button>
        </nav>

        {/* MOBILE MENU ICON */}
        <div className="menu-icon" onClick={() => setOpen(!open)}>
          ☰
        </div>

        {/* MOBILE DROPDOWN */}
        {open && (
          <div className="mobile-dropdown">
            <button onClick={() => goToSection("home")}>Home</button>
            <button onClick={() => goToSection("intro")}>Intro</button>
            <button onClick={() => goToSection("services")}>Services</button>
            <button onClick={() => goToSection("certificates")}>Certificates</button>
            <button onClick={() => goToSection("projects")}>Projects</button>
            <button onClick={() => goToSection("contact")}>Contact</button>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;
