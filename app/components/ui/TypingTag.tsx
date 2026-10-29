import { useEffect, useState } from "react";

interface TypingTagProps {
  text: string;
  speed?: number;
  delay?: number;
}

export default function TypingTag({ text, speed = 70, delay = 400 }: TypingTagProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCount(text.length);
      return;
    }

    setCount(0);
    let interval: number | undefined;
    const start = window.setTimeout(() => {
      interval = window.setInterval(() => {
        setCount((current) => {
          if (current + 1 >= text.length) window.clearInterval(interval);
          return Math.min(current + 1, text.length);
        });
      }, speed);
    }, delay);

    return () => {
      window.clearTimeout(start);
      window.clearInterval(interval);
    };
  }, [text, speed, delay]);

  const typing = count < text.length;

  return (
    <p className="hero-tag" lang="en" dir="ltr">
      <span className="sr-only">{text}</span>
      <span className="hero-tag-typed" aria-hidden="true">
        {text.slice(0, count)}
        <span className={typing ? "hero-cursor hero-cursor-solid" : "hero-cursor"}>_</span>
        <span className="hero-tag-rest">{text.slice(count)}</span>
      </span>
    </p>
  );
}
