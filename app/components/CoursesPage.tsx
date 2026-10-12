import PageHero from "./PageHero";
import { courses } from "../data/courses";

const CoursesPage = () => {
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
              <p className="catalog-status">Coming soon</p>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
};

export default CoursesPage;
