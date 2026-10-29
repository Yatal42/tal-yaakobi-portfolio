import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { scrollToSection } from '../lib/scroll';
import { localizePath, stripLocale, useI18n } from '../lib/locale';

type NavItem =
  | { id: string; label: string; kind: 'route'; to: string }
  | { id: string; label: string; kind: 'scroll'; targetId: string };

const RetroNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { locale, t, location } = useI18n();
  const navigate = useNavigate();
  const barePath = stripLocale(location.pathname);
  const onHome = barePath === '/';
  const homePath = localizePath('/', locale);
  const otherLocale = locale === 'he' ? 'en' : 'he';
  const switchTo = localizePath(`${barePath}${location.hash}`, otherLocale);

  const navItems: NavItem[] = [
    { id: 'about', label: t.nav.about, kind: 'scroll', targetId: 'about' },
    { id: 'courses', label: t.nav.courses, kind: 'scroll', targetId: 'courses' },
    { id: 'development', label: t.nav.development, kind: 'route', to: localizePath('/development', locale) },
    { id: 'contact', label: t.nav.contact, kind: 'scroll', targetId: 'contact' }
  ];

  const handleLogoClick = () => {
    setIsMobileMenuOpen(false);
    if (onHome) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate(homePath);
    }
  };

  const handleScrollClick = (targetId: string) => {
    setIsMobileMenuOpen(false);
    if (onHome && scrollToSection(targetId)) return;
    navigate(`${homePath}#${targetId}`);
  };

  const renderNavItem = (item: NavItem, baseClass: string) => {
    if (item.kind === 'route') {
      const isActive = barePath === stripLocale(item.to);
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
        aria-label={isMobileMenuOpen ? t.nav.closeMenu : t.nav.openMenu}
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
      <Link
        to={switchTo}
        className="retro-nav-item lang-toggle"
        hrefLang={otherLocale}
        lang={otherLocale}
        aria-label={t.nav.switchTo}
      >
        {t.nav.switchLabel}
      </Link>
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
