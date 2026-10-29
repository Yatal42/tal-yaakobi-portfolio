import Contact from "./Contact";
import { useI18n } from "../lib/locale";

export default function ContactSection() {
  const { t } = useI18n();

  return (
    <section id="contact" className="contact-block contact-block--footer">
      <div className="contact-block-inner">
        <h2 className="contact-block-title">{t.contact.title}</h2>
        <Contact />
      </div>
    </section>
  );
}
