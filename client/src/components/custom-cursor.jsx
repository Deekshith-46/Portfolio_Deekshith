import { useEffect, useState } from "react";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    // Track mouse movement
    document.addEventListener('mousemove', updatePosition);

    // Add hover effects for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .project-card, .glass-morphism, .hover-lift, .card-3d');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div 
        className="custom-cursor hidden lg:block"
        style={{
          left: position.x - 10,
          top: position.y - 10,
          transform: isHovering ? 'scale(1.5)' : 'scale(1)',
          backgroundColor: isHovering ? 'rgba(139, 92, 246, 0.2)' : 'transparent'
        }}
      />
      <div 
        className="custom-cursor-dot hidden lg:block"
        style={{
          left: position.x - 2,
          top: position.y - 2,
        }}
      />
    </>
  );
}