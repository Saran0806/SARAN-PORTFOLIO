import Home from "./Home";
import Intro from "./Intro";
import Services from "./Services";
import Certificates from "./Certificates";
import CallToAction from "../components/CallToAction";
import Projects from "./Projects";
import Contact from "./Contact";

function Main() {
  return (
    <>
      <section id="home">
        <Home />
      </section>

      <section id="intro">
        <Intro />
      </section>

      <section id="services">
        <Services />
      </section>

      {/* CERTIFICATES */}
      <section id="certificates">
        <Certificates />
      </section>

      {/* 🔥 CALL TO ACTION JUST BELOW CERTIFICATES */}
      <section id="cta">
        <CallToAction />
      </section>

      {/* PROJECTS AFTER CTA */}
      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </>
  );
}

export default Main;
