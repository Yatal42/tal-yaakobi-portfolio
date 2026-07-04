import { useCallback, useEffect, useRef, useState } from "react";
import NavigationButton from "../NavigationButton";
import type { Review } from "~/types/review";

interface ReviewsCarouselProps {
  reviews: Review[];
  autoPlayIntervalMs?: number;
}

const ReviewsCarousel = ({
  reviews,
  autoPlayIntervalMs = 10000,
}: ReviewsCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  }, [reviews.length]);

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  }, [reviews.length]);

  useEffect(() => {
    if (isPaused || reviews.length <= 1 || autoPlayIntervalMs <= 0) {
      return undefined;
    }
    intervalRef.current = setInterval(goNext, autoPlayIntervalMs);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [goNext, isPaused, reviews.length, autoPlayIntervalMs, currentIndex]);

  if (!reviews || reviews.length === 0) {
    return <div className="reviews-carousel-empty">No reviews available</div>;
  }

  const review = reviews[currentIndex];

  const handleManualNav = (fn: () => void) => {
    fn();
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  return (
    <div
      className="reviews-carousel"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      <NavigationButton
        direction="prev"
        onClick={() => handleManualNav(goPrev)}
        disabled={reviews.length <= 1}
        itemLabel="review"
      />

      <div className="reviews-carousel-content">
        <article className="review-carousel-card" dir="rtl" lang="he">
          <div className="review-carousel-header">
            <h3>{review.name}</h3>
            <span
              className="review-rating"
              aria-label={`${review.rating} out of 5`}
            >
              {"★".repeat(review.rating)}
              <span className="review-rating-empty">
                {"★".repeat(5 - review.rating)}
              </span>
            </span>
          </div>
          {review.role ? <p className="review-role">{review.role}</p> : null}
          <p className="review-carousel-message">{review.message}</p>
        </article>

        <div className="reviews-counter" aria-live="polite">
          <span>
            {currentIndex + 1} / {reviews.length}
          </span>
        </div>
      </div>

      <NavigationButton
        direction="next"
        onClick={() => handleManualNav(goNext)}
        disabled={reviews.length <= 1}
        itemLabel="review"
      />
    </div>
  );
};

export default ReviewsCarousel;
