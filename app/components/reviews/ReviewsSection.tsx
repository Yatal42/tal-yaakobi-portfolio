import { useState } from "react";
import ReviewsCarousel from "./ReviewsCarousel";
import ReviewFormModal from "./ReviewFormModal";
import { reviews } from "~/data/reviews";
import { useI18n } from "../../lib/locale";

export default function ReviewsSection() {
  const { t } = useI18n();
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <section
      id="reviews"
      className="retro-section reviews-section motion-section motion-delay-2"
    >
      <h2 className="retro-section-title">{t.reviews.title}</h2>
      <ReviewsCarousel reviews={reviews} />

      <div className="reviews-cta">
        <button
          type="button"
          className="reviews-cta-button"
          onClick={() => setIsFormOpen(true)}
        >
          {t.reviews.leave}
        </button>
      </div>

      <ReviewFormModal
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
      />
    </section>
  );
}
