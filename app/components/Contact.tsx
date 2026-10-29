import { useState } from "react";
import RetroButton from "./RetroButton";
import { useI18n } from "../lib/locale";

export default function Contact() {
  const { t } = useI18n();
  const [copyStatus, setCopyStatus] = useState<{ [key: string]: boolean }>({});
  const email = "taltal2345@gmail.com";
  const phone = "050-9251635";
  const whatsapp = "972509251635";

  const handleCopy = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopyStatus({ [type]: true });
      setTimeout(() => setCopyStatus({ [type]: false }), 2000);
    } catch {
      const textArea = document.createElement('textarea');
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopyStatus({ [type]: true });
      setTimeout(() => setCopyStatus({ [type]: false }), 2000);
    }
  };

  const handleEmail = () => {
    const mailtoUrl = `mailto:${email}`;
    const link = document.createElement('a');
    link.href = mailtoUrl;
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    window.setTimeout(() => {
      if (document.visibilityState === 'visible') {
        const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`;
        window.open(gmailComposeUrl, '_blank', 'noopener,noreferrer');
      }
    }, 350);
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${whatsapp}`, '_blank');
  };

  const handleLinkedIn = () => {
    window.open('https://www.linkedin.com/in/tal-yaakobi-191059227/', '_blank');
  };

  const handleDriveMaterials = () => {
    window.open('https://drive.google.com/drive/folders/1vsnPdBF0ZO5sXlsK_xXFbnOiaJmRt6DR', '_blank');
  };

  const handleStudentCommunity = () => {
    window.open('https://chat.whatsapp.com/CR1dFJrWHU91I8A9HhK9p1', '_blank');
  };

  const iconStyle = {
    fontSize: '32px',
    lineHeight: '1',
    color: '#000000'
  };

  return (
    <div className="contact-grid">
      <RetroButton onClick={handleEmail} ariaLabel={t.contact.sendEmail} title={t.contact.sendEmail}>
        <span style={iconStyle}>📧</span>
        <span className="retro-contact-text">{t.contact.email}</span>
      </RetroButton>

      <RetroButton onClick={() => handleCopy(phone, 'phone')} ariaLabel={t.contact.copyPhone} title={t.contact.copyPhone}>
        <span style={iconStyle}>📞</span>
        <span className="retro-contact-text">
          {copyStatus['phone'] ? t.contact.copied : t.contact.phone}
        </span>
      </RetroButton>

      <RetroButton onClick={handleWhatsApp} ariaLabel={t.contact.openWhatsapp} title={t.contact.openWhatsapp}>
        <span style={iconStyle}>💬</span>
        <span className="retro-contact-text">{t.contact.whatsapp}</span>
      </RetroButton>

      <RetroButton onClick={handleLinkedIn} ariaLabel={t.contact.openLinkedin} title={t.contact.openLinkedin}>
        <span style={iconStyle}>💼</span>
        <span className="retro-contact-text">{t.contact.linkedin}</span>
      </RetroButton>

      <RetroButton onClick={handleDriveMaterials} ariaLabel={t.contact.openDrive} title={t.contact.openDrive}>
        <span style={iconStyle}>📚</span>
        <span className="retro-contact-text">{t.contact.drive}</span>
      </RetroButton>

      <RetroButton onClick={handleStudentCommunity} ariaLabel={t.contact.openCommunity} title={t.contact.openCommunity}>
        <span style={iconStyle}>👩‍🎓</span>
        <span className="retro-contact-text">{t.contact.community}</span>
      </RetroButton>

    </div>
  );
}