import { createCookieSessionStorage, redirect } from "react-router";

export type AuthUser = {
  id: string;
  email: string;
  name: string;
};

type SessionData = {
  user?: AuthUser;
  oauthState?: string;
  returnTo?: string;
};

const sessionSecret = process.env.SESSION_SECRET ?? "dev-session-secret";

const authSession = createCookieSessionStorage<SessionData>({
  cookie: {
    name: "__auth",
    httpOnly: true,
    path: "/",
    sameSite: "lax",
    secrets: [sessionSecret],
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 14,
  },
});

export async function getUser(request: Request): Promise<AuthUser | null> {
  const session = await authSession.getSession(request.headers.get("Cookie"));
  return session.get("user") ?? null;
}

export async function requireUser(request: Request, returnTo: string) {
  const user = await getUser(request);
  if (user) return user;
  const url = new URL(googleAuthConfigured() ? "/auth/google" : "/login", request.url);
  url.searchParams.set("returnTo", returnTo);
  throw redirect(url.pathname + url.search);
}

export function safeReturnTo(value: string | null) {
  if (!value || !value.startsWith("/") || value.startsWith("//")) return "/courses";
  return value;
}

export async function startGoogleLogin(request: Request) {
  const returnTo = safeReturnTo(new URL(request.url).searchParams.get("returnTo"));
  const state = crypto.randomUUID();
  const session = await authSession.getSession(request.headers.get("Cookie"));
  session.set("oauthState", state);
  session.set("returnTo", returnTo);
  const google = new URL("https://accounts.google.com/o/oauth2/v2/auth");
  google.searchParams.set("client_id", process.env.GOOGLE_CLIENT_ID ?? "");
  google.searchParams.set("redirect_uri", callbackUrl(request));
  google.searchParams.set("response_type", "code");
  google.searchParams.set("scope", "openid email profile");
  google.searchParams.set("state", state);
  google.searchParams.set("prompt", "select_account");
  return redirect(google.toString(), {
    headers: { "Set-Cookie": await authSession.commitSession(session) },
  });
}

export function googleAuthConfigured() {
  return Boolean(process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET);
}

export async function finishGoogleLogin(request: Request) {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  const state = url.searchParams.get("state");
  const session = await authSession.getSession(request.headers.get("Cookie"));
  const expectedState = session.get("oauthState");
  const returnTo = safeReturnTo(session.get("returnTo") ?? null);
  session.unset("oauthState");
  session.unset("returnTo");

  if (!code || !state || !expectedState || state !== expectedState) {
    throw redirect("/login?error=google", {
      headers: { "Set-Cookie": await authSession.commitSession(session) },
    });
  }

  const user = await fetchGoogleUser(code, callbackUrl(request));
  if (!user) {
    throw redirect("/login?error=google", {
      headers: { "Set-Cookie": await authSession.commitSession(session) },
    });
  }

  session.set("user", user);
  throw redirect(returnTo, {
    headers: { "Set-Cookie": await authSession.commitSession(session) },
  });
}

export async function logout(request: Request) {
  const session = await authSession.getSession(request.headers.get("Cookie"));
  return redirect("/", {
    headers: { "Set-Cookie": await authSession.destroySession(session) },
  });
}

function callbackUrl(request: Request) {
  return new URL("/auth/google/callback", request.url).toString();
}

async function fetchGoogleUser(code: string, redirectUri: string): Promise<AuthUser | null> {
  const clientId = process.env.GOOGLE_CLIENT_ID;
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
  if (!clientId || !clientSecret) return null;

  const tokenResponse = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      code,
      client_id: clientId,
      client_secret: clientSecret,
      redirect_uri: redirectUri,
      grant_type: "authorization_code",
    }),
  });
  if (!tokenResponse.ok) return null;
  const token = (await tokenResponse.json()) as { access_token?: string };
  if (!token.access_token) return null;

  const profileResponse = await fetch("https://openidconnect.googleapis.com/v1/userinfo", {
    headers: { Authorization: `Bearer ${token.access_token}` },
  });
  if (!profileResponse.ok) return null;
  const profile = (await profileResponse.json()) as {
    sub?: string;
    email?: string;
    name?: string;
    email_verified?: boolean;
  };
  if (!profile.sub || !profile.email || profile.email_verified === false) return null;
  return {
    id: profile.sub,
    email: profile.email,
    name: profile.name || profile.email,
  };
}
