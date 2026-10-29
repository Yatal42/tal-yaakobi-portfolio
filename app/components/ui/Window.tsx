import type { ReactNode } from "react";

interface WindowProps {
  title: string;
  children: ReactNode;
  className?: string;
  bodyClassName?: string;
  actions?: ReactNode;
}

export default function Window({ title, children, className = "", bodyClassName = "", actions }: WindowProps) {
  return (
    <div className={`win ${className}`.trim()}>
      <div className="win-titlebar">
        <span className="win-title" aria-hidden="true">{title}</span>
        {actions ?? (
          <span className="win-controls" aria-hidden="true">
            <span className="win-control">_</span>
            <span className="win-control">□</span>
            <span className="win-control">×</span>
          </span>
        )}
      </div>
      <div className={`win-body ${bodyClassName}`.trim()}>{children}</div>
    </div>
  );
}
