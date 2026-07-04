const services = [
  {
    id: "tutoring",
    title: "Private Tutoring",
    text: "One-on-one sessions, online or in person. We work at your pace, whether it's exam prep or full course coverage.",
  },
  {
    id: "courses",
    title: "Full Private Courses",
    text: "Complete independent editions of core CS courses. Structured lessons, recordings, materials, and practice included.",
  },
  {
    id: "research",
    title: "CS Education Research",
    text: "M.A. research at Bar-Ilan University on how computer science should be taught. The research and the teaching inform each other.",
  },
];

const subjects = [
  "Data Structures",
  "Algorithms",
  "Object-Oriented Programming",
  "Discrete Math 2",
  "Probability",
  "Infinitesimal Calculus 2",
  "Computer Systems",
  "Operating Systems",
  "Computer Networks",
  "Database Systems",
  "Software Engineering",
  "Automata",
  "Computability & Complexity",
  "Data Science",
  "Machine Learning",
];

const Services = () => {
  return (
    <section
      id="services"
      className="retro-section services-section motion-section motion-delay-1"
    >
      <h2 className="retro-section-title">What I Do</h2>
      <p className="services-subtitle">
        Private tutoring, full courses, and research into how computer science is taught.
      </p>

      <ol className="services-list">
        {services.map((service, index) => (
          <li key={service.id} className="services-card">
            <h3 className="services-card-title">
              <span className="services-card-num" aria-hidden="true">
                {index + 1}.
              </span>
              {service.title}
            </h3>
            <p className="services-card-text">{service.text}</p>
          </li>
        ))}
      </ol>

      <div className="services-subjects">
        <h3 className="services-subjects-title">Courses I teach</h3>
        <ul className="services-subject-chips" role="list">
          {subjects.map((subject) => (
            <li key={subject} className="services-subject-chip">
              {subject}
            </li>
          ))}
        </ul>
        <p className="services-subjects-note">
          Not on the list? Reach out - most core CS courses are on the table.
        </p>
      </div>
    </section>
  );
};

export default Services;
