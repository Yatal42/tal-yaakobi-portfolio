import { createHash } from "node:crypto";

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
