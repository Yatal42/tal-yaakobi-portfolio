import { useState } from "react";
import ReviewsCarousel from "./ReviewsCarousel";
import ReviewFormModal from "./ReviewFormModal";
import SectionHeader from "../ui/SectionHeader";
import { reviews } from "~/data/reviews";
import { useI18n } from "../../lib/locale";

export default function ReviewsSection() {
  const { t } = useI18n();
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <section id="reviews" className="section" aria-labelledby="reviews-title">
      <div className="container">
        <SectionHeader
          eyebrow={t.reviews.eyebrow}
          title={t.reviews.title}
          id="reviews-title"
          aside={
            <button type="button" className="btn btn-secondary btn-sm" onClick={() => setIsFormOpen(true)}>
              {t.reviews.leave}
            </button>
          }
        />
        <ReviewsCarousel reviews={reviews} />
      </div>

      <ReviewFormModal isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </section>
  );
}
