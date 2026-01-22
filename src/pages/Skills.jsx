import "./Skills.css";

function SkillBar({ name, percent }) {
  return (
    <div className="skill">
      <div className="skill-head">
        <span>{name}</span>
        <span>{percent}%</span>
      </div>

      <div className="skill-bar">
        <div
          className="skill-fill"
          style={{ width: `${percent}%` }}
        ></div>
      </div>
    </div>
  );
}

function Skills() {
  return (
    <section className="skills">
      <div className="skills-container">
        <p className="skills-sub">Why Choose Me</p>
        <h1 className="skills-title">My Expertise Area</h1>

        <div className="skills-grid">
          <div>
            <SkillBar name="HTML" percent={90} />
            <SkillBar name="JavaScript" percent={80} />
            <SkillBar name="Python" percent={80} />
            <SkillBar name="SQL" percent={85} />
          </div>

          <div>
            <SkillBar name="CSS" percent={90} />
            <SkillBar name="ReactJS" percent={75} />
            <SkillBar name="Django" percent={75} />
            <SkillBar name="Core Java" percent={50} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
