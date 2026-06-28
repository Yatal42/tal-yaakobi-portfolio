import { sql } from "@vercel/postgres";

let initialized = false;

export function isReviewsDbConfigured() {
  return Boolean(process.env.POSTGRES_URL || process.env.DATABASE_URL);
}

export async function ensureReviewsSchema() {
  if (initialized) return;
  await sql`
    CREATE TABLE IF NOT EXISTS reviews (
      id BIGSERIAL PRIMARY KEY,
      name VARCHAR(80) NOT NULL,
      role VARCHAR(120) NOT NULL DEFAULT '',
      message VARCHAR(800) NOT NULL,
      rating SMALLINT NOT NULL CHECK (rating BETWEEN 1 AND 5),
      status VARCHAR(16) NOT NULL DEFAULT 'pending',
      ip_hash VARCHAR(128) NOT NULL,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `;
  await sql`CREATE INDEX IF NOT EXISTS reviews_status_created_at_idx ON reviews (status, created_at DESC)`;
  initialized = true;
}
