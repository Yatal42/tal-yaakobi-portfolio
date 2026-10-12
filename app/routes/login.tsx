import type { LoaderFunctionArgs, MetaFunction } from "react-router";
import { Link, redirect, useLoaderData, useSearchParams } from "react-router";
import { getUser, googleAuthConfigured, safeReturnTo } from "~/lib/session.server";

export const meta: MetaFunction = () => [{ title: "Sign in | Tal Yaakobi" }];

export async function loader({ request }: LoaderFunctionArgs) {
  const user = await getUser(request);
  const returnTo = safeReturnTo(new URL(request.url).searchParams.get("returnTo"));
  if (user) throw redirect(returnTo);
  return { configured: googleAuthConfigured(), returnTo };
}

export default function LoginRoute() {
  const { configured, returnTo } = useLoaderData<typeof loader>();
  const [params] = useSearchParams();
  const failed = params.get("error") === "google";

  return (
    <div className="retro-container">
      <section className="retro-section login-section">
        <h1 className="pixel-heading">SIGN IN</h1>
        <p className="retro-text login-lead">
          Sign in with the Google account that has access to a course you bought.
        </p>
        {failed ? (
          <p className="login-error" role="alert">
            Google sign-in did not finish. Try again.
          </p>
        ) : null}
        {configured ? (
          <a className="hero-cta-primary login-google" href={`/auth/google?returnTo=${encodeURIComponent(returnTo)}`}>
            Sign in with Google
          </a>
        ) : (
          <p className="login-error" role="status">
            Google sign-in still needs GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET on the server.
          </p>
        )}
        <Link className="services-inline-link" to="/courses">
          Back to courses
        </Link>
      </section>
    </div>
  );
}
