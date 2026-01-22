import "./Certificates.css";

import cert1 from "../assets/cert1.jpeg";
import cert2 from "../assets/cert2.jpeg";
import cert3 from "../assets/cert3.jpeg";
import cert4 from "../assets/cert4.jpeg";
import cert5 from "../assets/cert5.jpeg";
import cert6 from "../assets/cert6.jpeg";

const certificates = [
  cert1,
  cert2,
  cert3,
  cert4,
  cert5,
  cert6,
];

function Certificates() {
  return (
    <section className="certificates">
      <p className="cert-sub">My Portfolio</p>
      <h1 className="cert-title">Certificates</h1>

      <div className="cert-grid">
        {certificates.map((img, index) => (
          <div className="cert-card" key={index}>
            <img src={img} alt={`Certificate ${index + 1}`} />
          </div>
        ))}
      </div>
    
    </section>

    
  );
}

export default Certificates;
