import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';

type NavItem =
  | { id: string; label: string; kind: 'section' }
  | { id: string; label: string; kind: 'route'; to: string };

const RetroNavbar = () => {
  const [activeSection, setActiveSection] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const onHome = location.pathname === '/';

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

  const handleSectionClick = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false);
    if (onHome) {
      scrollToSection(sectionId);
    } else {
      navigate(`/#${sectionId}`);
      setTimeout(() => scrollToSection(sectionId), 60);
    }
  };

  const handleLogoClick = () => {
    setActiveSection('');
    setIsMobileMenuOpen(false);
    if (onHome) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  const navItems: NavItem[] = [
    { id: 'projects', label: '</PROJECTS>', kind: 'section' },
    { id: 'skills', label: '</SKILLS>', kind: 'section' },
    { id: 'transcript', label: '</TRANSCRIPT>', kind: 'route', to: '/transcript' },
    { id: 'about', label: '</ABOUT>', kind: 'section' },
    { id: 'contact', label: '</CONTACT>', kind: 'section' }
  ];

  const renderNavButton = (item: NavItem, baseClass: string) => {
    const isActive =
      item.kind === 'route'
        ? location.pathname === item.to
        : activeSection === item.id && onHome;
    const className = `${baseClass} ${isActive ? 'active' : ''}`.trim();

    if (item.kind === 'route') {
      return (
        <Link
          key={item.id}
          to={item.to}
          className={className}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          {item.label}
        </Link>
      );
    }
    return (
      <button
        key={item.id}
        className={className}
        onClick={() => handleSectionClick(item.id)}
        type="button"
      >
        {item.label}
      </button>
    );
  };

  return (
    <nav className="retro-nav">
      <button
        className={`retro-mobile-menu-button ${isMobileMenuOpen ? 'active' : ''}`}
        onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        type="button"
        aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={isMobileMenuOpen}
        aria-controls="retro-mobile-menu"
      >
        ☰
      </button>
      <button
        className={`retro-nav-item logo ${activeSection === '' && onHome ? 'active' : ''}`}
        onClick={handleLogoClick}
        type="button"
      >
        TAL YAAKOBI
      </button>
      {navItems.map((item) => renderNavButton(item, 'retro-nav-item retro-nav-item-desktop'))}
      <div
        id="retro-mobile-menu"
        className={`retro-mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}
      >
        {navItems.map((item) =>
          renderNavButton(
            { ...item, id: `mobile-${item.id}` } as NavItem,
            'retro-mobile-menu-item'
          )
        )}
      </div>
    </nav>
  );
};

export default RetroNavbar;
