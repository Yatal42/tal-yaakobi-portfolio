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

const isProduction = process.env.NODE_ENV === "production";

function sessionSecret() {
  const secret = process.env.SESSION_SECRET;
  if (secret) return secret;
  if (isProduction) throw new Error("SESSION_SECRET must be set in production.");
  return "dev-session-secret";
}

let storage: ReturnType<typeof createCookieSessionStorage<SessionData>> | null = null;

function authSession() {
  storage ??= createCookieSessionStorage<SessionData>({
    cookie: {
      name: "__auth",
      httpOnly: true,
      path: "/",
      sameSite: "lax",
      secrets: [sessionSecret()],
      secure: isProduction,
      maxAge: 60 * 60 * 24 * 14,
    },
  });
  return storage;
}

export function googleAuthConfigured() {
  return Boolean(process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET);
}

export async function getUser(request: Request): Promise<AuthUser | null> {
  const session = await authSession().getSession(request.headers.get("Cookie"));
  return session.get("user") ?? null;
}

export async function requireUser(request: Request, returnTo: string) {
  const user = await getUser(request);
  if (user) return user;
  throw redirect(`/auth/google?returnTo=${encodeURIComponent(returnTo)}`);
}

export function safeReturnTo(value: string | null | undefined) {
  if (!value || !value.startsWith("/") || value.startsWith("//") || value.startsWith("/\\")) return "/";
  return value;
}

export function withAuthError(returnTo: string) {
  const [path] = returnTo.split(/[?#]/);
  return `${path}?auth=error`;
}

export async function startGoogleLogin(request: Request) {
  const returnTo = safeReturnTo(new URL(request.url).searchParams.get("returnTo"));
  if (!googleAuthConfigured()) throw redirect(withAuthError(returnTo));

  const state = crypto.randomUUID();
  const session = await authSession().getSession(request.headers.get("Cookie"));
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
    headers: { "Set-Cookie": await authSession().commitSession(session) },
  });
}

export async function finishGoogleLogin(request: Request) {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  const state = url.searchParams.get("state");
  const session = await authSession().getSession(request.headers.get("Cookie"));
  const expectedState = session.get("oauthState");
  const returnTo = safeReturnTo(session.get("returnTo"));
  session.unset("oauthState");
  session.unset("returnTo");

  const user =
    code && state && expectedState && state === expectedState
      ? await fetchGoogleUser(code, callbackUrl(request))
      : null;

  if (!user) {
    throw redirect(withAuthError(returnTo), {
      headers: { "Set-Cookie": await authSession().commitSession(session) },
    });
  }

  session.set("user", user);
  throw redirect(returnTo, {
    headers: { "Set-Cookie": await authSession().commitSession(session) },
  });
}

export async function logout(request: Request, returnTo: string) {
  const session = await authSession().getSession(request.headers.get("Cookie"));
  return redirect(safeReturnTo(returnTo), {
    headers: { "Set-Cookie": await authSession().destroySession(session) },
  });
}

function callbackUrl(request: Request) {
  const base = process.env.PUBLIC_SITE_URL ?? new URL(request.url).origin;
  return new URL("/auth/google/callback", base).toString();
}

async function fetchGoogleUser(code: string, redirectUri: string): Promise<AuthUser | null> {
  const clientId = process.env.GOOGLE_CLIENT_ID;
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
  if (!clientId || !clientSecret) return null;

  try {
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
    if (!profile.sub || !profile.email || profile.email_verified !== true) return null;

    return {
      id: profile.sub,
      email: profile.email.toLowerCase(),
      name: profile.name || profile.email,
    };
  } catch {
    return null;
  }
}
