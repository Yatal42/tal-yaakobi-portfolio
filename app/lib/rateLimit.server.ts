const buckets = new Map<string, Map<string, number[]>>();

export function isRateLimited(scope: string, key: string, windowMs: number, maxAttempts: number): boolean {
  let bucket = buckets.get(scope);
  if (!bucket) {
    bucket = new Map();
    buckets.set(scope, bucket);
  }

  const now = Date.now();
  const attempts = (bucket.get(key) ?? []).filter((timestamp) => now - timestamp <= windowMs);

  if (attempts.length >= maxAttempts) {
    bucket.set(key, attempts);
    return true;
  }

  attempts.push(now);
  bucket.set(key, attempts);
  return false;
}
