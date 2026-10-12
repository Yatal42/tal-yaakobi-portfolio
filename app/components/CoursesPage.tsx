import { Link, useLoaderData } from "react-router";
import PageHero from "./PageHero";
import { courses } from "../data/courses";
import type { loader } from "../routes/courses";

const CoursesPage = () => {
  const { user, ownedIds } = useLoaderData<typeof loader>();
  const ownedCourses = courses.filter((course) => ownedIds.includes(course.id));
  return (
    <div className="retro-container">
      <PageHero
        id="courses-intro"
        imageSide="right"
        heading="COURSES"
        subheading="COMING SOON"
        intro="Full independent editions I'm preparing to sell. Each course will include structured lessons, recordings, materials, and practice."
      />

      <section id="catalog" className="retro-section services-section motion-section motion-delay-1">
        <h2 className="retro-section-title">Course Catalog</h2>
        <p className="services-subtitle">
          These are the courses on the way. Get in touch if you want to know when one opens.
        </p>

        <ol className="services-list catalog-list">
          {courses.map((course) => (
            <li key={course.id} className="services-card catalog-card">
              <h3 className="services-card-title">{course.title}</h3>
              {ownedIds.includes(course.id) ? (
                <Link className="catalog-status catalog-open" to={`/courses/${course.id}`}>
                  Open course
                </Link>
              ) : (
                <p className="catalog-status">Coming soon</p>
              )}
            </li>
          ))}
        </ol>
        <div className="catalog-access">
          {user ? (
            <p className="services-subjects-note">Signed in as {user.name}.</p>
          ) : null}
          {!user ? (
            <Link className="hero-cta-primary" to="/login?returnTo=/courses">
              Sign in with Google
            </Link>
          ) : (
            <form method="post" action="/logout">
              <button className="classroom-signout" type="submit">
                Sign out
              </button>
            </form>
          )}
          <p className="services-subjects-note">
            {user
              ? ownedCourses.length === 0
                ? "This account has not bought a course. Buying on the site is not open yet."
                : "Open a course from the list above. Buying on the site is not open yet."
              : "Sign in to see a course you already bought. Buying on the site is not open yet."}
          </p>
        </div>
      </section>
    </div>
  );
};

export default CoursesPage;
