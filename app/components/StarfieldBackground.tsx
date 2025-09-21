import { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  size: 'small' | 'medium' | 'large';
  opacity: number;
  twinkleSpeed: number;
}

const StarfieldBackground = () => {
  const starfieldRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!starfieldRef.current) return;

    const starfield = starfieldRef.current;
    const stars: Star[] = [];
    const starCount = 300;

    for (let i = 0; i < starCount; i++) {
      const star: Star = {
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() > 0.7 ? 'large' : Math.random() > 0.4 ? 'medium' : 'small',
        opacity: Math.random() * 0.8 + 0.2,
        twinkleSpeed: Math.random() * 3 + 1
      };
      stars.push(star);
    }

    stars.forEach((star, index) => {
      const starElement = document.createElement('div');
      starElement.className = `star ${star.size}`;
      starElement.style.left = `${star.x}%`;
      starElement.style.top = `${star.y}%`;
      starElement.style.opacity = star.opacity.toString();
      starElement.style.animationDuration = `${star.twinkleSpeed}s`;
      starElement.style.animationDelay = `${Math.random() * 2}s`;
      
      starfield.appendChild(starElement);
    });

    return () => {
      if (starfield) {
        starfield.innerHTML = '';
      }
    };
  }, []);

  return <div ref={starfieldRef} className="starfield" />;
};

export default StarfieldBackground;
