import "./Services.css";

const services = [
  {
    title: "Website Design",
    desc: "Fully customized, responsive, high-performance websites tailored to your business needs.",
    icon: "🖥️",
    highlight: true,
  },
  {
    title: "E-commerce Solutions",
    desc: "Secure, scalable e-commerce platforms with payment gateways and inventory management.",
    icon: "🛒",
    highlight: true,
  },
  {
    title: "Static Websites",
    desc: "Fast-loading, SEO-friendly static websites for portfolios and informational pages.",
    icon: "📄",
    highlight: true,
  },
  {
    title: "Dynamic Websites",
    desc: "Interactive websites with real-time data updates and backend integration.",
    icon: "🔄",
    highlight: true,
  },
  {
    title: "Student Projects",
    desc: "Budget-friendly academic and real-world projects with full guidance.",
    icon: "🎓",
    highlight: true,
  },
  {
    title: "Logo Design",
    desc: "Professional logo designs that define your brand identity clearly.",
    icon: "🎨",
    highlight: true,
  },
];

function Services() {
  return (
    <section className="services">
      <p className="services-sub">My Services</p>
      <h1 className="services-title">What I Offer</h1>

      <div className="services-grid">
        {services.map((s, i) => (
          <div
            key={i}
            className={`service-card ${s.highlight ? "active" : ""}`}
          >
            <div className="icon">{s.icon}</div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
    
  );
}

export default Services;
