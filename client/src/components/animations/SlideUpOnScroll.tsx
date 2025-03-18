import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface AnimationProps {
  children: ReactNode;
  delay?: number;
}

const SlideUpOnScroll: React.FC<AnimationProps> = ({ children, delay = 0 }) => {
  return (
    <motion.div
      key={"slide-up-on-scroll"}
      initial={{ y: 100 }}
      whileInView={{ y: 0 }}
      exit={{ y: 0 }}
      transition={{ type: "spring", stiffness: 80, damping: 20, delay }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export default SlideUpOnScroll;
