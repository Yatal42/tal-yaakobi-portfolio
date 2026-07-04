import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { scrollToSection } from '../lib/scroll';

type NavItem =
  | { id: string; label: string; kind: 'route'; to: string }
  | { id: string; label: string; kind: 'scroll'; targetId: string };

const navItems: NavItem[] = [
  { id: 'teaching', label: '</TEACHING>', kind: 'route', to: '/teaching' },
  { id: 'development', label: '</DEV>', kind: 'route', to: '/development' },
  { id: 'about', label: '</ABOUT>', kind: 'scroll', targetId: 'about' },
  { id: 'transcript', label: '</TRANSCRIPT>', kind: 'route', to: '/transcript' },
  { id: 'contact', label: '</CONTACT>', kind: 'scroll', targetId: 'contact' }
];

const RetroNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const onHome = location.pathname === '/';

  const handleLogoClick = () => {
    setIsMobileMenuOpen(false);
    if (onHome) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  const handleScrollClick = (targetId: string) => {
    setIsMobileMenuOpen(false);
    if (scrollToSection(targetId)) return;
    navigate(`/#${targetId}`);
  };

  const renderNavItem = (item: NavItem, baseClass: string) => {
    if (item.kind === 'route') {
      const isActive = location.pathname === item.to;
      const className = `${baseClass} ${isActive ? 'active' : ''}`.trim();
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
        type="button"
        className={baseClass}
        onClick={() => handleScrollClick(item.targetId)}
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
        className={`retro-nav-item logo ${onHome ? 'active' : ''}`}
        onClick={handleLogoClick}
        type="button"
      >
        TAL YAAKOBI
      </button>
      {navItems.map((item) => renderNavItem(item, 'retro-nav-item retro-nav-item-desktop'))}
      <div
        id="retro-mobile-menu"
        className={`retro-mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}
      >
        {navItems.map((item) =>
          renderNavItem(
            { ...item, id: `mobile-${item.id}` },
            'retro-mobile-menu-item'
          )
        )}
      </div>
    </nav>
  );
};

export default RetroNavbar;
