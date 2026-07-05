import Contact from "./Contact";

export default function ContactSection() {
  return (
    <section id="contact" className="contact-block contact-block--footer">
      <div className="contact-block-inner">
        <h2 className="contact-block-title">Contact Me</h2>
        <p className="contact-block-lead contact-block-lead--footer">
          Reach out about tutoring or a full course.
        </p>
        <Contact />
      </div>
    </section>
  );
}
