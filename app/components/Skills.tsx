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
import SectionHeader from './ui/SectionHeader';
import { useI18n } from '../lib/locale';

const techIcons = [
  { name: 'React', Icon: SiReact },
  { name: 'TypeScript', Icon: SiTypescript },
  { name: 'Next.js', Icon: SiNextdotjs },
  { name: 'Tailwind', Icon: SiTailwindcss },
  { name: 'HTML5', Icon: SiHtml5 },
  { name: 'CSS3', Icon: SiCss },
  { name: 'Node.js', Icon: SiNodedotjs },
  { name: 'NestJS', Icon: SiNestjs },
  { name: 'Python', Icon: SiPython },
  { name: 'Express', Icon: SiExpress },
  { name: 'PostgreSQL', Icon: SiPostgresql },
  { name: 'MongoDB', Icon: SiMongodb },
  { name: 'MySQL', Icon: SiMysql },
  { name: 'Vite', Icon: SiVite },
  { name: 'C#/.NET', Icon: SiDotnet }
];

const Skills = () => {
  const { t } = useI18n();

  return (
    <section id="skills" className="section" aria-labelledby="skills-title">
      <div className="container">
        <SectionHeader eyebrow={t.development.skillsEyebrow} title={t.development.skillsTitle} id="skills-title" />
        <ul className="skills-grid" aria-label={t.development.technologiesLabel}>
          {techIcons.map(({ name, Icon }) => (
            <li key={name} className="skills-tile" dir="ltr">
              <Icon size={22} aria-hidden="true" className="skills-icon" />
              <span>{name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
