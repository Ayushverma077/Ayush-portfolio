
import {
  motion,
  useScroll,
  useSpring,
  useReducedMotion,
} from "motion/react";

function ScrollProgress() {
  // Track page scroll progress (0 to 1)
  const { scrollYProgress } = useScroll();

  // Smooth spring animation
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    mass: 0.5,
    restDelta: 0.001,
  });

  // Respect accessibility preferences
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className="scroll-progress"
      style={{
        scaleX: reduceMotion
          ? scrollYProgress
          : smoothProgress,
      }}
      role="progressbar"
      aria-label="Page scroll progress"
    />
  );
}

export default ScrollProgress;
