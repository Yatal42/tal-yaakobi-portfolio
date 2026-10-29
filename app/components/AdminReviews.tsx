import { useFetcher } from "react-router";
import SectionHeader from "./ui/SectionHeader";
import Window from "./ui/Window";
import { useI18n } from "../lib/locale";
import type { ReviewStatus, StoredReview } from "../types/review";

interface AdminReviewsProps {
  configured: boolean;
  reviews: StoredReview[];
}

const groups: ReviewStatus[] = ["pending", "approved", "rejected"];

function ReviewActions({ review }: { review: StoredReview }) {
  const { t } = useI18n();
  const fetcher = useFetcher();
  const busy = fetcher.state !== "idle";

  const actions: { intent: string; label: string; className: string }[] =
    review.status === "pending"
      ? [
          { intent: "approve", label: t.admin.approve, className: "btn btn-primary btn-sm" },
          { intent: "reject", label: t.admin.reject, className: "btn btn-secondary btn-sm" },
        ]
      : review.status === "approved"
        ? [{ intent: "pending", label: t.admin.unpublish, className: "btn btn-secondary btn-sm" }]
        : [{ intent: "pending", label: t.admin.restore, className: "btn btn-secondary btn-sm" }];

  return (
    <fetcher.Form method="post" className="admin-actions">
      <input type="hidden" name="id" value={review.id} />
      {actions.map((action) => (
        <button key={action.intent} type="submit" name="intent" value={action.intent} className={action.className} disabled={busy}>
          {action.label}
        </button>
      ))}
      <button
        type="submit"
        name="intent"
        value="delete"
        className="btn-bevel admin-delete"
        disabled={busy}
        onClick={(event) => {
          if (!window.confirm(t.admin.confirmDelete)) event.preventDefault();
        }}
      >
        {t.admin.remove}
      </button>
    </fetcher.Form>
  );
}

export default function AdminReviews({ configured, reviews }: AdminReviewsProps) {
  const { locale, t } = useI18n();
  const dateFormat = new Intl.DateTimeFormat(locale === "he" ? "he-IL" : "en-GB", {
    dateStyle: "medium",
    timeStyle: "short",
  });

  return (
    <section className="section" aria-labelledby="admin-title">
      <div className="container">
        <SectionHeader eyebrow={t.admin.eyebrow} title={t.admin.title} id="admin-title" />

        {!configured ? (
          <p className="card-text">{t.admin.notConfigured}</p>
        ) : (
          groups.map((status) => {
            const items = reviews.filter((review) => review.status === status);
            return (
              <div key={status} className="admin-group">
                <h2 className="subsection-title">
                  {t.admin.groups[status]} <span className="admin-count">({items.length})</span>
                </h2>
                {items.length === 0 ? (
                  <p className="card-text">{t.admin.empty}</p>
                ) : (
                  <ul className="admin-list">
                    {items.map((review) => (
                      <li key={review.id}>
                        <Window title={`review_${review.id.slice(0, 8)}.txt`}>
                          <div className="admin-review-head">
                            <strong>{review.name}</strong>
                            {review.role ? <span className="admin-meta">{review.role}</span> : null}
                            <span className="admin-stars" aria-label={`${review.rating} ${t.reviews.rating}`}>
                              {"★".repeat(review.rating)}
                              {"☆".repeat(5 - review.rating)}
                            </span>
                            <span className="admin-meta">{dateFormat.format(new Date(review.createdAt))}</span>
                          </div>
                          <p className="admin-message">{review.message}</p>
                          <ReviewActions review={review} />
                        </Window>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })
        )}
      </div>
    </section>
  );
}
