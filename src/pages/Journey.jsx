import { useEffect, useRef } from "react";
import "./Journey.css";

function TimelineColumn({ title, items }) {
  const columnRef = useRef(null);

  useEffect(() => {
    const children = columnRef.current.querySelectorAll(".timeline-item");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          children.forEach((item, index) => {
            setTimeout(() => {
              item.classList.add("show");
            }, index * 400); // 👈 ONE BY ONE
          });
        }
      },
      { threshold: 0.3 }
    );

    if (columnRef.current) observer.observe(columnRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="journey-column">
      <h3>{title}</h3>

      <div ref={columnRef} className="timeline">
        {items.map((item, i) => (
          <div key={i} className="timeline-item">
            <h4>{item.title}</h4>
            <p className="place">{item.place}</p>
            <span className="year">{item.year}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Journey() {
  return (
    <section className="journey">
      <div className="journey-container">
        <p className="journey-sub">My Qualifications</p>
        <h1 className="journey-title">Awesome Journey</h1>

        <div className="journey-grid">
          {/* EDUCATION */}
          <TimelineColumn
            title="🎓 Education"
            items={[
              {
                title: "B.Sc Computer Science ",
                place: "K.S.Rangasamy college of arts and science",
                year: "2022 – 2025 | percentage 70%",
              },
              {
                title: "Higher Secondary Certificate",
                place: "Govt Boy's Higher Secondary School, Paundamangalam",
                year: "2021 – 2022 | 60%",
              },
              {
                title: "Secondary School Leaving Certificate",
                place: "Govt Boy's Higher Secondary School, paundamangalam",
                year: "2018 – 2019 | 66%",
              },
            ]}
          />

          {/* EXPERIENCE */}
          <TimelineColumn
            title="💼 Experience"
            items={[
              {
                title: "Web Developement Intern",
                place: "TechVoult softwere pvt Ltd, Coimbatore",
                year: "2024 – 2025",
              },
              {
                title: "Python Full Stack Development course completed",
                place: "LOGIN 360 Velachery,Chennai",
                year: "2025 – 2026",
              },
              {
                title: "Full Stack Developer",
                place: "Freelancing",
                year: "2025 – 2026",
              },
            ]}
          />
        </div>
      </div>
    </section>
  );
}

export default Journey;
