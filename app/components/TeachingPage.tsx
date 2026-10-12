import PageHero from "./PageHero";
import Services from "./Services";

const TeachingPage = () => {
  return (
    <div className="retro-container">
      <PageHero
        id="teaching-intro"
        imageSide="right"
        heading="TEACHING"
        subheading="TUTORING · RESEARCH"
        intro="Private tutoring for university students, and research on how computer science is taught and how it could be taught better."
      />

      <Services />
    </div>
  );
};

export default TeachingPage;
