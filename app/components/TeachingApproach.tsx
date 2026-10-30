import SectionHeader from "./ui/SectionHeader";
import Window from "./ui/Window";
import { useI18n } from "../lib/locale";

export default function TeachingApproach() {
  const { t } = useI18n();

  return (
    <section id="approach" className="section" aria-labelledby="approach-title">
      <div className="container">
        <SectionHeader eyebrow={t.approach.eyebrow} title={t.approach.title} id="approach-title" />
        <ol className="approach-grid">
          {t.approach.items.map((item, index) => (
            <li key={item.title}>
              <Window title={`step_${String(index + 1).padStart(2, "0")}.txt`} className="fill">
                <h3 className="card-title">{item.title}</h3>
                <p className="card-text">{item.text}</p>
              </Window>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
