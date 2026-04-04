import { useState } from "react";
import RetroButton from "./RetroButton";

export default function Contact() {
  const [copyStatus, setCopyStatus] = useState<{ [key: string]: boolean }>({});
  const email = "taltal2345@gmail.com";
  const phone = "050-9251635";
  const whatsapp = "972509251635";

  const handleCopy = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopyStatus({ [type]: true });
      setTimeout(() => setCopyStatus({ [type]: false }), 2000);
    } catch (err) {
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

  const textStyle = {
    fontSize: '10px',
    textAlign: 'center' as const,
    lineHeight: '1.2',
    color: '#FFFFFF'
  };

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 120px)', justifyContent: 'center', justifyItems: 'center', gap: '24px', padding: '16px', maxWidth: '460px', margin: '0 auto' }}>
      <RetroButton onClick={handleEmail}>
        <span style={iconStyle}>📧</span>
        <span style={textStyle}>Email</span>
      </RetroButton>

      <RetroButton onClick={() => handleCopy(phone, 'phone')}>
        <span style={iconStyle}>📞</span>
        <span style={textStyle}>
          {copyStatus['phone'] ? 'Copied!' : 'Phone'}
        </span>
      </RetroButton>

      <RetroButton onClick={handleWhatsApp}>
        <span style={iconStyle}>💬</span>
        <span style={textStyle}>WhatsApp</span>
      </RetroButton>

      <RetroButton onClick={handleLinkedIn}>
        <span style={iconStyle}>💼</span>
        <span style={textStyle}>LinkedIn</span>
      </RetroButton>

      <RetroButton onClick={handleDriveMaterials}>
        <span style={iconStyle}>📚</span>
        <span style={textStyle}>Drive</span>
      </RetroButton>

      <RetroButton onClick={handleStudentCommunity}>
        <span style={iconStyle}>👩‍🎓</span>
        <span style={textStyle}>Community</span>
      </RetroButton>

    </div>
  );
}