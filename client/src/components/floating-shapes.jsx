import { useEffect, useState } from "react";

export function FloatingShapes() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const shapes = [
    { size: 'w-32 h-32', position: 'top-20 left-10', delay: 0 },
    { size: 'w-24 h-24', position: 'top-40 right-20', delay: 1000 },
    { size: 'w-40 h-40', position: 'bottom-20 left-1/4', delay: 2000 },
    { size: 'w-20 h-20', position: 'top-1/3 right-1/3', delay: 3000 },
  ];

  return (
    <div className="floating-shapes absolute inset-0 overflow-hidden pointer-events-none z-0">
      {shapes.map((shape, index) => (
        <div
          key={index}
          className={`floating-shape ${shape.size} ${shape.position}`}
          style={{
            animationDelay: `${shape.delay}ms`,
            transform: `translateY(${scrollY * (index + 1) * 0.1}px)`,
          }}
        />
      ))}
    </div>
  );
}
