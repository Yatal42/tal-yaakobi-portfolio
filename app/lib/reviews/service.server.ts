import { createHash } from "node:crypto";
import { sql } from "@vercel/postgres";
import { ensureReviewsSchema } from "./db.server";
import type { Review, ReviewInput, ReviewStatus } from "~/types/review";

const rateWindowMs = 10 * 60 * 1000;
const rateMaxSubmissions = 3;
const rateStore = new Map<string, number[]>();

function toReview(row: {
  id: string | number;
  name: string;
  role: string;
  message: string;
  rating: number;
  status: string;
  created_at: Date | string;
}): Review {
  return {
    id: String(row.id),
    name: row.name,
    role: row.role ?? "",
    message: row.message,
    rating: Number(row.rating),
    status: row.status as ReviewStatus,
    createdAt: new Date(row.created_at).toISOString(),
  };
}

export function getClientIp(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    const first = forwarded.split(",")[0]?.trim();
    if (first) return first;
  }
  return "unknown";
}

export function getIpHash(ip: string) {
  return createHash("sha256").update(ip).digest("hex");
}

export function isRateLimited(ipHash: string) {
  const now = Date.now();
  const attempts = rateStore.get(ipHash) ?? [];
  const validAttempts = attempts.filter((timestamp) => now - timestamp <= rateWindowMs);
  if (validAttempts.length >= rateMaxSubmissions) {
    rateStore.set(ipHash, validAttempts);
    return true;
  }
  validAttempts.push(now);
  rateStore.set(ipHash, validAttempts);
  return false;
}

export async function createPendingReview(input: ReviewInput, ipHash: string) {
  await ensureReviewsSchema();
  await sql`
    INSERT INTO reviews (name, role, message, rating, status, ip_hash)
    VALUES (${input.name}, ${input.role}, ${input.message}, ${input.rating}, 'pending', ${ipHash})
  `;
}

export async function listApprovedReviews(limit = 20): Promise<Review[]> {
  await ensureReviewsSchema();
  const { rows } = await sql<{
    id: string | number;
    name: string;
    role: string;
    message: string;
    rating: number;
    status: string;
    created_at: Date | string;
  }>`
    SELECT id, name, role, message, rating, status, created_at
    FROM reviews
    WHERE status = 'approved'
    ORDER BY created_at DESC
    LIMIT ${limit}
  `;
  return rows.map(toReview);
}

export async function listPendingReviews(limit = 50): Promise<Review[]> {
  await ensureReviewsSchema();
  const { rows } = await sql<{
    id: string | number;
    name: string;
    role: string;
    message: string;
    rating: number;
    status: string;
    created_at: Date | string;
  }>`
    SELECT id, name, role, message, rating, status, created_at
    FROM reviews
    WHERE status = 'pending'
    ORDER BY created_at DESC
    LIMIT ${limit}
  `;
  return rows.map(toReview);
}

export async function updateReviewStatus(id: string, status: Exclude<ReviewStatus, "pending">) {
  await ensureReviewsSchema();
  const { rowCount } = await sql`
    UPDATE reviews
    SET status = ${status}
    WHERE id = ${id}
  `;
  return (rowCount ?? 0) > 0;
}
