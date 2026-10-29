# Tal Yaakobi - Portfolio Website

My personal portfolio website showcasing my work as a creative developer focused on accessibility solutions and innovative experiences.

## 👩‍💻 About Me
Computer science graduate who transitioned from TV production to development. At 29, I bring creative energy and problem-solving skills from my production background into building thoughtful software that makes a real difference.

Currently exploring new technologies and documenting my journey on [LinkedIn](https://www.linkedin.com/in/tal-yaakobi-191059227/).

## Environment Variables

New reviews from the "Leave a Review" form are stored as pending in Postgres (Neon). They only appear on the site after an admin approves them at `/admin/reviews`, which is available to the emails listed in `app/lib/access.server.ts`.

| Variable | Required | Description |
| --- | --- | --- |
| `DATABASE_URL` | For reviews | Postgres connection string where reviews are stored. The table is created automatically. |
| `RESEND_API_KEY` | No | API key from [resend.com](https://resend.com) used to email a notification for each new review. |
| `REVIEWS_NOTIFY_EMAIL` | No | The email address that receives the notification. |
| `RESEND_FROM_EMAIL` | No | Sender address for the notification email. Defaults to `onboarding@resend.dev`. |
| `GOOGLE_CLIENT_ID` | For course sign-in | Google OAuth client id. Authorized redirect URI: `https://<domain>/auth/google/callback`. |
| `GOOGLE_CLIENT_SECRET` | For course sign-in | Google OAuth client secret. |
| `SESSION_SECRET` | In production | Signs the sign-in cookie. The server refuses to sign anyone in without it in production. |
| `PUBLIC_SITE_URL` | No | Public origin used for the Google callback, e.g. `https://www.talyaakobi.com`. Defaults to the request origin. |
| `COURSE_ACCESS` | No | Extra course access on top of the allowlist in `app/lib/access.server.ts`, as `email:courseId` pairs separated by commas. Use `email:*` for all courses. |

Without `DATABASE_URL` the review form shows an error. Without the Resend variables reviews are still stored, just without an email notification.

---

*Built with ❤️ using React Router v7*
