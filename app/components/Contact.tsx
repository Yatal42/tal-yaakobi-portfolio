import { useState } from "react";
import SectionHeader from "./ui/SectionHeader";
import { useI18n } from "../lib/locale";

const email = "taltal2345@gmail.com";
const phone = "050-9251635";
const whatsapp = "972509251635";

const openExternal = (url: string) => {
  window.open(url, "_blank", "noopener,noreferrer");
};

export default function Contact() {
  const { t } = useI18n();
  const [phoneCopied, setPhoneCopied] = useState(false);

  const handleCopyPhone = async () => {
    try {
      await navigator.clipboard.writeText(phone);
    } catch {
      const textArea = document.createElement("textarea");
      textArea.value = phone;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
    }
    setPhoneCopied(true);
    window.setTimeout(() => setPhoneCopied(false), 2000);
  };

  const handleEmail = () => {
    const link = document.createElement("a");
    link.href = `mailto:${email}`;
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    window.setTimeout(() => {
      if (document.visibilityState === "visible") {
        openExternal(`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`);
      }
    }, 350);
  };

  const items = [
    { id: "email", label: t.contact.email, detail: email, aria: t.contact.sendEmail, onClick: handleEmail },
    {
      id: "phone",
      label: phoneCopied ? t.contact.copied : t.contact.phone,
      detail: phone,
      aria: t.contact.copyPhone,
      onClick: handleCopyPhone,
    },
    { id: "whatsapp", label: t.contact.whatsapp, aria: t.contact.openWhatsapp, onClick: () => openExternal(`https://wa.me/${whatsapp}`) },
    {
      id: "linkedin",
      label: t.contact.linkedin,
      aria: t.contact.openLinkedin,
      onClick: () => openExternal("https://www.linkedin.com/in/tal-yaakobi-191059227/"),
    },
    {
      id: "drive",
      label: t.contact.drive,
      aria: t.contact.openDrive,
      onClick: () => openExternal("https://drive.google.com/drive/folders/1vsnPdBF0ZO5sXlsK_xXFbnOiaJmRt6DR"),
    },
    {
      id: "community",
      label: t.contact.community,
      aria: t.contact.openCommunity,
      onClick: () => openExternal("https://chat.whatsapp.com/CR1dFJrWHU91I8A9HhK9p1"),
    },
  ];

  return (
    <section id="contact" className="section contact" aria-labelledby="contact-title">
      <div className="container contact-layout">
        <SectionHeader eyebrow={t.contact.eyebrow} title={t.contact.title} id="contact-title" />
        <ul className="contact-list">
          {items.map((item) => (
            <li key={item.id}>
              <button type="button" className="contact-row" onClick={item.onClick} aria-label={item.aria}>
                <span className="contact-row-label" aria-live={item.id === "phone" ? "polite" : undefined}>
                  {item.label}
                </span>
                {item.detail ? <span className="contact-row-detail" dir="ltr">{item.detail}</span> : null}
                <span className="contact-row-arrow" aria-hidden="true">→</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
