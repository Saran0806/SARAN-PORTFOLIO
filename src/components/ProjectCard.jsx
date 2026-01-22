function ProjectCard({ title, description, tech, github, live }) {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <p><strong>Tech:</strong> {tech}</p>
      <div>
        <a href={github} target="_blank">GitHub</a>{" "}
        <a href={live} target="_blank">Live</a>
      </div>
    </div>
  );
}

export default ProjectCard;
