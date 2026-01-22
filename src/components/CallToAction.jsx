import "./CallToAction.css";
import ctaImg from "../assets/cta.png"; // use your illustration image

function CallToAction() {
  return (
    <section className="cta">
      <div className="cta-container">
        {/* LEFT CONTENT */}
        <div className="cta-left">
          <h1>Have A Project On Your Mind</h1>

          <p>
            Whether you're looking to build a powerful website, create an
            engaging e-commerce platform, or develop a standout logo, I'm here
            to bring your vision to life. I offer end-to-end web development
            services with a strong focus on quality and client satisfaction.
          </p>

          <a href="#contact" className="cta-btn">
            Contact Me
          </a>
        </div>

        {/* RIGHT IMAGE */}
        <div className="cta-right">
          <img src={ctaImg} alt="Project discussion illustration" />
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
