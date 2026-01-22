import "./Intro.css";
import introImg from "../assets/intro.png";
import Skills from "./Skills"; 
import Journey from "./Journey";


function Intro() {
  return (
    <>
      {/* INTRO SECTION */}
      <section className="intro">
        <div className="intro-container">
          {/* LEFT IMAGE */}
          <div className="intro-left">
            <img src={introImg} alt="Developer Illustration" />
          </div>

          {/* RIGHT CONTENT */}
          <div className="intro-right">
            <span className="intro-sub">My Intro</span>
            <h1>About Me</h1>

            <p className="intro-text">
              I’m <strong>Saran SK</strong>, a Computer Science graduate with
              expertise in Python Full Stack Development. I build dynamic,
              scalable web applications using Python, Django, Flask, and modern
              frontend technologies.
            </p>

            <p className="intro-text">
              I focus on creating clean user experiences, efficient backend
              systems, and real-world solutions that solve actual problems.
            </p>

            <div className="intro-details">
              <p><strong>Name:</strong> Saran SK</p>
              <p><strong>Phone:</strong> +91 9025773893</p>
              <p><strong>Email:</strong> saranselvam865@gmail.com</p>
            </div>

            <h3 className="interest-title">My Interests</h3>
            <div className="interests">
              <span>🎧 Music</span>
              <span>✈️ Travel</span>
              <span>🐞 Debugging</span>
              <span>🎨 Designing</span>
            </div>
          </div>
        </div>
      </section>
      <Skills />
      <Journey/>
    </>
  );
}

export default Intro;
