import type { ReactNode } from "react";

interface SectionHeaderProps {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  id?: string;
  aside?: ReactNode;
}

export default function SectionHeader({ eyebrow, title, intro, id, aside }: SectionHeaderProps) {
  return (
    <header className="section-header">
      <div className="section-header-text">
        <p className="eyebrow" lang="en" dir="ltr">{eyebrow}</p>
        <h2 className="section-title" id={id}>{title}</h2>
        {intro ? <p className="section-intro">{intro}</p> : null}
      </div>
      {aside ? <div className="section-header-aside">{aside}</div> : null}
    </header>
  );
}
