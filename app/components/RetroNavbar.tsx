import { useState } from 'react';

const RetroNavbar = () => {
  const [activeSection, setActiveSection] = useState('');

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'projects', label: '</PROJECTS>' },
    { id: 'skills', label: '</SKILLS>' },
    { id: 'about', label: '</ABOUT>' },
    { id: 'contact', label: '</CONTACT>' }
  ];

  return (
    <nav className="retro-nav">
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
