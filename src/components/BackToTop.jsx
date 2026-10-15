
import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";

function BackToTop() {
  const [visible, setVisible] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: reduceMotion ? "instant" : "smooth",
    });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          className="back-to-top"
          aria-label="Back to top"
          onClick={scrollToTop}
          initial={reduceMotion ? false : { opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={reduceMotion ? undefined : { opacity: 0, scale: 0.7 }}
          transition={{ duration: 0.25 }}
          whileHover={reduceMotion ? undefined : { y: -4 }}
          whileTap={reduceMotion ? undefined : { scale: 0.92 }}
        >
          ↑
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export default BackToTop;
