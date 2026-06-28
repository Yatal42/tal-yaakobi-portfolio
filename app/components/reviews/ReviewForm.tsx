import { useState } from "react";

interface Props {
  onSubmitted: () => void;
}

export default function ReviewForm({ onSubmitted }: Props) {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [rating, setRating] = useState(5);
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{ kind: "error" | "success"; text: string } | null>(null);

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    setSubmitting(true);
    setFeedback(null);
    try {
      const res = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, role, rating, message }),
      });
      const data = await res.json();
      if (!res.ok) {
        setFeedback({ kind: "error", text: data?.error || "Could not submit your review." });
        return;
      }
      setFeedback({
        kind: "success",
        text: data?.message || "Thanks! Your review was submitted and is waiting for approval.",
      });
      setName("");
      setRole("");
      setRating(5);
      setMessage("");
      onSubmitted();
    } catch (error) {
      setFeedback({ kind: "error", text: `Network error: ${(error as Error).message}` });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form className="reviews-form" onSubmit={submit}>
      <div className="reviews-form-row">
        <label className="reviews-label" htmlFor="review-name">Name</label>
        <input
          id="review-name"
          className="reviews-input"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          minLength={2}
          maxLength={80}
          required
        />
      </div>

      <div className="reviews-form-row">
        <label className="reviews-label" htmlFor="review-role">Role (Optional)</label>
        <input
          id="review-role"
          className="reviews-input"
          type="text"
          value={role}
          onChange={(event) => setRole(event.target.value)}
          maxLength={120}
        />
      </div>

      <div className="reviews-form-row">
        <label className="reviews-label" htmlFor="review-rating">Rating</label>
        <select
          id="review-rating"
          className="reviews-input"
          value={rating}
          onChange={(event) => setRating(Number(event.target.value))}
        >
          <option value={5}>5 - Excellent</option>
          <option value={4}>4 - Very Good</option>
          <option value={3}>3 - Good</option>
          <option value={2}>2 - Fair</option>
          <option value={1}>1 - Needs Improvement</option>
        </select>
      </div>

      <div className="reviews-form-row">
        <label className="reviews-label" htmlFor="review-message">Review</label>
        <textarea
          id="review-message"
          className="reviews-textarea"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          minLength={20}
          maxLength={800}
          required
        />
      </div>

      <button className="reviews-submit" type="submit" disabled={submitting}>
        {submitting ? "Submitting..." : "Submit Review"}
      </button>

      {feedback ? (
        <div className={`reviews-feedback ${feedback.kind}`} role={feedback.kind === "error" ? "alert" : "status"}>
          {feedback.text}
        </div>
      ) : null}
    </form>
  );
}
