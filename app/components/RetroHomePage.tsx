import { useEffect } from 'react';
import { useLocation } from 'react-router';
import Hero from './Hero';
import AboutMe from './AboutMe';
import Services from './Services';
import CourseCatalog from './CourseCatalog';
import ReviewsSection from "./reviews/ReviewsSection";
import { scrollToSection } from '../lib/scroll';
import { useI18n } from '../lib/locale';

const RetroHomePage = () => {
  const location = useLocation();
  const { t } = useI18n();

  useEffect(() => {
    if (!location.hash) return;
    const targetId = location.hash.slice(1);
    const attempt = (retries: number) => {
      if (scrollToSection(targetId)) return;
      if (retries <= 0) return;
      window.setTimeout(() => attempt(retries - 1), 60);
    };
    attempt(10);
  }, [location.hash, location.key]);

  return (
    <div className="retro-container">
      <Hero />

      <section id="about" className="retro-section about-section motion-section motion-delay-2">
        <h2 className="retro-section-title">{t.about.title}</h2>
        <Services />
        <AboutMe />
      </section>

      <CourseCatalog />

      <ReviewsSection />
    </div>
  );
};

export default RetroHomePage;
