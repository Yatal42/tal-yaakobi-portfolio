import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { scrollToSection } from '../lib/scroll';
import { localizePath, stripLocale, useI18n } from '../lib/locale';
import { useViewer } from '../lib/viewer';
import LogoutButton from './LogoutButton';

const RetroNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { locale, t, location } = useI18n();
  const { user, enrolled, openLogin } = useViewer();
  const navigate = useNavigate();
  const barePath = stripLocale(location.pathname);
  const onHome = barePath === '/';
  const homePath = localizePath('/', locale);
  const otherLocale = locale === 'he' ? 'en' : 'he';
  const switchTo = localizePath(`${barePath}${location.hash}`, otherLocale);

  const navItems = [
    { id: 'about', label: t.nav.about },
    { id: 'courses', label: t.nav.courses },
    { id: 'reviews', label: t.nav.reviews },
    { id: 'contact', label: t.nav.contact },
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

  return (
    <nav className="site-nav">
      <div className="site-nav-inner">
        <button
          className="site-nav-logo"
          onClick={handleLogoClick}
          type="button"
          aria-label={t.nav.home}
          lang="en"
          dir="ltr"
        >
          TAL <span className="site-nav-logo-accent">YAAKOBI</span>
        </button>

        <div className="site-nav-links">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              className="site-nav-link"
              onClick={() => handleScrollClick(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="site-nav-tools">
          {enrolled.length > 0 ? (
            <Link
              to={localizePath('/my', locale)}
              className="btn-bevel site-nav-my"
              aria-current={barePath === '/my' ? 'page' : undefined}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t.nav.myArea}
            </Link>
          ) : null}
          {user ? (
            <LogoutButton className="btn-bevel site-nav-auth" />
          ) : (
            <button type="button" className="btn-bevel site-nav-auth" onClick={openLogin}>
              {t.courses.signIn}
            </button>
          )}
          <Link
            to={switchTo}
            className="btn-bevel site-nav-lang"
            hrefLang={otherLocale}
            lang={otherLocale}
            aria-label={t.nav.switchTo}
          >
            {t.nav.switchLabel}
          </Link>
          <button
            className="btn-bevel site-nav-menu"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            type="button"
            aria-label={isMobileMenuOpen ? t.nav.closeMenu : t.nav.openMenu}
            aria-expanded={isMobileMenuOpen}
            aria-controls="site-mobile-menu"
          >
            {isMobileMenuOpen ? '×' : '☰'}
          </button>
        </div>
      </div>

      <div id="site-mobile-menu" className={`site-mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        {navItems.map((item) => (
          <button
            key={item.id}
            type="button"
            className="site-mobile-link"
            onClick={() => handleScrollClick(item.id)}
          >
            {item.label}
          </button>
        ))}
        {enrolled.length > 0 ? (
          <Link
            to={localizePath('/my', locale)}
            className="site-mobile-link site-mobile-my"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {t.nav.myArea}
          </Link>
        ) : null}
      </div>
    </nav>
  );
};

export default RetroNavbar;
