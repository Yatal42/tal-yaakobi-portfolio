interface ProgressBarProps {
  value: number;
  label: string;
  caption?: string;
}

export default function ProgressBar({ value, label, caption }: ProgressBarProps) {
  const clamped = Math.max(0, Math.min(100, value));

  return (
    <div className="progress">
      <div className="progress-meta">
        {caption ? <span>{caption}</span> : null}
        <span className="progress-value" dir="ltr">{clamped}%</span>
      </div>
      <div
        className="progress-track"
        role="progressbar"
        aria-label={label}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={clamped}
      >
        <span className="progress-fill" style={{ inlineSize: `${clamped}%` }} />
      </div>
    </div>
  );
}
