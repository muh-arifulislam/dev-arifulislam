import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface AnimationProps {
  children: ReactNode;
}

const FadeOut: React.FC<AnimationProps> = ({ children }) => {
  return (
    <motion.div
      key={"fade-out"}
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      exit={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default FadeOut;
