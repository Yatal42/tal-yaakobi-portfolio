# Tal Yaakobi - Portfolio Website

My personal portfolio website showcasing my work as a creative developer focused on accessibility solutions and innovative experiences.

## 👩‍💻 About Me
Computer science graduate who transitioned from TV production to development. At 29, I bring creative energy and problem-solving skills from my production background into building thoughtful software that makes a real difference.

Currently exploring new technologies and documenting my journey on [LinkedIn](https://www.linkedin.com/in/tal-yaakobi-191059227/).

## Environment Variables

The "Leave a Review" form emails new submissions instead of storing them anywhere - reviews are added manually to `app/data/reviews.ts` after reading the email.

| Variable | Required | Description |
| --- | --- | --- |
| `RESEND_API_KEY` | Yes | API key from [resend.com](https://resend.com) used to send the notification email. |
| `REVIEWS_NOTIFY_EMAIL` | Yes | The email address that receives new review submissions. |
| `RESEND_FROM_EMAIL` | No | Sender address for the notification email. Defaults to `onboarding@resend.dev`. |
| `GOOGLE_CLIENT_ID` | For course sign-in | Google OAuth client id. Authorized redirect URI: `https://<domain>/auth/google/callback`. |
| `GOOGLE_CLIENT_SECRET` | For course sign-in | Google OAuth client secret. |
| `SESSION_SECRET` | In production | Signs the sign-in cookie. The server refuses to sign anyone in without it in production. |
| `PUBLIC_SITE_URL` | No | Public origin used for the Google callback, e.g. `https://www.talyaakobi.com`. Defaults to the request origin. |
| `COURSE_ACCESS` | No | Extra course access on top of the allowlist in `app/lib/access.server.ts`, as `email:courseId` pairs separated by commas. Use `email:*` for all courses. |

If these are not set, the review form will show an error and no email will be sent.

---

*Built with ❤️ using React Router v7*
