import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

const LineRevealLoading = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(true); // Controls visibility of the overlay
  const progress = useMotionValue(0); // Tracks animation progress
  const clipPathLeft = useTransform(
    progress,
    [0, 50, 100],
    ["0% 0%", "50% 0%", "50% 0%"]
  ); // Clip-path for left side
  const clipPathRight = useTransform(
    progress,
    [0, 50, 100],
    ["100% 0%", "50% 0%", "50% 0%"]
  ); // Clip-path for right side
  const overlayX = useTransform(progress, [0, 100], ["0%", "100%"]); // Overlay slide animation

  useEffect(() => {
    // Simulate loading
    const load = async () => {
      await new Promise((resolve) => setTimeout(resolve, 3000)); // 3-second loading simulation
      setIsLoading(false);
    };

    load();
  }, []);

  useEffect(() => {
    if (isLoading) {
      // Animate progress from 0 to 100 over 3 seconds
      animate(progress, 100, { duration: 3 });
    } else {
      // Animate overlay sliding out
      animate(overlayX, "100%", { duration: 1 }).then(() => {
        setIsVisible(false); // Hide the overlay after animation
      });
    }
  }, [isLoading, progress, overlayX]);

  // Don't render the overlay if it's not visible
  if (!isVisible) return null;

  return (
    <motion.div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "black",
        zIndex: 1000, // Ensure the overlay is on top
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Left Side */}
      {/* <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "50%",
          height: "100%",
          backgroundColor: "white",
          clipPath: clipPathLeft, // Clip-path animation for left side
        }}
      /> */}

      {/* Right Side */}
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "50%",
          height: "100%",
          backgroundColor: "white",
          clipPath: clipPathRight, // Clip-path animation for right side
        }}
      />

      {/* Overlay that slides left and right */}
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "black",
          x: overlayX, // Slide animation
        }}
      />

      {/* Loading Text or Spinner */}
      <motion.div
        style={{
          color: "white",
          fontSize: "24px",
          zIndex: 1001, // Ensure text is above the overlay
        }}
      >
        Loading...
      </motion.div>
    </motion.div>
  );
};

export default LineRevealLoading;
