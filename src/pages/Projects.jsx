import { useState } from "react";
import "./Projects.css";

import fraudImg from "../assets/fraud.jpg";
import bloodImg from "../assets/blood.jpg";
import careerImg from "../assets/career.jpg";

const projects = [
  {
    title: "Online Payment Fraud Detection",
    image: fraudImg,
    description:
      "A machine learning–based system to detect fraudulent online payment transactions in real time by analyzing transaction patterns and user behavior.",
    tech: "Python, Machine Learning, Pandas, NumPy, Scikit-learn",
    features: [
      "Fraud prediction using ML models",
      "Transaction risk scoring",
      "Real-time fraud detection",
      "High accuracy over rule-based systems",
    ],
  },
  {
    title: "Blood Test Report Analyzer – Doctor Diagnostic Version",
    image: bloodImg,
    description:
      "An intelligent diagnostic system that analyzes blood test reports and generates doctor-style insights by comparing values with medical reference ranges.",
    tech: "Python, Data Processing, MySQL",
    features: [
      "Automatic comparison with medical ranges",
      "Highlight abnormal parameters",
      "Doctor-style diagnostic insights",
      "Faster decision-making",
    ],
  },
  {
    title: "Career Guidance & Degree Recommendation System",
    image: careerImg,
    description:
      "A smart system that helps students choose the right career path and degree programs based on academic performance, interests, and eligibility.",
    tech: "Python, Django, MySQL, HTML, CSS",
    features: [
      "Career path recommendations",
      "Degree eligibility analysis",
      "Step-by-step guidance roadmap",
      "Reduced career mismatch",
    ],
  },
];

function Projects() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((index + 1) % projects.length);
  const prev = () =>
    setIndex((index - 1 + projects.length) % projects.length);

  const project = projects[index];

  return (
    <section className="projects">
      <h1 className="projects-title">My Projects</h1>

      <div className="project-slide">
        {/* IMAGE */}
        <div className="project-image">
          <img src={project.image} alt={project.title} />
        </div>

        {/* CONTENT */}
        <div className="project-content">
          <h2>{project.title}</h2>
          <p>{project.description}</p>

          <p className="tech">
            <strong>Technologies:</strong> {project.tech}
          </p>

          <ul>
            {project.features.map((f, i) => (
              <li key={i}>• {f}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* DOTS */}
      <div className="dots">
        {projects.map((_, i) => (
          <span
            key={i}
            className={i === index ? "dot active" : "dot"}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>

      {/* ARROWS */}
      <div className="arrows">
        <button onClick={prev}>‹</button>
        <button onClick={next}>›</button>
      </div>
    </section>
  );
}

export default Projects;
