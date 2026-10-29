import { useCallback, useEffect, useState } from "react";
import NavigationButton from "../NavigationButton";
import Window from "../ui/Window";
import type { Review } from "~/types/review";
import { useI18n } from "../../lib/locale";

interface ReviewsCarouselProps {
  reviews: Review[];
  autoPlayIntervalMs?: number;
}

const ReviewsCarousel = ({ reviews, autoPlayIntervalMs = 10000 }: ReviewsCarouselProps) => {
  const { t } = useI18n();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [autoPlay, setAutoPlay] = useState(true);

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  }, [reviews.length]);

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  }, [reviews.length]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) setAutoPlay(false);
  }, []);

  useEffect(() => {
    if (!autoPlay || isPaused || reviews.length <= 1 || autoPlayIntervalMs <= 0) return undefined;
    const id = window.setInterval(goNext, autoPlayIntervalMs);
    return () => window.clearInterval(id);
  }, [autoPlay, goNext, isPaused, reviews.length, autoPlayIntervalMs, currentIndex]);

  if (!reviews || reviews.length === 0) {
    return <p className="reviews-empty">{t.reviews.empty}</p>;
  }

  const review = reviews[currentIndex];

  const handleManualNav = (fn: () => void) => {
    setAutoPlay(false);
    fn();
  };

  return (
    <div
      className="reviews-carousel"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      <Window title="reviews.txt" className="review-window">
        <figure className="review" dir="rtl" lang="he" aria-live="polite">
          <p
            className="review-stars"
            role="img"
            aria-label={`${review.rating} ${t.reviews.rating}`}
          >
            {"★".repeat(review.rating)}
            <span className="review-stars-empty">{"★".repeat(5 - review.rating)}</span>
          </p>
          <blockquote className="review-quote">
            <p>{review.message}</p>
          </blockquote>
          <figcaption className="review-author">
            {review.name}
            {review.role ? <span className="review-role"> · {review.role}</span> : null}
          </figcaption>
        </figure>
      </Window>

      <div className="carousel-controls">
        <NavigationButton
          direction="prev"
          onClick={() => handleManualNav(goPrev)}
          disabled={reviews.length <= 1}
          ariaLabel={t.reviews.previous}
        />
        <span className="carousel-counter" dir="ltr">
          {currentIndex + 1} / {reviews.length}
        </span>
        <NavigationButton
          direction="next"
          onClick={() => handleManualNav(goNext)}
          disabled={reviews.length <= 1}
          ariaLabel={t.reviews.next}
        />
      </div>
    </div>
  );
};

export default ReviewsCarousel;
