
import { useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

function SpotlightCard({ children, className = "" }) {
  const cardRef = useRef(null);
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const reduceMotion = useReducedMotion();

  const handleMouseMove = (event) => {
    if (reduceMotion || !cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();

    setPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  return (
    <motion.div
      ref={cardRef}
      className={`spotlight-card ${className}`}
      onMouseMove={handleMouseMove}
      whileHover={
        reduceMotion ? undefined : { y: -5 }
      }
      transition={{
        duration: 0.3,
        ease: "easeOut",
      }}
      style={{
        "--mouse-x": `${position.x}px`,
        "--mouse-y": `${position.y}px`,
      }}
    >
      {children}
    </motion.div>
  );
}

export default SpotlightCard;
