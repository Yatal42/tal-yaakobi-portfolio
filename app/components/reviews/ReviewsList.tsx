import type { Review } from "~/types/review";

interface Props {
  reviews: Review[];
  loading: boolean;
  error: string | null;
}

export default function ReviewsList({ reviews, loading, error }: Props) {
  if (loading) {
    return <div className="reviews-empty" role="status">Loading reviews...</div>;
  }

  if (error) {
    return <div className="reviews-empty" role="alert">{error}</div>;
  }

  if (reviews.length === 0) {
    return <div className="reviews-empty">No approved reviews yet. Be the first to submit one.</div>;
  }

  return (
    <div className="reviews-grid" role="list" aria-label="Approved reviews">
      {reviews.map((review) => (
        <article className="review-card" role="listitem" key={review.id}>
          <div className="review-header">
            <h3>{review.name}</h3>
            <span className="review-rating" aria-label={`${review.rating} out of 5`}>
              {"★".repeat(review.rating)}
            </span>
          </div>
          {review.role ? <p className="review-role">{review.role}</p> : null}
          <p className="review-message">{review.message}</p>
          <time className="review-date" dateTime={review.createdAt}>
            {new Date(review.createdAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </time>
        </article>
      ))}
    </div>
  );
}
