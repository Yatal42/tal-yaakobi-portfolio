import { neon } from "@neondatabase/serverless";
import type { Review, ReviewInput, ReviewStatus, StoredReview } from "~/types/review";

type Row = {
  id: string;
  name: string;
  role: string;
  message: string;
  rating: number;
  status: ReviewStatus;
  created_at: string | Date;
};

let ready: Promise<void> | null = null;

function databaseUrl() {
  const url = process.env.DATABASE_URL?.trim();
  return url && /^postgres(ql)?:\/\//.test(url) ? url : null;
}

function client() {
  const url = databaseUrl();
  return url ? neon(url) : null;
}

export function isReviewStoreConfigured() {
  return databaseUrl() !== null;
}

async function ensureTable() {
  const sql = client();
  if (!sql) throw new Error("DATABASE_URL is not set.");
  ready ??= (async () => {
    await sql`
      CREATE TABLE IF NOT EXISTS site_reviews (
        id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
        name text NOT NULL,
        role text NOT NULL DEFAULT '',
        message text NOT NULL,
        rating smallint NOT NULL CHECK (rating BETWEEN 1 AND 5),
        status text NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
        created_at timestamptz NOT NULL DEFAULT now(),
        decided_at timestamptz
      )
    `;
  })().catch((error) => {
    ready = null;
    throw error;
  });
  await ready;
  return sql;
}

function toReview(row: Row): StoredReview {
  return {
    id: row.id,
    name: row.name,
    role: row.role,
    message: row.message,
    rating: row.rating,
    status: row.status,
    createdAt: new Date(row.created_at).toISOString(),
  };
}

export async function addPendingReview(review: ReviewInput) {
  const sql = await ensureTable();
  const rows = (await sql`
    INSERT INTO site_reviews (name, role, message, rating)
    VALUES (${review.name}, ${review.role}, ${review.message}, ${review.rating})
    RETURNING id
  `) as { id: string }[];
  return rows[0].id;
}

export async function listApprovedReviews(): Promise<Review[]> {
  if (!isReviewStoreConfigured()) return [];
  try {
    const sql = await ensureTable();
    const rows = (await sql`
      SELECT id, name, role, message, rating, status, created_at
      FROM site_reviews
      WHERE status = 'approved'
      ORDER BY decided_at DESC NULLS LAST, created_at DESC
    `) as Row[];
    return rows.map(({ id, name, role, message, rating }) => ({ id, name, role, message, rating }));
  } catch (error) {
    console.error("[reviews] Could not load approved reviews:", (error as Error).message);
    return [];
  }
}

export async function listAllReviews(): Promise<StoredReview[]> {
  const sql = await ensureTable();
  const rows = (await sql`
    SELECT id, name, role, message, rating, status, created_at
    FROM site_reviews
    ORDER BY created_at DESC
    LIMIT 200
  `) as Row[];
  return rows.map(toReview);
}

export async function setReviewStatus(id: string, status: ReviewStatus) {
  const sql = await ensureTable();
  await sql`
    UPDATE site_reviews
    SET status = ${status}, decided_at = now()
    WHERE id = ${id}
  `;
}

export async function deleteReview(id: string) {
  const sql = await ensureTable();
  await sql`DELETE FROM site_reviews WHERE id = ${id}`;
}
