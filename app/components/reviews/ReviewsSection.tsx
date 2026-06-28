import { useEffect, useState } from "react";
import type { Review } from "~/types/review";
import ReviewForm from "./ReviewForm";
import ReviewsList from "./ReviewsList";

export default function ReviewsSection() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadReviews = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/reviews");
      const data = await res.json();
      if (!res.ok) {
        setError(data?.error || "Unable to load reviews right now.");
        return;
      }
      setReviews(Array.isArray(data?.reviews) ? data.reviews : []);
    } catch (fetchError) {
      setError(`Network error: ${(fetchError as Error).message}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void loadReviews();
  }, []);

  return (
    <section id="reviews" className="retro-section reviews-section">
      <h2 className="retro-section-title">Reviews</h2>
      <p className="reviews-subtitle">
        Honest feedback from collaborators, students, and teams. New reviews are moderated before publishing.
      </p>
      <div className="reviews-layout">
        <ReviewForm onSubmitted={() => void loadReviews()} />
        <ReviewsList reviews={reviews} loading={loading} error={error} />
      </div>
    </section>
  );
}
