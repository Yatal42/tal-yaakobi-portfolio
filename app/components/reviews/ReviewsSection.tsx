import { useEffect, useState } from "react";
import ReviewsCarousel from "./ReviewsCarousel";
import ReviewFormModal from "./ReviewFormModal";
import { mockReviews } from "~/data/reviews";
import type { Review } from "~/types/review";

export default function ReviewsSection() {
  const [apiReviews, setApiReviews] = useState<Review[]>([]);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const loadReviews = async () => {
    try {
      const res = await fetch("/api/reviews");
      if (!res.ok) return;
      const data = await res.json();
      if (Array.isArray(data?.reviews)) {
        setApiReviews(data.reviews);
      }
    } catch {
      // Silent - mock reviews will still display
    }
  };

  useEffect(() => {
    void loadReviews();
  }, []);

  const reviews = [...mockReviews, ...apiReviews];

  return (
    <section
      id="reviews"
      className="retro-section reviews-section motion-section motion-delay-2"
    >
      <h2 className="retro-section-title">Student Reviews</h2>
      <p className="reviews-subtitle">
        Feedback from students I've taught.
      </p>
      <ReviewsCarousel reviews={reviews} />

      <div className="reviews-cta">
        <button
          type="button"
          className="reviews-cta-button"
          onClick={() => setIsFormOpen(true)}
        >
          Leave a Review
        </button>
      </div>

      <ReviewFormModal
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        onSubmitted={() => {
          void loadReviews();
        }}
      />
    </section>
  );
}
