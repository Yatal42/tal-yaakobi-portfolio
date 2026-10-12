import type { ReviewInput } from "~/types/review";

export function isReviewEmailConfigured() {
  return Boolean(process.env.RESEND_API_KEY && process.env.REVIEWS_NOTIFY_EMAIL);
}

export async function sendReviewNotification(review: ReviewInput): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.REVIEWS_NOTIFY_EMAIL;
  if (!apiKey || !to) {
    console.error("[reviews] Email notification skipped: RESEND_API_KEY or REVIEWS_NOTIFY_EMAIL is not set.");
    return false;
  }

  const from = process.env.RESEND_FROM_EMAIL || "Portfolio Reviews <onboarding@resend.dev>";
  const stars = "★".repeat(review.rating) + "☆".repeat(5 - review.rating);

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to,
        subject: `New portfolio review from ${review.name}`,
        text: [
          `Name: ${review.name}`,
          `Role: ${review.role || "-"}`,
          `Rating: ${stars} (${review.rating}/5)`,
          "",
          review.message,
        ].join("\n"),
      }),
    });

    if (!response.ok) {
      const body = await response.text();
      console.error("[reviews] Resend request failed:", response.status, body);
      return false;
    }

    return true;
  } catch (error) {
    console.error("[reviews] Resend request threw:", (error as Error).message);
    return false;
  }
}
