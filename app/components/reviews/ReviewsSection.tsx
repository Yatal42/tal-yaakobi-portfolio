import { useState } from "react";
import ReviewsCarousel from "./ReviewsCarousel";
import ReviewFormModal from "./ReviewFormModal";
import { reviews } from "~/data/reviews";

export default function ReviewsSection() {
  const [isFormOpen, setIsFormOpen] = useState(false);

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
      />
    </section>
  );
}
