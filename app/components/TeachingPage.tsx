import PageHero from "./PageHero";
import Services from "./Services";

const TeachingPage = () => {
  return (
    <div className="retro-container">
      <PageHero
        id="teaching-intro"
        imageSide="right"
        heading="TEACHING"
        subheading="TUTORING · COURSES · RESEARCH"
        intro="Three parts of one job: private tutoring, full courses that mirror the university syllabus, and research on how CS should be taught."
      />

      <Services />
    </div>
  );
};

export default TeachingPage;
