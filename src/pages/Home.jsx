import { useEffect, useState } from "react";
import "./Home.css";
import profile from "../assets/profile.jpg";

function Home() {
  const actions = ["Full Stack-Developer", "Python. Flask. Django", "Responsive Web.APIs","Open to work"];

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [char, setChar] = useState(0);

  useEffect(() => {
    if (char < actions[index].length) {
      const t = setTimeout(() => {
        setText((p) => p + actions[index][char]);
        setChar(char + 1);
      }, 100);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => {
        setText("");
        setChar(0);
        setIndex((i) => (i + 1) % actions.length);
      }, 1200);
      return () => clearTimeout(t);
    }
  }, [char, index]);

  return (
    <section className="hero">
      <div className="hero-container">
        {/* LEFT */}
        <div className="hero-left">
          <span className="pill">Hello — welcome</span>

          <h1>SARAN S</h1>

          {/* THIS LINE MUST MATCH SCREENSHOT */}
          <h2 className="title-line">
            Python Full-Stack Developer
            <span className="dot">  • </span>
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

          {/* ACTION / TYPING TEXT */}
          <p className="action-text">
            <span className="typing">{text}</span>
            <span className="cursor">|</span>
          </p>

          <div className="hero-actions">
            <a href="/resume.pdf" className="btn primary">Download cv</a>
            <a href="/contact" className="btn primary">Contact me</a>
          </div>

          
        </div>

        {/* RIGHT IMAGE */}
        <div className="hero-right">
          <img src={profile} alt="Saran SK" />
        </div>
      </div>
    </section>
  );
 
}

export default Home;
