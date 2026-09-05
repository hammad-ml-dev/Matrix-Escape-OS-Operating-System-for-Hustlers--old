import React from 'react';

interface MatrixBackgroundProps {
  intensity?: 'low' | 'medium' | 'high';
}

export const MatrixBackground: React.FC<MatrixBackgroundProps> = ({ intensity = 'low' }) => {
  const getCharCount = () => {
    switch (intensity) {
      case 'low': return 50;
      case 'medium': return 100;
      case 'high': return 200;
      default: return 50;
    }
  };

  const charCount = getCharCount();
  const chars = React.useMemo(() => {
    return Array.from({ length: charCount }).map(() => ({
      char: String.fromCharCode(33 + Math.floor(Math.random() * 94)),
      x: Math.random() * 100,
      y: Math.random() * 100,
      opacity: 0.1 + Math.random() * 0.9,
      speed: 1 + Math.random() * 3,
      size: 0.8 + Math.random() * 1.2,
    }));
  }, [charCount]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20 dark:opacity-40">
      {chars.map((c, i) => (
        <div
          key={i}
          className="absolute font-matrix text-royal-primary dark:text-matrix-primary animate-matrix-flow"
          style={{
            left: `${c.x}%`,
            top: `${c.y - 10}%`,
            opacity: c.opacity,
            animationDuration: `${20 / c.speed}s`,
            fontSize: `${c.size}rem`,
          }}
        >
          {c.char}
        </div>
      ))}
    </div>
  );
};