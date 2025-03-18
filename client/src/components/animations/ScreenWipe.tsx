import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import useIsMobile from "../../hooks/useIsMobile";

const ScreenWipe = () => {
  const [isAnimating, setIsAnimating] = useState(true);
  const [isCompleted, setIsCompleted] = useState(false);
  const isMobile = useIsMobile(560);

  useEffect(() => {
    setTimeout(() => {
      setIsAnimating(false);
    }, 1800); // Unmount after animations
    setTimeout(() => {
      setIsCompleted(true);
    }, 800); // Unmount after animations
  }, []);

  return (
    isAnimating &&
    !isMobile && (
      <>
        {/* Left panel (Starts slightly after middle div) */}
        <motion.div
          key={"screen-wipe-left"}
          initial={{ scaleX: 1 }}
          animate={{ scaleX: 0 }}
          exit={{ scaleX: 1 }}
          transition={{ delay: 0.8, duration: 1, ease: "easeInOut" }}
          className="fixed top-0 left-0 w-[50%] h-full bg-blue-600 origin-left z-50"
        />

        {/* Middle divider (Disappears immediately) */}
        {!isCompleted && (
          <motion.div
            key={"screen-wipe-middle"}
            initial={{ scaleY: 0 }}
            animate={{
              scaleY: 1,
            }}
            exit={{ scaleY: 0, width: 0, display: "none" }}
            transition={{ duration: 0.8, ease: "easeInOut" }} // No delay
            className="fixed top-0 left-[50%] translate-x-[-50%] w-1 h-full bg-white z-[9999]"
          />
        )}

        {/* Right panel (Starts slightly after middle div) */}
        <motion.div
          key={"screen-wipe-right"}
          initial={{ scaleX: 1 }}
          animate={{ scaleX: 0 }}
          exit={{ scaleX: 1 }}
          transition={{ delay: 0.8, duration: 1, ease: "easeInOut" }}
          className="fixed top-0 right-0 w-[50%] h-full bg-blue-600 origin-right z-50"
        />
      </>
    )
  );
};

export default ScreenWipe;
