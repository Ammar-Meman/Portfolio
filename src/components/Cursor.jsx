import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState([]);

  const getRandomColor = () => {
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#F333FF', '#FF33A8', '#33FFF5'];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      // Add a new point to the trail
      const newPoint = {
        x: e.clientX,
        y: e.clientY,
        id: Date.now(),
        color: getRandomColor()
      };

      setTrail((prev) => [...prev.slice(-20), newPoint]); // Keep last 20 points
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  // Cleanup trail points over time
  useEffect(() => {
    const interval = setInterval(() => {
      setTrail((prev) => prev.filter(point => Date.now() - point.id < 500));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 rounded-full bg-black z-[9999] pointer-events-none mix-blend-difference"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5
        }}
      />
      <AnimatePresence>
        {trail.map((point, index) => (
          <motion.div
            key={point.id}
            initial={{ opacity: 0.8, scale: 1 }}
            animate={{ opacity: 0, scale: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              position: 'fixed',
              top: point.y,
              left: point.x,
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              backgroundColor: point.color,
              pointerEvents: 'none',
              zIndex: 9998,
              marginTop: '-5px',
              marginLeft: '-5px',
              filter: 'blur(2px)'
            }}
          />
        ))}
      </AnimatePresence>
    </>
  );
};
