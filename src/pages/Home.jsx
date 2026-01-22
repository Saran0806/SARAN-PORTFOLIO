import { useEffect, useState } from "react";
import "./Home.css";
import profile from "../assets/profile.jpg";

function Home() {
  const actions = [
    "Full Stack Developer",
    "Python • Flask • Django",
    "Responsive Web & APIs",
    "Open to Work",
  ];

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [char, setChar] = useState(0);

  useEffect(() => {
    const current = actions[index];

    if (char < current.length) {
      const t = setTimeout(() => {
        setText((prev) => prev + current[char]);
        setChar((c) => c + 1);
      }, 90);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => {
        setText("");
        setChar(0);
        setIndex((i) => (i + 1) % actions.length);
      }, 1200);
      return () => clearTimeout(t);
    }
  }, [char, index, actions]);

  return (
    <section className="hero" id="home">
      <div className="hero-container">
        {/* LEFT */}
        <div className="hero-left">
          <span className="pill">Hello — welcome</span>

          <h1>SARAN S</h1>

          <h2 className="title-line">
            Python Full-Stack Developer
            <span className="dot"> • </span>
            Chennai, India
          </h2>

          <p className="desc">
            I build complete web applications — from polished front-end
            interfaces to robust backend services using Python (Flask/Django),
            JavaScript, and modern tooling.
          </p>

          <p className="special">
            <strong>Specialties:</strong> Web Apps, APIs, Responsive UI,
            SQL/NoSQL, Automation & Deployment
          </p>

          {/* TYPING TEXT */}
          <p className="action-text">
            <span className="typing">{text}</span>
            <span className="cursor">|</span>
          </p>

          {/* ACTION BUTTONS */}
          <div className="hero-actions">
            {/* ✅ FORCE DOWNLOAD */}
            <a
              href="/resume.pdf"
              download="Saran_S_Resume.pdf"
              className="btn primary"
            >
              Download CV
            </a>

            {/* ✅ SCROLL TO CONTACT */}
            <a href="#contact" className="btn secondary">
              Contact Me
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="hero-right">
          <img src={profile} alt="Saran S" />
        </div>
      </div>
    </section>
  );
}

export default Home;
