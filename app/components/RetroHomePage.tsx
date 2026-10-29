import { useEffect } from 'react';
import { useLocation } from 'react-router';
import Hero from './Hero';
import About from './About';
import TeachingApproach from './TeachingApproach';
import CourseCatalog from './CourseCatalog';
import ReviewsSection from "./reviews/ReviewsSection";
import { scrollToSection } from '../lib/scroll';
import type { Review } from '../types/review';

const RetroHomePage = ({ reviews }: { reviews: Review[] }) => {
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
      <CourseCatalog />
      <ReviewsSection reviews={reviews} />
    </>
  );
};

export default RetroHomePage;
