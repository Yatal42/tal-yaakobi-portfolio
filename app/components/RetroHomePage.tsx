import { useEffect } from 'react';
import { useLocation } from 'react-router';
import Hero from './Hero';
import About from './About';
import TeachingApproach from './TeachingApproach';
import PersonalArea from './PersonalArea';
import CourseCatalog from './CourseCatalog';
import ReviewsSection from "./reviews/ReviewsSection";
import { scrollToSection } from '../lib/scroll';

const RetroHomePage = () => {
  const location = useLocation();

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
    <>
      <Hero />
      <About />
      <TeachingApproach />
      <PersonalArea />
      <CourseCatalog />
      <ReviewsSection />
    </>
  );
};

export default RetroHomePage;
