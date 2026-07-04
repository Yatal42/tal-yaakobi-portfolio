import type { ReviewInput } from "~/types/review";

const nameMin = 2;
const nameMax = 80;
const roleMax = 120;
const messageMin = 20;
const messageMax = 800;

export function parseReviewInput(raw: unknown): { value?: ReviewInput; error?: string } {
  if (!raw || typeof raw !== "object") {
    return { error: "Invalid request payload." };
  }

  const obj = raw as Record<string, unknown>;
  const name = String(obj.name ?? "").trim();
  const role = String(obj.role ?? "").trim();
  const message = String(obj.message ?? "").trim();
  const rating = Number(obj.rating);

  if (name.length < nameMin || name.length > nameMax) {
    return { error: `Name must be between ${nameMin} and ${nameMax} characters.` };
  }
  if (role.length > roleMax) {
    return { error: `Role must be up to ${roleMax} characters.` };
  }
  if (message.length < messageMin || message.length > messageMax) {
    return { error: `Review must be between ${messageMin} and ${messageMax} characters.` };
  }
  if (!Number.isInteger(rating) || rating < 1 || rating > 5) {
    return { error: "Rating must be a whole number between 1 and 5." };
  }
  if (/https?:\/\//i.test(message)) {
    return { error: "Links are not allowed in reviews." };
  }

  return {
    value: {
      name,
      role,
      message,
      rating,
    },
  };
}
