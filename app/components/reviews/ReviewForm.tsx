import { useState } from "react";
import { translateReviewApi, useI18n } from "../../lib/locale";

export default function ReviewForm() {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [rating, setRating] = useState(5);
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const { locale, t } = useI18n();
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
        setFeedback({
          kind: "error",
          text: translateReviewApi(data?.error || t.reviewForm.fallbackError, locale),
        });
        return;
      }
      setFeedback({
        kind: "success",
        text: translateReviewApi(
          data?.message || "Thanks! Your review was sent and will be added to the site soon.",
          locale
        ),
      });
      setName("");
      setRole("");
      setRating(5);
      setMessage("");
    } catch {
      setFeedback({ kind: "error", text: t.reviewForm.network });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form className="reviews-form" onSubmit={submit}>
      <div className="reviews-form-row">
        <label className="reviews-label" htmlFor="review-name">{t.reviewForm.name}</label>
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
        <label className="reviews-label" htmlFor="review-role">{t.reviewForm.role}</label>
        <input
          id="review-role"
          className="reviews-input"
          type="text"
          value={role}
          onChange={(event) => setRole(event.target.value)}
          maxLength={120}
          placeholder={t.reviewForm.rolePlaceholder}
        />
      </div>

      <div className="reviews-form-row">
        <label className="reviews-label" htmlFor="review-rating">{t.reviewForm.rating}</label>
        <select
          id="review-rating"
          className="reviews-input"
          value={rating}
          onChange={(event) => setRating(Number(event.target.value))}
        >
          <option value={5}>{t.reviewForm.ratings[0]}</option>
          <option value={4}>{t.reviewForm.ratings[1]}</option>
          <option value={3}>{t.reviewForm.ratings[2]}</option>
          <option value={2}>{t.reviewForm.ratings[3]}</option>
          <option value={1}>{t.reviewForm.ratings[4]}</option>
        </select>
      </div>

      <div className="reviews-form-row">
        <label className="reviews-label" htmlFor="review-message">{t.reviewForm.message}</label>
        <textarea
          id="review-message"
          className="reviews-textarea"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          dir="auto"
          minLength={20}
          maxLength={800}
          required
          placeholder={t.reviewForm.messagePlaceholder}
        />
      </div>

      <button className="reviews-submit" type="submit" disabled={submitting}>
        {submitting ? t.reviewForm.submitting : t.reviewForm.submit}
      </button>

      <p className="reviews-form-note">
        {t.reviewForm.note}
      </p>

      {feedback ? (
        <div className={`reviews-feedback ${feedback.kind}`} role={feedback.kind === "error" ? "alert" : "status"}>
          {feedback.text}
        </div>
      ) : null}
    </form>
  );
}
