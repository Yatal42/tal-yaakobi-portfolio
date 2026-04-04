import { useState } from 'react';

const RetroNavbar = () => {
  const [activeSection, setActiveSection] = useState('');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (!element) return;

    const nav = document.querySelector('.retro-nav');
    const navHeight = nav instanceof HTMLElement ? nav.offsetHeight : 40;
    const heading = element.querySelector('.retro-section-title');
    const targetElement = heading instanceof HTMLElement ? heading : element;
    const targetTop = targetElement.getBoundingClientRect().top + window.scrollY - navHeight - 10;

    window.scrollTo({
      top: Math.max(targetTop, 0),
      behavior: 'smooth'
    });
  };

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    scrollToSection(sectionId);
  };

  const handleLogoClick = () => {
    setActiveSection('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { id: 'projects', label: '</PROJECTS>' },
    { id: 'skills', label: '</SKILLS>' },
    { id: 'about', label: '</ABOUT>' },
    { id: 'contact', label: '</CONTACT>' }
  ];

  return (
    <nav className="retro-nav">
      <button
        className={`retro-nav-item logo ${activeSection === '' ? 'active' : ''}`}
        onClick={handleLogoClick}
        type="button"
      >
        TAL YAAKOBI
      </button>
      {navItems.map((item) => (
        <button
          key={item.id}
          className={`retro-nav-item ${activeSection === item.id ? 'active' : ''}`}
          onClick={() => handleNavClick(item.id)}
          type="button"
        >
          {item.label}
        </button>
      ))}
    </nav>
  );
};

export default RetroNavbar;
