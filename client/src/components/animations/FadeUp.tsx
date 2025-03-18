import { motion, useInView } from "framer-motion";
import * as React from "react";

export function FadeUp({
  direction,
  children,
  className = "",
  staggerChildren = 0.1,
  delay = 0, // Added delay prop
}: {
  direction: "up" | "down";
  children: React.ReactNode;
  className?: string;
  staggerChildren?: number;
  delay?: number; // Delay in seconds
}) {
  const FADE_DOWN = {
    hidden: { opacity: 0, y: direction === "down" ? -18 : 18 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        delay: delay, // Apply delay
      },
    },
  };

  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      key={"fade-up"}
      ref={ref}
      initial="hidden"
      animate={isInView ? "show" : ""}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: staggerChildren,
            delayChildren: delay, // Apply delay to child elements
          },
        },
      }}
      className={className}
    >
      {React.Children.map(children, (child, index) =>
        React.isValidElement(child) ? (
          <motion.div key={index} variants={FADE_DOWN}>
            {child}
          </motion.div>
        ) : (
          child
        )
      )}
    </motion.div>
  );
}
