import {
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiNodedotjs,
  SiNestjs,
  SiPython,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiVite,
  SiDotnet
} from 'react-icons/si';

const Skills = () => {
  const techIcons = [
    { name: 'React', Icon: SiReact, color: '#61DAFB' },
    { name: 'TypeScript', Icon: SiTypescript, color: '#3178C6' },
    { name: 'Next.js', Icon: SiNextdotjs, color: '#FFFFFF' },
    { name: 'Tailwind', Icon: SiTailwindcss, color: '#06B6D4' },
    { name: 'HTML5', Icon: SiHtml5, color: '#E34F26' },
    { name: 'CSS3', Icon: SiCss, color: '#1572B6' },
    { name: 'Node.js', Icon: SiNodedotjs, color: '#5FA04E' },
    { name: 'NestJS', Icon: SiNestjs, color: '#E0234E' },
    { name: 'Python', Icon: SiPython, color: '#3776AB' },
    { name: 'Express', Icon: SiExpress, color: '#FFFFFF' },
    { name: 'PostgreSQL', Icon: SiPostgresql, color: '#4169E1' },
    { name: 'MongoDB', Icon: SiMongodb, color: '#47A248' },
    { name: 'MySQL', Icon: SiMysql, color: '#4479A1' },
    { name: 'Vite', Icon: SiVite, color: '#646CFF' },
    { name: 'C#/.NET', Icon: SiDotnet, color: '#512BD4' }
  ];

  return (
    <section id="skills" className="retro-section skills-section">
      <h2 className="retro-section-title skills-title">What I'm Good At</h2>
      <div className="skills-content">
        <h3 className="skills-subtitle">Technical Skills</h3>
        <p className="skills-description">
          Technology stack for building products end-to-end with a strong focus on quality and user experience.
        </p>
        <div className="skills-showcase">
          <div
            role="list"
            aria-label="Technologies"
            className="skills-tech-grid"
          >
            {techIcons.map((tech) => (
              <div
                key={tech.name}
                role="listitem"
                aria-label={tech.name}
                className="skills-tech-tile"
              >
                <tech.Icon
                  size={30}
                  color={tech.color}
                  aria-hidden="true"
                  className="skills-tech-icon"
                />
                <span className="skills-tech-name">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;