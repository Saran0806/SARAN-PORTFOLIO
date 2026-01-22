import "./Contact.css";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { FaLinkedin, FaGithub, FaFacebook, FaTwitter } from "react-icons/fa";

function Contact() {
  const formRef = useRef();
  const [popup, setPopup] = useState({ show: false, success: true });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_f3q6736",
        "template_p06yhvb",
        formRef.current,
        "8_mGzExEnnEBQ9D0V"
      )
      .then(
        () => {
          setPopup({ show: true, success: true });
          formRef.current.reset();

          setTimeout(() => {
            setPopup({ show: false, success: true });
          }, 2500);
        },
        () => {
          setPopup({ show: true, success: false });

          setTimeout(() => {
            setPopup({ show: false, success: false });
          }, 2500);
        }
      );
  };

  return (
    <section className="contact">
      <h1 className="contact-title">Contact Me</h1>

      <div className="contact-card">
        {/* LEFT */}
        <div className="contact-left">
          <h2>Let's get in touch</h2>
          <p>Have a project in mind? Let’s talk.</p>

          <div className="contact-info">
            <p>📍 Chennai, India</p>
            <p>📧 saranselvam865@gmail.com</p>
            <p>📞 +91 9025773893</p>
          </div>
             <h3>Conect With Me👇</h3>
          <div className="socials">
            <a href="https://www.linkedin.com/in/saransk0806/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            <a href="https://github.com/Saran0806" target="_blank" rel="noreferrer"><FaGithub /></a>
            <a href="https://www.facebook.com/profile.php?id=100085358737787" target="_blank" rel="noreferrer"><FaFacebook /></a>
            <a href="https://x.com/Saran3347478113" target="_blank" rel="noreferrer"><FaTwitter /></a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="contact-right">
          <h2>Contact</h2>

          <form ref={formRef} onSubmit={sendEmail}>
            <input type="text" name="user_name" placeholder="Your Name" required />
            <input type="email" name="user_email" placeholder="Email" required />
            <input type="text" name="user_phone" placeholder="Phone" />
            <textarea name="message" placeholder="Message" required />
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>

      {/* POPUP */}
      {popup.show && (
        <div className={`popup ${popup.success ? "success" : "error"}`}>
          {popup.success ? "✅ Message sent successfully!" : "❌ Failed to send message"}
        </div>
      )}
    </section>
  );
}

export default Contact;
